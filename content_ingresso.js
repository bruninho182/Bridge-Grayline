function executarPreenchimento(d) {
    if (!d || !d.nome) return;

    // Buscamos o nome do usuário configurado no popup
    chrome.storage.local.get("usuarioConfigurado", (config) => {
        const nomeUsuario = config.usuarioConfigurado || "Sem Nome";
        
        function preencherAposTexto(numero, valor) {
            const todosElementos = Array.from(document.querySelectorAll('td, span, font, b'));
            const elementoAlvo = todosElementos.find(el => el.innerText.trim() === numero.toString());

            if (elementoAlvo) {
                const inputs = Array.from(document.querySelectorAll('input:not([type="hidden"]), select'));
                const inputCorreto = inputs.find(input => 
                    elementoAlvo.compareDocumentPosition(input) & Node.DOCUMENT_POSITION_FOLLOWING
                );

                if (inputCorreto) {
                    inputCorreto.value = valor;
                    inputCorreto.dispatchEvent(new Event('input', { bubbles: true }));
                    inputCorreto.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        }

        // Preenchimento normal
        preencherAposTexto(2, d.nome);
        preencherAposTexto(3, d.bookingId);
        preencherAposTexto(4, d.email);

        // REGRA ESPECIAL CAMPO 15: "ID - Nome Usuario"
        const valorFormatadoCV = `${d.bookingId} - ${nomeUsuario}`;
        preencherAposTexto(15, valorFormatadoCV);
    });
}

// O restante do código (onChanged) permanece o mesmo do anterior
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.reservaGrayline?.newValue) {
        executarPreenchimento(changes.reservaGrayline.newValue);
        chrome.storage.local.remove("reservaGrayline");
    }
});