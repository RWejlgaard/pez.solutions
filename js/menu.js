// Global menu configuration - edit this to update the menu across all pages
const menuItems = [
    { href: "/", text: "Home", style: "color: violet" },

    { type: "divider", text: "Documents" },
    // { href: "/handbook.pdf", text: "Pez Handbook", disabled: true, note: "Being written" },
    { href: "/infrastructure-specification.pdf", text: "Infra. Spec.", note: "PDF" },
    // { href: "/state-of-the-hardware.pdf", text: "State of the Hardware", note: "PDF" },

    { type: "divider", text: "Pez Unified Login", note: "coming soon" },
    { href: "/login", text: "Log in", disabled: true },
    { href: "/dashboard", text: "Dashboard", disabled: true },
    

    { type: "divider", text: "Services" },
    { href: "/services/media", text: "Media" },
    { href: "/services/email", text: "E-Mail", disabled: true, note: "coming soon" },
    { href: "/services/bitwarden", text: "Password Manager", disabled: true, note: "coming soon" },

    { type: "divider", text: "Game Servers" },
    { href: "/servers/wow", text: "WoW Server" },
    { href: "/servers/minecraft", text: "Minecraft" },

    { type: "divider", text: "Incidents" },
    { href: "/rca", text: "Incidents" },

    { type: "divider", text: "Blog" },
    { href: "/deep-thoughts", text: "Deep Thoughts (Blog)" },

    { type: "divider", text: "Legal" },
    { href: "/legal", text: "Legal" },

    { type: "divider", text: "External Links" },
    { href: "https://public.pez.solutions", text: "Public Storage" },
    { href: "https://donate.stripe.com/4gw01o0nF9Uk2k0002", text: "Donate" }
];

// Function to check if a menu item is active (current page)
function isActivePage(href) {
    const currentPath = window.location.pathname;

    // Handle home page
    if (href === "/" && currentPath === "/") {
        return true;
    }

    // Handle other pages - check if current path starts with the href
    if (href !== "/" && currentPath.startsWith(href)) {
        return true;
    }

    return false;
}

// Function to generate menu HTML
function generateMenuHTML() {
    return menuItems.map(item => {
        if (item.type === "divider") {
            let dividerContent = item.text;
            if (item.note) {
                dividerContent += ` <span class="menu-note">${item.note}</span>`;
            }
            return `<div class="sidemenu-divider">${dividerContent}</div>`;
        } else {
            const isActive = isActivePage(item.href);
            const isDisabled = item.disabled === true;

            let classes = [];
            if (isActive && !isDisabled) classes.push('active');
            if (isDisabled) classes.push('disabled');

            const classAttr = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
            const style = (item.href === "/" && !isActive && !isDisabled) ? ' style="color: violet"' : '';

            // Build the link content
            let linkContent = item.text;
            if (item.note) {
                linkContent += ` <span class="menu-note">${item.note}</span>`;
            }

            // If disabled, use span instead of link
            if (isDisabled) {
                return `<span${classAttr}${style}>${linkContent}</span>`;
            } else {
                return `<a href="${item.href}"${classAttr}${style}>${linkContent}</a>`;
            }
        }
    }).join('\n            ');
}

// Function to initialize the menu
function initializeMenu() {
    const sidemenu = document.getElementById('sidemenu');
    if (sidemenu) {
        sidemenu.innerHTML = generateMenuHTML();
    }

    // Initialize menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const container = document.querySelector('.container');

    if (menuToggle && container && sidemenu) {
        menuToggle.addEventListener('click', () => {
            sidemenu.classList.toggle('collapsed');
            menuToggle.classList.toggle('collapsed');
            container.classList.toggle('menu-collapsed');
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMenu);