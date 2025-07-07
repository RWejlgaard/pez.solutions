function generateGlobalMenu() {
    const sidemenu = document.getElementById('sidemenu');
    if (!sidemenu) return;

    // Get current page path to highlight active menu items
    let currentPath = window.location.pathname;
    // Remove trailing slash except for root
    if (currentPath !== '/' && currentPath.endsWith('/')) {
        currentPath = currentPath.slice(0, -1);
    }

    // Helper function to check if a path is active
    const isActive = (path) => {
        if (path === '/' && currentPath === '/') return true;
        if (path !== '/' && (currentPath === path || currentPath.startsWith(path + '/'))) return true;
        return false;
    };

    const menuHTML = `
        <!-- Main Navigation -->
        <div class="nav-section">
            <a href="/" ${isActive('/') ? 'style="color: violet"' : ''}>Home</a>
            <a href="/services" ${isActive('/services') ? 'style="color: violet"' : ''}>Services</a>
            <a href="/docs" ${isActive('/docs') ? 'style="color: violet"' : ''}>Documentation</a>
        </div>

        <!-- Technical & Development -->
        <div class="nav-section">
            <div class="nav-header">Technical</div>
            <a href="/projects" ${isActive('/projects') ? 'style="color: violet"' : ''}>Projects</a>
            <a href="/rca" ${isActive('/rca') ? 'style="color: violet"' : ''}>Incidents</a>
            <a href="/deep-thoughts" ${isActive('/deep-thoughts') ? 'style="color: violet"' : ''}>Deep Thoughts (Blog)</a>
        </div>

        <!-- Storage & Files -->
        <div class="nav-section">
            <div class="nav-header">Storage</div>
            <a href="/drive" ${isActive('/drive') ? 'style="color: violet"' : ''}>Cloud Storage <span style="font-size: 12px; color: violet; margin-top: 0;">(New!)</span></a>
            <a href="https://public.pez.solutions" target="_blank">Public Storage</a>
        </div>

        <!-- Legal & Support -->
        <div class="nav-section">
            <div class="nav-header">Support</div>
            <a href="/legal" ${isActive('/legal') ? 'style="color: violet"' : ''}>Legal</a>
            <a href="https://donate.stripe.com/4gw01o0nF9Uk2k0002" target="_blank">Donate</a>
        </div>
    `;

    sidemenu.innerHTML = menuHTML;
}

// Initialize the global menu when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateGlobalMenu); 