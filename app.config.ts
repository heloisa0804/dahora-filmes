//Módulo responsavel pelo acesso à dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filmes",
  slug: "dahora-filmes",
  owner: "helo0804", //Necessário para o eas
  scheme: "dahora-filmes",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
  },
  plugins: ["expo-font", "expo-router"],
  //Acessando a API_KEY através do dontenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "fc8d7a48-c317-4158-95d2-4e24c011d466",
    },
  },
});
