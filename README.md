Bridge Grayline (TourCMS) ➔ Ingresso com Desconto
Esta é uma extensão para Google Chrome desenvolvida para automatizar o fluxo de trabalho entre as plataformas Grayline (TourCMS) e Ingresso com Desconto. Ela elimina a necessidade de copiar e colar manualmente os dados dos clientes, reduzindo erros operacionais e aumentando a velocidade de emissão de vouchers.

Desenvolvido por: Bruno Ferreira

Funcionalidades
- Extração Inteligente: Captura automaticamente Nome, E-mail e ID da Reserva (Booking ID) diretamente da página de edição do TourCMS.

- Preenchimento Automático: Identifica os campos alvo na plataforma Ingresso com Desconto e preenche os dados nos locais corretos (Campos 2, 3, 4 e 15).

- Identificação de Usuário: Possui um popup onde o operador pode configurar seu nome. O campo 15 (CV) é preenchido no formato: ID_DA_RESERVA - NOME_DO_OPERADOR.

- Sincronização em Tempo Real: Os dados são transmitidos entre abas instantaneamente sem necessidade de recarregar a página de destino.

- Interface Animada: Botão customizado com ícone pulsante e efeitos visuais para melhor experiência do usuário.

Tecnologias Utilizadas
- JavaScript (ES6+): Lógica de extração, manipulação de DOM e listeners.

- Chrome Extension API (Manifest v3): Gerenciamento de storage e scripts de conteúdo.

- CSS3: Animações de brilho e pulso (Keyframes).

- HTML5: Estrutura do popup de configuração.

Instalação (Modo Desenvolvedor)
- Como esta é uma extensão personalizada, siga os passos abaixo para instalá-la no seu navegador:

- Faça o download ou clone este repositório.

- Abra o Google Chrome e acesse chrome://extensions/.

- No canto superior direito, ative a chave "Modo do desenvolvedor".

- Clique no botão "Carregar sem compactação".

- Selecione a pasta onde os arquivos do projeto estão localizados.

- A extensão aparecerá na sua lista e o ícone poderá ser fixado na barra de ferramentas.

Como Usar
- Configuração Inicial: Clique no ícone da extensão na barra do Chrome, digite seu nome e clique em "Salvar Configuração".

- Captura: Acesse uma reserva no TourCMS. Um botão azul "COPIAR VOUCHER" aparecerá no canto superior direito. Clique nele.

- Emissão: Vá para a aba da Ingresso com Desconto (página de cadastro de vendas). Os campos de Nome, E-mail e Documento serão preenchidos automaticamente.

- Limpeza: Ao atualizar a página da Ingresso com Desconto, os dados são limpos por segurança, aguardando uma nova captura.

Estrutura do Projeto
- manifest.json: Configurações de permissões e scripts da extensão.

- content_tourcms.js: Script responsável pela extração de dados e interface na Grayline.

- content_ingresso.js: Script responsável pelo preenchimento automatizado.

- popup.html / popup.js: Interface de configuração do nome do operador.

- icon.png: Ícone oficial da ferramenta.

Licença
- Este projeto é de uso interno e privado. Todos os direitos reservados.