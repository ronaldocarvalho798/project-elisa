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
