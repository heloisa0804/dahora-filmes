// src/services/ storage-favoritos.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Filme } from "../types";

// Criando uma ientificação para área de favoritos no dispositivo
const STORAGE_FAVORITOS = "filmes_favoritos";

/**
 * Lê a lista de favoritos de Async Storage
 * Retorna um arrayy vazio em caso de erro ou chave inexistente
 */
export async function carregar(): Promise<Filme[]> {
  try {
    // Lê a string salva na storage (pode vir null)
    const favoritosArmazenados = await AsyncStorage.getItem(STORAGE_FAVORITOS);

    // Havendo favoritosArmazenados (como string), retorna convertido para objeto.
    // Senão, retorna um array vazio
    return favoritosArmazenados ? JSON.parse(favoritosArmazenados) : [];
  } catch (error) {
    console.error("Erro ao ler storage:" + error);
  }
  return [];
}

/**
 * Grava a lista de favoritos no Async Storage
 */
export async function salvarLista(lista: Filme[]): Promise<void> {
  try {
    //Salva a lista de filmes no storage em formato de string
    await AsyncStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(lista));
  } catch (error) {
    console.error("Error ao salvar a lista no storage: " + error);
  }
}

/**
 * Salvar um filme na lista de favoritos ( e no próprio storage)
 * Retorna true se salvou com sucesso, false se o filme ja estava nos favoritos
 */
export async function salvarFilmeFavorito(filme: Filme): Promise<boolean> {
  const favoritos = await carregar();

  // Verifica se um filme já existe com mesmo id na lista/storage de favoritos.A função some() retorna se encontrar pelo menos 1 item que sastisfaça a condição.
  if (favoritos.some((filmeExistente) => filmeExistente.id === filme.id)) {
    // Já existe? Não precisamos salvar de novo
    // Por isso, retornamos false para indicar que o filme NÃO FOI adicionado
    return false;
  }

  // Se chegou até aqui, é porque esse filme ainda não tinha sido salvo.
  // Portanto, adiconamos à lista de favoritos
  favoritos.push(filme);

  //Salva a lista lista atualizada no storage
  await salvarLista(favoritos);

  // Retorna true sinalizando que o filme foi salvo
  return true;
}

/**
 * Chamar a função carregar e retornar  a lista de favoritos
 */
export function buscarFavoritos(): Promise<Filme[]> {
  return carregar();
}
