const DropdownMenu = (function() {
    const dropdownMenus = document.querySelectorAll('.menu-dropdown');

    function hideAllDropdownMenus() {
        dropdownMenus.forEach((dropdown) => {
            const menuIcon = dropdown.closest('.menu-item').querySelector('.menu-item-icon');
            menuIcon.classList.remove('rotate-menu-icon');
            dropdown.classList.remove('dropdown-opened');
        });
    }

    function toggleDropdown(button) {
        const dropdown = button.querySelector('.menu-dropdown');
        const menuIcon = dropdown.closest('.menu-item').querySelector('.menu-item-icon');
        const dropdownOpened = dropdown.classList.contains('dropdown-opened');

        hideAllDropdownMenus();

        if (!dropdownOpened) {
            dropdown.classList.add('dropdown-opened');
            menuIcon.classList.add('rotate-menu-icon');
        }
    }

    function handleDropdownClick(event) {
        const dropdownButton = event.target.closest('.menu-item-dropdown');
        if (dropdownButton && window.innerWidth <= 1024) {
            toggleDropdown(dropdownButton);
        } else {
            hideAllDropdownMenus();
        }
    }

    function init() {
        document.addEventListener('click', handleDropdownClick);
        window.addEventListener('beforeunload', destroy);
    }

    function destroy() {
        document.removeEventListener('click', handleDropdownClick);
        window.removeEventListener('beforeunload', destroy);
    }

    return {
        init,
        destroy,
    };
})();

const TopAnchor = (function() {
    function init() {
        const scrollToTopButton = document.querySelector('[data-js="scroll-to-top"]');
        if (!scrollToTopButton) return;

        function scrollToTop() {
            window.scrollTo({
                top: 0
            });
        }
        scrollToTopButton.onclick = scrollToTop;

        window.onscroll = function() {
            const scrollHeight = window.innerHeight;
            if (window.scrollY > scrollHeight) {
                scrollToTopButton.classList.add('active');
            } else {
                scrollToTopButton.classList.remove('active');
            }
        };
    }

    return {
        init
    };
})();

const ElementObserver = (function() {
    let observer = null;

    function init() {
        const elementsToObserve = document.querySelectorAll('[data-js="on-intersecting"]');
        if (!elementsToObserve.length) return;

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const targetElement = entry.target;
                const className = targetElement.getAttribute('data-js-class');
                const shouldToggle = targetElement.getAttribute('data-js-class-toggle') === 'true';

                if (!shouldToggle && targetElement.classList.contains(className)) return;

                if (entry.isIntersecting) {
                    targetElement.classList.add(className);
                } else if (shouldToggle) {
                    targetElement.classList.remove(className);
                }
            });
        });

        elementsToObserve.forEach((element) => {
            observer.observe(element);
        });
    }

    function destroy() {
        if (!observer) return;
        observer.disconnect();
        observer = null;
    }

    return {
        init,
        destroy
    };
})();

const FormsHandler = (function() {
    function globalSearchForm() {
        const toggleSearchFormInputControl = document.getElementById('toggle-search-form');
        const searchInput = document.getElementById('search-input');

        if (!(toggleSearchFormInputControl && searchInput)) {
            return;
        }

        toggleSearchFormInputControl.addEventListener('change', () => {
            const isChecked = toggleSearchFormInputControl.checked;
            isChecked ? searchInput.focus() : searchInput.blur();
        });
    }

    function init() {
        globalSearchForm();
    }

    return {
        init
    };
})();

const ImageLightbox = (function() {
    let lightboxElement = null;
    let lightboxContent = null;
    let lightboxImage = null;
    let closeButton = null;
    let currentImage = null;
    let prevButton = null;
    let nextButton = null;
    let swiperSlides = [];
    let currentSlideIndex = 0;
    let isInSwiper = false;

    function getSwiperSlides(swiperContainer) {
        const allSlides = Array.from(swiperContainer.querySelectorAll('.swiper-slide'));
        const slidesWithImages = allSlides.filter((slide) => getSlideImage(slide) !== null);
        return slidesWithImages;
    }

    function getSlideImage(slide) {
        return slide.querySelector('img[data-js="expandable-image"]');
    }

    function findSwiperContainer(image) {
        return image.closest('.swiper-slide') ? .closest('.swiper') || null;
    }

    function updateNavigationButtons() {
        if (!prevButton || !nextButton) return;

        if (!isInSwiper || swiperSlides.length <= 1) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }
    }

    function navigateToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= swiperSlides.length) {
            return;
        }

        currentSlideIndex = slideIndex;
        const targetSlide = swiperSlides[currentSlideIndex];

        const targetImage = getSlideImage(targetSlide);

        if (targetImage) {
            lightboxImage.src = targetImage.src;
            lightboxImage.alt = targetImage.alt || '';
            currentImage = targetImage;
        }
    }

    function showPrevImage() {
        if (currentSlideIndex > 0) {
            navigateToSlide(currentSlideIndex - 1);
        } else {
            navigateToSlide(swiperSlides.length - 1); // Loop to last slide
        }
    }

    function showNextImage() {
        if (currentSlideIndex < swiperSlides.length - 1) {
            navigateToSlide(currentSlideIndex + 1);
        } else {
            navigateToSlide(0);
        }
    }

    function createLightboxElement() {
        if (lightboxElement) return;

        lightboxElement = document.createElement('div');
        lightboxElement.className = 'popup-lightbox';
        lightboxElement.setAttribute('data-js', 'image-lightbox');

        closeButton = document.createElement('button');
        closeButton.className = 'popup-lightbox-close';
        closeButton.setAttribute('aria-label', 'Close lightbox');

        // Create navigation buttons
        prevButton = document.createElement('button');
        prevButton.className = 'popup-lightbox-nav popup-lightbox-prev';
        prevButton.setAttribute('aria-label', 'Previous image');
        prevButton.innerHTML = '&#8249;'; // Left arrow character

        nextButton = document.createElement('button');
        nextButton.className = 'popup-lightbox-nav popup-lightbox-next';
        nextButton.setAttribute('aria-label', 'Next image');
        nextButton.innerHTML = '&#8250;'; // Right arrow character

        lightboxContent = document.createElement('div');
        lightboxContent.className = 'popup-lightbox-content';

        lightboxImage = document.createElement('img');
        lightboxImage.alt = '';

        lightboxContent.appendChild(lightboxImage);
        lightboxElement.appendChild(closeButton);
        lightboxElement.appendChild(prevButton);
        lightboxElement.appendChild(nextButton);
        lightboxElement.appendChild(lightboxContent);

        document.body.appendChild(lightboxElement);
    }

    function showLightbox(imageSrc, imageAlt = '') {
        if (!lightboxElement) createLightboxElement();

        // Check if current image is in a swiper
        const swiperContainer = findSwiperContainer(currentImage);
        isInSwiper = !!swiperContainer;

        if (isInSwiper) {
            swiperSlides = getSwiperSlides(swiperContainer);
            // Find the current slide by looking for the slide that contains our current image
            currentSlideIndex = swiperSlides.findIndex((slide) => {
                const slideImage = getSlideImage(slide);
                return slideImage === currentImage;
            });

            // If we couldn't find the slide, default to 0
            if (currentSlideIndex === -1) {
                currentSlideIndex = 0;
            }
        } else {
            swiperSlides = [];
            currentSlideIndex = 0;
        }

        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;
        lightboxElement.classList.add('active');
        document.body.style.overflow = 'hidden';

        updateNavigationButtons();

        // Focus management for accessibility
        closeButton.focus();
    }

    function hideLightbox() {
        if (!lightboxElement) return;

        lightboxElement.classList.remove('active');
        document.body.style.overflow = '';

        // Clear the image source to prevent showing old image when reopening
        if (lightboxImage) {
            lightboxImage.src = '';
            lightboxImage.alt = '';
        }

        // Reset swiper-related state
        isInSwiper = false;
        swiperSlides = [];
        currentSlideIndex = 0;

        // Return focus to the original image if it still exists
        if (currentImage && document.contains(currentImage)) {
            currentImage.focus();
        }
    }

    function handleImageClick(event) {
        const image = event.target;
        if (!image.hasAttribute('data-js') || image.getAttribute('data-js') !== 'expandable-image') {
            return;
        }

        currentImage = image;
        const imageSrc = image.src;
        const imageAlt = image.alt || '';

        showLightbox(imageSrc, imageAlt);
    }

    function handleLightboxClick(event) {
        // Close on overlay click (but not on image click)
        if (event.target === lightboxElement) {
            hideLightbox();
        }
    }

    function handleCloseButtonClick() {
        hideLightbox();
    }

    function handleKeydown(event) {
        if (!lightboxElement || !lightboxElement.classList.contains('active')) {
            return;
        }

        if (event.key === 'Escape') {
            hideLightbox();
        } else if (isInSwiper && swiperSlides.length > 1) {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                showNextImage();
            }
        }
    }

    function handleContentClick(event) {
        // Prevent event bubbling when clicking on the image content
        event.stopPropagation();
    }

    function init() {
        // Add click listeners to all expandable images
        document.addEventListener('click', handleImageClick);

        // Add keyboard support
        document.addEventListener('keydown', handleKeydown);

        // Create lightbox and add event listeners when first needed
        document.addEventListener('click', (event) => {
            if (event.target.closest('[data-js="image-lightbox"]')) {
                if (event.target.classList.contains('popup-lightbox-close')) {
                    handleCloseButtonClick();
                } else if (event.target.classList.contains('popup-lightbox-prev')) {
                    showPrevImage();
                } else if (event.target.classList.contains('popup-lightbox-next')) {
                    showNextImage();
                } else if (event.target.closest('.popup-lightbox-content')) {
                    handleContentClick(event);
                } else {
                    handleLightboxClick(event);
                }
            }
        });
    }

    function destroy() {
        document.removeEventListener('click', handleImageClick);
        document.removeEventListener('keydown', handleKeydown);

        if (lightboxElement && lightboxElement.parentNode) {
            lightboxElement.parentNode.removeChild(lightboxElement);
            lightboxElement = null;
            lightboxContent = null;
            lightboxImage = null;
            closeButton = null;
            prevButton = null;
            nextButton = null;
        }

        // Reset swiper-related variables
        swiperSlides = [];
        currentSlideIndex = 0;
        isInSwiper = false;
        currentImage = null;

        document.body.style.overflow = '';
    }

    return {
        init,
        destroy,
    };
})();

const PromotionalPopup = (function() {
    const LEGACY_DISMISS_COOKIE_NAME = 'promotional_popup_dismissed';
    let dismissCookieName = LEGACY_DISMISS_COOKIE_NAME;
    let root = null;

    function buildDismissCookiePresenceRegExp(cookieName) {
        const escaped = cookieName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp('(?:^|;\\s*)' + escaped + '=');
    }

    function resolveDismissCookieName(popupRoot) {
        const popupId = popupRoot.dataset.promotionalPopupId;
        if (popupId) {
            return `${LEGACY_DISMISS_COOKIE_NAME}_${popupId}`;
        }
        return LEGACY_DISMISS_COOKIE_NAME;
    }

    function executeShow() {
        root.removeAttribute('hidden');
        root.removeAttribute('aria-hidden');
        setTimeout(() => {
            root.style.opacity = '1';
        }, 150);
    }

    function scheduleAfterLoad() {
        const showDelayMs = Number(root.dataset.showDelayMs);
        window.setTimeout(executeShow, showDelayMs);
    }

    function executeDismiss() {
        const ms = Number(root.dataset.dismissSuppressionMs);
        document.cookie = `${dismissCookieName}=1; Path=/; Max-Age=${Math.max(1, Math.floor(ms / 1000))}; SameSite=Lax`;
        root.setAttribute('hidden', '');
        root.setAttribute('aria-hidden', 'true');
    }

    function init() {
        root = document.querySelector('[data-js="promotional-popup"]');
        if (!root) {
            return;
        }

        dismissCookieName = resolveDismissCookieName(root);
        if (buildDismissCookiePresenceRegExp(dismissCookieName).test(document.cookie)) {
            return;
        }
        const closeButton = root.querySelector('[data-js="promotional-popup-close"]');
        if (closeButton !== null) {
            closeButton.addEventListener('click', executeDismiss);
        }
        if (document.readyState === 'complete') {
            scheduleAfterLoad();
        } else {
            window.addEventListener('load', scheduleAfterLoad);
        }
    }

    function destroy() {
        window.removeEventListener('load', scheduleAfterLoad);
    }

    return {
        init,
        destroy,
    };
})();

const init = () => {
    PromotionalPopup.init();
    DropdownMenu.init();
    TopAnchor.init();
    FormsHandler.init();
    ElementObserver.init();
    ImageLightbox.init();
};

const cleanup = () => {
    ImageLightbox.destroy();
    ElementObserver.destroy();
    PromotionalPopup.destroy();
};

document.addEventListener('DOMContentLoaded', init);

// Handle page show event (fires when page is loaded from cache or navigation)
window.addEventListener('pageshow', (event) => {
    // If page is loaded from cache (back/forward navigation)
    if (event.persisted) {
        init();
    }
});

// Clean up before page unload
window.addEventListener('beforeunload', cleanup);
// Handle page hide event (when navigating away)
window.addEventListener('pagehide', cleanup);