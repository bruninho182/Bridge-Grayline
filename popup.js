document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userName');
    const status = document.getElementById('status');

    // Carrega o nome que já estava salvo, se existir
    chrome.storage.local.get("usuarioConfigurado", (res) => {
        if (res.usuarioConfigurado) {
            input.value = res.usuarioConfigurado;
        }
    });

    // Salva o novo nome
    document.getElementById('saveBtn').addEventListener('click', () => {
        const nome = input.value.trim();
        chrome.storage.local.set({ usuarioConfigurado: nome }, () => {
            status.style.display = 'block';
            setTimeout(() => { status.style.display = 'none'; }, 2000);
        });
    });
});