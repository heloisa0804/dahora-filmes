# Dá Horas Filmes

Aplicativo desenvolvido utilizando React Native com Expo.

---

## 07_detalhes-do-filme

---

## 06_finalizacao-do-resultado-e-componentes-adicionais

- Definindo alias/apelido para os caminhos (tsconfig.json)
- Adição de states para resultados da busca por filmes e controle loading
- Uso do componente nativo `<FlastList>` para listas de dados dinâmicos
- Ajuste do FlastList para renderização de componente `<CardFilme>`com dados de cada filme
- Ajuste do layout do FlatLista para modo de 2 colunas (grid)
- Adição de imagem do filme e imagem alternativa em CardFilme
- Adição de créditos ao TMDB na tela sobre

## 05_uso-da-api-com-config-env

- Cadastro no TheMovieDB para obter a API key
- Conversão do app.json para app.config.ts
- Adição da propriedade extra.apiKey no app.config.ts e import do dotenv
- Instalaçãi do Axios (lib muito usada para comunicação com APIs)
- Configuração do services/api.ts com parâmetros para acessar a API, via Axios
- Ultilização do useEffect com Axios para fazer consulta de filmes na API

---

## 04_telas-basicas-de-busca-e-resultados

- Criação da versão básica das telas `Busca` e `Resultados`
- Uso do estate para gerenciar o film digitado no camp de entrada
- Validação básica usando `Alert` e ``Vibration`
- Navegação via programação com `useRouter`+ passagem de parâmetros
- Acesso aos parâmetros de rota com `useLocalSearchParams`

---

## 03_navegacao-expo-router-e-telas-privacidade-sobre

- Instalação da lib `expo-router` e suas dependências
- Ajustes e atualização para Expo SDK 54
- Configuração da `Stack` (pilha de navegação das telas )no arquivo `_layout.tsx`
- Migração do conteúdo/estrutura do `App.tsx` para o `layout.tsx` e para as páginas correspondentes (index, privacidade e sobre)
- Configuração das rotas usando componente `Link` do expo-router
- Uso do componente `ScrollView` para telas com barra de rolagem

---

## 02_mais-estilos-logo-font-icones-pressable

- Aplicação da imagem do logo usando o componente <Image>
- Adição e configuração de fonte personalizada usando o `expo-font` e `useFonts`
- Estilização do App.tsx usando recursos do `StyleSheet`
- Substituição do `Button` por `Pressable` para criação de botões customizados
- Uso de ícones através do `@expo-vector-icons`
- Aplicação do `ActivityIndicator` para criação de um componente `Loading`

---

## 01_estrutura-e-estilizacao-basica

- Remoção das imagens originais na pasta assets
- Adição de imagens específicas para o aplicativo
- Configuração dos detalhes do aplicativo em `app.json`
- Instalação da dependência (lib) `react-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

_Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compatíveis com a versão de SDK do Expo usada em seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes: `SafeAreaProvider`, `SafeAreaView`, `StatusBar` (do expo), `View`, `Text` e `Button`

- Uso do flex para determinar o tamanho das views.
