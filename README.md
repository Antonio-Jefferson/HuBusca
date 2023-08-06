<!DOCTYPE html>
<html>
<head>
    <h1>HuBusca - Encontre perfis e repositórios do GitHub com facilidade</h1>
    <p>O HuBusca é um aplicativo mobile desenvolvido para simplificar e agilizar a busca por perfis e repositórios de desenvolvedores no GitHub. Reconhecendo a necessidade de uma solução que permitisse a localização mais fácil e rápida de informações relevantes, criamos este web-app intuitivo e eficiente.</p>
    <h3>O HuBusca foi construído utilizando as seguintes tecnologias:</h3>
    <ul>
        <li>React Native (Expo): Utilizamos o framework React Native em conjunto com o Expo para desenvolver uma interface mobile dinâmica e responsiva. Isso nos permite oferecer uma experiência consistente em diferentes dispositivos e tamanhos de tela.</li>
        <li>TypeScript: Optamos por utilizar TypeScript como linguagem de programação. O TypeScript adiciona tipagem estática ao JavaScript, tornando o código mais seguro e fácil de manter.</li>
        <li>Axios: Utilizamos o Axios para realizar as requisições à API pública do GitHub. Essa biblioteca simplifica a comunicação com APIs externas, permitindo que recuperemos os dados necessários de forma eficiente.</li>
        <li>Styled-components: Para a estilização do aplicativo, utilizamos o styled-components. Essa biblioteca nos permite criar estilos de forma mais modular e dinâmica, melhorando a organização do código.</li>
        <li>Figma: <a href="https://www.figma.com/file/CVm2BcuS2PjPFS64FtWaxi/HUBusca?type=design&node-id=7%3A40&mode=design&t=J3EKsnBtpGViFXzO-1">Link<a></li>
    </ul>
    <h2>Funcionalidades</h2>
    <p>O HuBusca oferece uma variedade de funcionalidades destinadas a tornar a busca por perfis e repositórios de desenvolvedores uma experiência mais agradável e eficiente:</p>
    <ul>
        <li>Busca de Dados do GitHub na Tela Principal: Insira o nome de usuário do GitHub em um campo de busca na tela principal. Ao pressionar o botão de busca, os dados da pessoa correspondente serão recuperados da API do GitHub. Os dados exibidos como resultado incluirão foto de perfil, nome, nome de usuário (login) e localização.</li>
        <li>Perfil Detalhado ao Clicar na Foto: Ao clicar na foto de perfil na tela principal, um perfil detalhado da pessoa será exibido. O perfil detalhado conterá informações adicionais da API do GitHub, como foto de perfil, nome, nome de usuário (login), localização, ID, quantidade de seguidores e quantidade de repositórios públicos. Uma lista dos repositórios da pessoa será apresentada, exibindo para cada repositório nome do repositório, linguagem utilizada, descrição, data de criação e data do último push.</li>
        <li>Redirecionamento para Repositório no Site do GitHub: Ao clicar em um repositório listado no perfil detalhado, o usuário será redirecionado para a página correspondente desse repositório no site do GitHub. Isso permitirá que o usuário explore o repositório, visualize o código e outras informações associadas.</li>
        <li>Menu de Usuários Pesquisados Recentemente: Um menu será criado para exibir todos os usuários do GitHub pesquisados recentemente. Cada entrada no menu apresentará os mesmos dados padrão da busca na tela principal. Ao clicar em um usuário no menu, um perfil detalhado semelhante ao descrito anteriormente será exibido, incluindo informações mais detalhadas e a lista de repositórios.</li>
    </ul>
    <h2>Download</h2>
    <p>Baixe o aplicativo HuBusca agora mesmo e comece a descobrir perfis de desenvolvedores e explorar seus repositórios de forma simples e eficaz! <a href="https://expo.dev/artifacts/eas/2gFzqdh8tRb2WEWEUbMfHN.apk">Clique aqui</a> para fazer o download do APK.</p>
</html>
