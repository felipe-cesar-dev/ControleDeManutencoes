<h1>Sobre o aplicativo "Controle de Manutenções"</h1>

<ul>
<li>O projeto desenvolvido tem como objetivo ajudar no monitoramento de gastos com manutenções de veículos.</li>
<li>O público alvo é o de pessoas que possuem algum tipo de veículo e precisam de algum meio para armazenar seus gastos com manutenções de forma fácil e acessível (na palma da mão).</li>
<li>Aqui, o usuário poderá se cadastrar com seu e-mail e senha de forma prática e rápida, tendo a validação do cadastro autenticada direto no provedor do e-mail utilizado.</li>
<li>Obs: Apenas através do e-mail e senha cadastrados, o usuário terá acesso às telas que serão mencionadas abaixo.</li>
<li>Após o cadastro, o usuário terá acesso a tela inicial (Inserir Manutenções), onde encontrará 3 campos de digitação: um para o nome da manutenção que foi feita, um para o valor da manutenção, e outro para a data.</li>
<li>Uma vez clicado no botão "Guardar Manutenção", a mesma será exibida numa lista, na tela "Lista de Manutenções".</li>
<li>Na tela Lista de Manutenções, além de visualizar as manutenções que foram armazenadas, o usuário também poderá excluir uma manutenção específica, após digitar o nome dela, através do botão "Excluir item", ou excluir todas as manutenções, através do botão "Excluir todos os itens da lista".</li>
<li>Nessa tela, há também, um campo informando o somatório das manutenções contidas na lista.</li>
<li>Um botão para encerrar a sessão está contido na parte superior direita de cada tela, uma vez logado.</li>
</ul>

<h1>Este projeto foi desenvolvido usando as seguintes tecnologias:</h1>
<ul>
 <li>Expo - para o desenvolvimento de uma aplicação React Native</li>
 <li>AsyncStorage - para o tratamento de dados armazenados localmente</li>
 <li>Clerk - para o sistema de login/logout e signup usando uma publishableKey</li>
 <li>Moment - para o tratamento de datas</li>
 <li>Bottoms Tab Navigator e Stack Navigator - para o sistema de navegação entre screens</li>
</ul>

<h1>Rotina de configuração do aplicativo:</h1>
<h3>npx create-expo-app</h3>
<h5>Esta linha foi utilizada para criar um aplicativo utilizando o Expo.</h5>

<h3>npm run reset-project</h3>
<h5>Esta linha foi utilizada para remover a aplicação padrão carregada ao utilizar o a linha anterior.</h5>

<h3>npm install @clerk/clerk-expo</h3>
<h5>Esta linha foi utilizada para carregar as dependências do Clerk, utilizado para o sistema de login/logout e sign-up</h5>

<h3>npm install expo-secure-store</h3>
<h5>Esta linha foi utilizada para instalar a lib responsável por armazenar dados sensíveis, como tokens.</h5>

<h5>npx expo install @react-native-async-storage/async-storage</h5>
<h5>Esta linha foi utilizada para adicionar as dependências referentes ao AsyncStorage</h5>

<h3>npm install moment --save</h3>
<h5>Esta linha foi utilizada para adicionar a biblioteca responsável pelo tratamento da data a ser capturada pelo input na aplicação.<h5>

<h3>npm install @react-navigation/bottom-tabs</h3>
<h5>Esta linha foi utilizada para adicionar a funcionalidade de navegação utilizando o Tab.Navigator para as screens home.jsx e lista.jsx</h5>

<h3>npm install -g eas-cli</h3>
<h5>Esta linha foi utilizada para instalar o eas-cli, reponsável por permitir a criação do .AAB e .APK da aplicação</h5>

<h3>eas login</h3>
<h5>Esta linha foi utilizada para logar na conta Expo</h5>

<h3>eas build --platform android</h3>
<h5>Esta linha foi utilizada para buildar o .aab da aplicação</h5>

<h3>eas build -p android --profile preview</h3>
<h5>Esta linha foi utilizada para buildar o .apk da aplicação</h5>
