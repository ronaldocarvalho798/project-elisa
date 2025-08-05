document.addEventListener('DOMContentLoaded', () => {
    const triggerImages = document.querySelectorAll('.trigger-image');
    const tabPanels = document.querySelectorAll('.tab-panel');

    triggerImages.forEach(image => {
        image.addEventListener('click', () => {
            const targetId = image.getAttribute('data-target');

            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.classList.add('hidden');
            });

            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
                targetPanel.classList.add('active');
            }
        });
    });
});

const headerDesktop = document.getElementById('headerdesktop');
const linksNav = document.querySelectorAll('.links-nav');

function scrollHeader() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            headerDesktop.classList.add('scrolled-header');
        } else {
            headerDesktop.classList.remove('scrolled-header');
        }
        if (window.scrollY > 600) {
            linksNav.forEach(link => {
                link.classList.add('redd');
            });
        } else {
            linksNav.forEach(link => {
                link.classList.remove('redd');
            });
        }
    });
}

scrollHeader();


