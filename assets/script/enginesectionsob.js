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
const logoImage = document.querySelector('.logo');

function scrollHeader() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            headerDesktop.classList.add('scrolled-header');
        } else {
            headerDesktop.classList.remove('scrolled-header');
        }
        if (window.scrollY > 680) {
            linksNav.forEach(link => {
                link.classList.add('redd');
            });
            logoImage.src = '/assets/images/logowhite3.png';
        } else {
            linksNav.forEach(link => {
                link.classList.remove('redd');
            });
            logoImage.src = '/assets/images/logoprint2.png';
        }
    });
}

scrollHeader();


