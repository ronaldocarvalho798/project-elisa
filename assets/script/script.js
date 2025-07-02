function updateHealthBar(barId, percentage) {
            const healthBar = document.getElementById(barId);
            if (healthBar) {
                // Garante que a porcentagem esteja entre 0 e 100
                const clampedPercentage = Math.max(0, Math.min(100, percentage));
                healthBar.style.width = `${clampedPercentage}%`;

                // Remove todas as classes de cor antes de adicionar a correta
                healthBar.classList.remove('color-ai', 'color-ps', 'color-id', 'color-ae', 'color-cd');

                // Adiciona a classe de cor baseada na porcentagem
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

        // Definindo o preenchimento e a cor para cada barra
        updateHealthBar('healthBar1', 72);   // 0% - Cinza
        updateHealthBar('healthBar2', 49);  // 25% - Vermelho
        updateHealthBar('healthBar3', 73);  // 50% - Laranja
        updateHealthBar('healthBar4', 50);  // 75% - Amarelo
        updateHealthBar('healthBar5', 74); // 100% - Verde
        updateHealthBar('healthBar6', 75); // 100% - Verde
        updateHealthBar('healthBar7', 100); // 100% - Verde

        document.addEventListener('DOMContentLoaded', () => {
    const boxBarIcons = document.querySelectorAll(".box-baricon");

    // Variável para armazenar o ID do timer de atraso
    let enterTimeout;

    boxBarIcons.forEach(box => {
        const icon = box.querySelector(".icons-softwares");
        const healthBarContainer = box.querySelector(".health-bar-container");
        const textBottom = box.querySelector(".text-bottom");

        icon.addEventListener('mouseenter', () => {
            // Limpa qualquer timeout anterior para evitar múltiplos disparos
            clearTimeout(enterTimeout);

            // Define um novo timeout para adicionar as classes após um atraso (ex: 300ms)
            enterTimeout = setTimeout(() => {
                if (healthBarContainer) {
                    healthBarContainer.classList.add('show');
                    healthBarContainer.classList.remove('hidden');
                }
                if (textBottom) {
                    textBottom.classList.add('show');
                    textBottom.classList.remove('hidden');
                }
            }, 300); // <-- Atraso de 300 milissegundos
        });

        icon.addEventListener('mouseleave', () => {
            // Quando o mouse sai, limpa o timeout pendente.
            // Isso impede que os elementos apareçam se o mouse sair antes do delay acabar.
            clearTimeout(enterTimeout);

            // Remove as classes imediatamente
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