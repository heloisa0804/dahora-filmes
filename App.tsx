import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importando a biblioteca interna vector-icons

// Usamos o @ts-ignore para ignorar erros de tipagem (ou ausênsia de tipagem)
//@ts-ignore
import { Ionicons } from "@expo/vector-icons";
import Loading from "./src/components/Loading";

export default function App() {
  /* Usamos o useFonts para criar uma referência para 
  a fonte que queremos utilizar no app. */
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />
          <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botaoInicial}>
            <Ionicons name="search" size={18} color="white" />
            <Text style={estilos.textoBotao}> Buscar Filmes</Text>
          </Pressable>
          <Pressable style={estilos.botaoInicial}>
            <Ionicons name="star" size={18} color="gold" />
            <Text style={estilos.textoBotao}> Favoritos</Text>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape}>
            <Ionicons name="lock-closed" size={18} color="white" />
            <Text style={estilos.textoBotao}> Privacidade</Text>
          </Pressable>
          <Pressable style={estilos.botaoRodape}>
            <Ionicons name="information-circle" size={18} color="white" />
            <Text style={estilos.textoBotao}> Sobre</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
