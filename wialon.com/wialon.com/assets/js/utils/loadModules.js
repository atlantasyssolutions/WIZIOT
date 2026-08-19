export async function loadModule(modulePath) {
    try {
        const module = await
        import (modulePath);
        if (typeof module.default === 'function') {
            module.default();
        }
    } catch (error) {
        console.error(`Error loading module: ${modulePath}`, error);
    }
}

export async function loadModules(modules) {
    if (!Array.isArray(modules)) return;

    for (const modulePath of modules) {
        await loadModule(modulePath);
    }
}