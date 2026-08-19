import {
    loadModules
} from '/assets/js/utils/loadModules.js';

document.addEventListener('DOMContentLoaded', async () => {
    const currentScript = document.querySelector(`[data-modules]`);

    if (!currentScript) return;

    const modulesValue = currentScript.getAttribute('data-modules');
    const modules = modulesValue ? modulesValue.split(',') : [];
    await loadModules(modules);
});