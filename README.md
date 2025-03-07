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
<h5> - Esta linha foi utilizada para criar um aplicativo utilizando o Expo.</h5>

<h3>npm run reset-project</h3>
<h5> - Esta linha foi utilizada para remover a aplicação padrão carregada ao utilizar a linha anterior.</h5>

<h3>npm install @clerk/clerk-expo</h3>
<h5> - Esta linha foi utilizada para carregar as dependências do Clerk, utilizado para o sistema de login/logout e sign-up.</h5>

<h3>npm install expo-secure-store</h3>
<h5> - Esta linha foi utilizada para instalar a lib responsável por armazenar dados sensíveis, como tokens.</h5>

<h5>npx expo install @react-native-async-storage/async-storage</h5>
<h5> - Esta linha foi utilizada para adicionar as dependências referentes ao AsyncStorage.</h5>

<h3>npm install moment --save</h3>
<h5> - Esta linha foi utilizada para adicionar a biblioteca responsável pelo tratamento da data a ser capturada pelo input na aplicação.<h5>

<h3>npm install @react-navigation/bottom-tabs</h3>
<h5> - Esta linha foi utilizada para adicionar a funcionalidade de navegação utilizando o Tab.Navigator para as screens home.jsx e lista.jsx.</h5>

<h3>npm install -g eas-cli</h3>
<h5> - Esta linha foi utilizada para instalar o eas-cli, reponsável por permitir a criação do .AAB e .APK da aplicação.</h5>

<h3>eas login</h3>
<h5> - Esta linha foi utilizada para logar na conta Expo.</h5>

<h3>eas build --platform android</h3>
<h5> - Esta linha foi utilizada para buildar o .aab da aplicação.</h5>

<h3>eas build -p android --profile preview</h3>
<h5> - Esta linha foi utilizada para buildar o .apk da aplicação.</h5>

<h1>Sobre a modularização do código:</h1>

<h3>/APP/_LAYOUT.TSX</h3>
<h5> - Consta o código para salvar e recuperar o token de acesso, além de verificar os redirecionamentos para screens baseados no status de atividade do usuário (se está autenticado ou não). </br>
 - A função 'getToken' retorna o token de acesso  através da linha 'return SecureStore.getItemAsync(key);'. </br>
 - A função 'saveToken' retorna a chave e o valor do token através da linha 'SecureStore.setItemAsync(key, value);</br>'
 - A função principal 'InitialLayout' é responsável pela verificação do status do user e o seu redireciomento condicional. A variável 'isSignedIn' serve para retornar 'true' caso o user esteja logado, e 'false' caso contrário. 'inAuthGroup' armanzena o segmento 0 da estrutura de diretórios da aplicação, definido como '(auth)'. 'isLoaded' é usado para evitar que o componente tente redirecionar o usuário para a página de login ou home antes que o estado de autenticação seja carregado completamente.</br>
 - Se o usuário estiver logado (isSignedIn) e não estiver no 'Inicio' do (AUTH)/HOME.JSX, então sua rota é redirecionada para '/home'.</br>
 - Caso não esteja logado (!isSignedIn), então sua rota é redirecionada para '/login'.</br>
 - A função 'RootLayout' retorna o Clerk.Provider com os parâmetros da 'publishableKey, apontando para a variável 'publishKey' que tem como valor o chave necessária para a sincornização com o Clerk, contida no arquivo '.env', e 'tokenCache', que possui as funções getToken e saveToken.

<h3>/APP/INDEX.TSX</h3>
<h5> - Consta o código para utilização do ActivityIndicator que carrega um 'loading' antes da aplicação ter suas rotas carregadas.

<h3>/(AUTH)/_LAYOUT.JSX<h3>
<h5> - Consta o código para o layout das páginas acessíveis ao user autenticado. Onde há o import do componente MyTabs, que possui o código contendo o Tab.Navigator, responsável pela navegação entre screens.</h5>

<h3>/(AUTH)/HOME.JSX</h3>
<h5>- Consta o código para captura e tratamento dos dados inseridos pelo usuário logado.</br>
 - A função assíncrona 'armazenarDados' é responsável pelo armazenamento dos dados digitados nos TextInputs presentes no retorno da função principal 'Inicio'. Ao capturar os dados setados através das variáveis 'setTexto', 'setValor' e 'setData', e também o conteúdo da variável 'const usuario', a função armazenarDados os concentra na variável 'const dados' e em seguida os armazena no AsyncStorage, através da linha 'await AsyncStorage.setItem(chave, JSON.stringify(dados));'. Mas antes, uma verificação é feita através da função 'verificaLength' e da variável 'const dataFormatada'. A função importada verifica se os TextInputs estão vazios, e a variável verifica se a data foi digitada seguindo o padrão DD/MM/AAAA. Alertas são exibidos aos usuários se as verificações não forem atendidas. </br>
 - Caso haja erro na função armazenarDados, ele é informado no 'catch' através de um alert, ao usuário.</h5>

<h3>/(AUTH)/LISTA.JSX</h3>
<h5> - Consta o código para exibição e exclusão de dados armazenados no HOME.JSX, além do valor agregado dos dados e um botão para excluir uma manutenção específica. </br>
- A função assíncrona 'recuperarItens' é responsável por exibir os dados armazenados pelo AsyncStorage na varivável 'dados' do HOME.JSX.</br>
- Os itens armazenados são exibidos baseados no resultado coletado através da const 'itensFiltrados', que busca dentro do armazenamento do AsyncStorage, itens vinculados ao usuário logado. Se o conteúdo da variavel 'item.usuario' for igual a const 'usuario' (que retorna uma string do email do usuário que está logado), então, os dados que foram guardados serão retornados numa 'FlatList', no retorno da função principal 'Lista'.<br>
- A função assíncrona 'excluirItem' espera de um TextInput, no retorno da função principal, um nome de uma manutenção. Se a manutenção for encontrada no armazenamento do AsyncStorage, e essa manutenção tiver como item.usuario o mesmo valor contido na const 'usuario', então ela será excluída do armazenamento. Caso contrário, um alert ('Você não tem permissão para excluir esse item') será exibido ao usuário. Pois quem armazenou o item, foi outro usuário logado no dispositivo.</br>
- A variável 'valorTotal' é atualizada toda vez que uma manutenção é adicionada ou excluída, atualizando assim, o somatório do valor contido na variavel item.valor, que faz referência ao valor da manutenção capturada no TextInput 'Valor', no HOME.JSX. </br>

<h3>/(PUBLIC)/_LAYOUT.JSX<h3>
<h5> - Consta o código responsável pela navegação das páginas acessíves ao user não logado, como Login e Signup.</br>
 - A função 'PublicLayout' retorna o Stack para o sucesso dessa navegação entre screens.
</h5>

<h3>/(PUBLIC)/LOGIN.JSX<h3>
<h5> - Consta o código responsável pela realização do login de um email e senha cadastrados. </br>
- A função 'handleSignIn' é responsável por validar os TextInput referentes aos campos de e-mail e senha. Ela chama uma função importada 'verificarLengthLogin', que verifica se os campos possuem email e senhas digitados. Se não houver, um alerta é exibido informando que os campos precisam estar preenchidos. </br>
 - Após a verificação, se o usuário já estiver cadastrado no Clerk, então ele será direcionado para a screen 'Inicio', dentro de (AUTH/HOME.JSX). Caso contrário, um erro informando que o usuário não está cadastrado, será exibido. </br>
 - No retorno da função principal 'Login', existe um 'Link' para navegar para a screen 'Register', onde o usuário poderá efetuar o seu cadastro no Clerk.</h5>

<h3>/(PUBLIC)/REGISTER.JSX<h3>
<h5> - Consta o código responsável pelo cadastratamento e ativação de um email e senha. </br>
 - A função 'handleSignUp' aguarda a digitação de um email e senha nos TextInput presentes no retorno da função principal 'Register'. Em seguida a inserção dos dados requisitados, há o redirecionamento para a screen de ativação da conta, através do verificação do código enviado para o email digitado. O tratamento do código de verificação é feito pela função 'handleVerifyUser', que aguarda a correta digitação do código para efetivar o cadastramento do usuário. Ambas funções tem erros capturados e explicitados ao usuário através de um alert.


<h3>/APP/FUNCTIONS/VERIFICARLENGTH.JSX
<h5> - Consta o código para a função que verifica se os TextInput dentro de HOME.JSX possuem algum texto digitado.

<h3>/APP/FUNCTIONS/VERIFICARLENGTHLOGIN.JSX
<h5> - Consta o código para a função que verifica se os TextInput dentro de LOGIN.JSX possuem algum texto digitado.

<h3>/APP/STYLES/STYLES.JSX
<h5> - Consta o código de estilização das screen da aplicação.

<h3>/ASSETS/FONTS e /ASSETS/IMAGES
<h5> - Consta fontes e imagens utilizadas no carregamento da aplicação, como 'icon.png', 'favicon.png', etc...

<h3>/COMPONENTS/LOG-OUT.JSX
<h5> - Consta o código da função 'Logout' que retorna um 'Pressable' que 'desloga' o user, fazendo com que a variável 'isSignedIn' retorne 'false'.

<h3>/COMPONENTS/TAB.JS
<h5> - Consta o código da função 'MyTabs', importada no (AUTH)/_LAYOUT.JSX, onde o componente 'Tab.Navigator' contém a personalização das duas 'Tab.Screens': 'Inserir Manutenções' ((AUTH)/HOME.JSX) e 'Lista de Manutenções' ((AUTH)/LISTA.JSX).

<h3>/IMAGES
<h5> - Consta imagens utilizadas como background para as screens da aplicação.



