/**
 * Experiment Tracking Module
 *
 * Reads experiment metadata from `<script type="application/json" data-experiments>`
 * elements rendered by the server and fires tracking events (starting with page_visit).
 *
 * The visitor_id is read server-side from the httpOnly cookie — the POST body
 * only carries experiment/variant IDs and the event name.
 */

const TRACKING_ENDPOINT = '/v1/api/experiment-events';

function resolveVariantId(experiment) {
    if (!experiment || typeof experiment !== 'object') return null;

    if (experiment.selectedVariantId != null) {
        return experiment.selectedVariantId;
    }

    if (!Array.isArray(experiment.variants)) {
        return null;
    }

    const controlVariant = experiment.variants.find((variant) => variant ? .isControl === true);
    return controlVariant ? .id ? ? null;
}

/**
 * Collect all experiment metadata blocks on the page.
 * Each block may contain an array of experiments with their selected variant.
 */
function getExperimentsFromDOM() {
    const scripts = document.querySelectorAll('script[data-experiments]');
    const experiments = [];

    scripts.forEach((script) => {
        try {
            const data = JSON.parse(script.textContent);
            if (Array.isArray(data)) {
                experiments.push(...data);
            }
        } catch {
            console.warn('[experiment-tracking] Failed to parse experiment JSON');
        }
    });

    return experiments;
}

/**
 * Send a single experiment event to the server.
 * Uses fetch with keepalive so it survives page unloads.
 */
function sendTrackingEvent({
    experimentId,
    variantId,
    eventName,
    pagePath,
    metadata
}) {
    const body = {
        experimentId,
        variantId,
        eventName,
    };

    if (pagePath) body.pagePath = pagePath;
    if (metadata) body.metadata = metadata;

    return fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        keepalive: true,
    }).catch(() => {
        console.log('[experiment-tracking] Failed to send tracking event');
    });
}

/**
 * Track page_visit for every experiment present on the current page.
 * Deduplicates by experimentId so reloading the module won't double-count.
 */
function trackPageVisits(experiments) {
    const pagePath = globalThis.location.pathname.replace(/^\//, '');
    const seen = new Set();

    for (const exp of experiments) {
        const variantId = resolveVariantId(exp);
        if (!exp.id || variantId == null) continue;
        if (exp.noTracking) continue;
        if (seen.has(exp.id)) continue;
        seen.add(exp.id);

        sendTrackingEvent({
            experimentId: exp.id,
            variantId,
            eventName: 'page_visit',
            pagePath,
            metadata: {
                page: pagePath,
                referrer: document.referrer || null
            },
        });
    }
}

/**
 * Track a form_submission conversion for all active experiments on the page.
 * Call this after a successful form submit.
 *
 * @param {string} [conversionType] - Label, e.g. 'lead_request'
 */
export function trackConversion(conversionType) {
    const experiments = getExperimentsFromDOM();
    const pagePath = globalThis.location.pathname.replace(/^\//, '');

    for (const exp of experiments) {
        const variantId = resolveVariantId(exp);
        if (!exp.id || variantId == null) continue;
        if (exp.noTracking) continue;

        sendTrackingEvent({
            experimentId: exp.id,
            variantId,
            eventName: 'form_submission',
            pagePath,
            metadata: conversionType ? {
                conversion_type: conversionType
            } : undefined,
        });
    }
}

/**
 * Track a click conversion for all active experiments on the page.
 * Attach this to CTA buttons, links, or other interactive elements.
 *
 * @param {string} [clickTarget] - Label, e.g. 'cta_button', 'pricing_link', 'download_btn'
 */
export function trackClick(clickTarget) {
    const experiments = getExperimentsFromDOM();
    const pagePath = globalThis.location.pathname.replace(/^\//, '');

    for (const exp of experiments) {
        const variantId = resolveVariantId(exp);
        if (!exp.id || variantId == null) continue;
        if (exp.noTracking) continue;

        sendTrackingEvent({
            experimentId: exp.id,
            variantId,
            eventName: 'click',
            pagePath,
            metadata: clickTarget ? {
                conversion_type: clickTarget
            } : undefined,
        });
    }
}

/**
 * Auto-bind elements with `data-track` attributes.
 *
 * Format: data-track="event:target"
 * Examples:
 *   data-track="click:cta_button"    → trackClick('cta_button') on click
 *   data-track="click:pricing_link"  → trackClick('pricing_link') on click
 *   data-track="submit:contact_form" → trackConversion('contact_form') on submit
 *
 * Supported events:
 *   "click"  → listens for 'click' DOM event, fires trackClick(target)
 *   "submit" → listens for 'submit' DOM event, fires trackConversion(target)
 */
function bindDataTrackAttributes() {
    const elements = document.querySelectorAll('[data-track]');

    elements.forEach((el) => {
        const value = el.dataset.track;
        if (!value) return;

        const colonIndex = value.indexOf(':');
        if (colonIndex === -1) return;

        const event = value.slice(0, colonIndex);
        const target = value.slice(colonIndex + 1);

        if (event === 'click') {
            el.addEventListener('click', () => trackClick(target), {
                once: false
            });
        } else if (event === 'submit') {
            el.addEventListener('submit', () => trackConversion(target), {
                once: false
            });
        }
    });
}

/**
 * Module entry point — called by the loadModules system.
 */
export default function experimentTrackingModule() {
    const experiments = getExperimentsFromDOM();
    if (!experiments.length) return;

    document.addEventListener('experiment:conversion', (event) => {
        trackConversion(event.detail ? .type);
    });

    trackPageVisits(experiments);
    bindDataTrackAttributes();
}