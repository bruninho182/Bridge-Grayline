// --- FUNÇÃO DE CAPTURA (Mantida igual) ---
function extrairDadosTourCMS() {
    try {
        const h1 = document.querySelector('h1')?.innerText || "";
        const bookingId = h1.replace(/\D/g, ''); 

        const negritos = Array.from(document.querySelectorAll('b'));
        let nomeEncontrado = "";

        for (let b of negritos) {
            let texto = b.innerText.trim();
            if (texto !== "GLBrazil" && texto !== bookingId && isNaN(texto) && texto.length > 4) {
                nomeEncontrado = texto;
                break; 
            }
        }

        const email = document.querySelector('a[href^="mailto:"]')?.innerText.trim() || "";

        const dados = { 
            nome: nomeEncontrado, 
            email: email, 
            bookingId: bookingId,
            timestamp: Date.now() 
        };

        chrome.storage.local.set({ reservaGrayline: dados }, () => {
            alert(`✅ COPIADO!\n\nCliente: ${dados.nome}`);
        });
    } catch (e) {
        alert("Erro ao ler TourCMS.");
    }
}

// --- CRIAÇÃO DO BOTÃO ANIMADO ---

if (document.getElementById('btn-copy-tour')) document.getElementById('btn-copy-tour').remove();

// 1. NOVO: Injetar o estilo da animação na página
if (!document.getElementById('extension-anim-style')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'extension-anim-style';
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes iconPulseShine {
            0% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.1); filter: brightness(1.3) drop-shadow(0 0 2px rgba(255,255,255,0.5)); }
            100% { transform: scale(1); filter: brightness(1); }
        }
    `;
    document.head.appendChild(styleSheet);
}

const btn = document.createElement("button");
btn.id = 'btn-copy-tour';

const iconUrl = chrome.runtime.getURL("icon.png");

// 2. ATUALIZADO: Adicionamos a propriedade 'animation' na tag <img>
// O ícone agora roda a animação 'iconPulseShine' a cada 3 segundos, infinitamente.
btn.innerHTML = `<img src="${iconUrl}" style="width: 24px; height: 24px; margin-right: 10px; animation: iconPulseShine 3s infinite ease-in-out;"> COPIAR VOUCHER`;

btn.style.cssText = `
    position: fixed;
    top: 130px;
    right: 20px;
    z-index: 9999;
    padding: 10px 20px;
    background: #56407e;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: background 0.3s; /* Suaviza a mudança de cor ao passar o mouse */
`;

// Efeito extra: escurece o botão ao passar o mouse
btn.onmouseover = () => { btn.style.background = "#4c2e85"; };
btn.onmouseout = () => { btn.style.background = "#56407e";};

btn.onclick = extrairDadosTourCMS;
document.body.appendChild(btn);