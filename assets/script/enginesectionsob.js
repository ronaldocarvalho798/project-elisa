document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabPanels = document.querySelectorAll('.tab-panel');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remover 'active' de todos os botões e 'active'/'hidden' de todos os painéis
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active');
                        btn.setAttribute('aria-selected', 'false');
                        btn.setAttribute('tabindex', '-1');
                    });
                    tabPanels.forEach(panel => {
                        panel.classList.remove('active');
                        panel.classList.add('hidden');
                        panel.setAttribute('hidden', 'true'); // Atributo hidden para semântica
                    });

                    // Adicionar 'active' ao botão clicado
                    button.classList.add('active');
                    button.setAttribute('aria-selected', 'true');
                    button.setAttribute('tabindex', '0');

                    // Mostrar o painel correspondente
                    const targetPanelId = button.getAttribute('aria-controls');
                    const targetPanel = document.getElementById(targetPanelId);
                    if (targetPanel) {
                        targetPanel.classList.remove('hidden');
                        targetPanel.classList.add('active');
                        targetPanel.removeAttribute('hidden');
                    }
                });
            });
        });