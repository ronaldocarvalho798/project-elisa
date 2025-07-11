function updateHealthBar(barId, percentage) {
            const healthBar = document.getElementById(barId);
            if (healthBar) {
                const clampedPercentage = Math.max(0, Math.min(100, percentage));
                healthBar.style.width = `${clampedPercentage}%`;

                healthBar.classList.remove('color-ai', 'color-ps', 'color-id', 'color-ae', 'color-cd');

                if (clampedPercentage === 0) {
                    healthBar.classList.add('color-gray'); // Para 0%
                } else if (clampedPercentage === 49) {
                    healthBar.classList.add('color-ps');
                } else if (clampedPercentage === 50) {
                    healthBar.classList.add('color-ae');
                } else if (clampedPercentage === 72) {
                    healthBar.classList.add('color-ai');
                } else if (clampedPercentage === 73) {
                    healthBar.classList.add('color-id');
                } else if (clampedPercentage === 74) {
                    healthBar.classList.add('color-cd');
                }
            }
        }

        updateHealthBar('healthBar1', 72);   
        updateHealthBar('healthBar2', 49);  
        updateHealthBar('healthBar3', 73);  
        updateHealthBar('healthBar4', 50);  
        updateHealthBar('healthBar5', 74); 
        updateHealthBar('healthBar6', 75); 
        updateHealthBar('healthBar7', 100); 

        document.addEventListener('DOMContentLoaded', () => {
    const boxBarIcons = document.querySelectorAll(".box-baricon");

    let enterTimeout;

    boxBarIcons.forEach(box => {
        const icon = box.querySelector(".icons-softwares");
        const healthBarContainer = box.querySelector(".health-bar-container");
        const textBottom = box.querySelector(".text-bottom");

        icon.addEventListener('mouseenter', () => {
            
            clearTimeout(enterTimeout);

           
            enterTimeout = setTimeout(() => {
                if (healthBarContainer) {
                    healthBarContainer.classList.add('show');
                    healthBarContainer.classList.remove('hidden');
                }
                if (textBottom) {
                    textBottom.classList.add('show');
                    textBottom.classList.remove('hidden');
                }
            }, 400); 
        });

        icon.addEventListener('mouseleave', () => {
        
            clearTimeout(enterTimeout);

            
            if (healthBarContainer) {
                healthBarContainer.classList.remove('show');
                healthBarContainer.classList.add('hidden');
            }
            if (textBottom) {
                textBottom.classList.remove('show');
                textBottom.classList.add('hidden');
            }
        });
    });
});