import GitHubUser from "../Interfaces/GitHubUser";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addUserToLocalStorage(newUser: GitHubUser | undefined) {
  try {
    if (!newUser) return;

    const storedData = await AsyncStorage.getItem('githubUserData');
    const parsedStoredData = storedData ? JSON.parse(storedData) : [];

    const existingUserIndex = parsedStoredData.findIndex((user: GitHubUser) => user.login === newUser.login);

    if (existingUserIndex !== -1) {

      parsedStoredData.splice(existingUserIndex, 1)

      parsedStoredData.push(newUser);
      const updatedData = JSON.stringify(parsedStoredData);
      await AsyncStorage.setItem('githubUserData', updatedData);
    } else {
      parsedStoredData.push(newUser);

      const updatedData = JSON.stringify(parsedStoredData);
      await AsyncStorage.setItem('githubUserData', updatedData);
    }
  } catch (error) {
    console.error('Erro ao adicionar/atualizar usuário no AsyncStorage:', error);
  }
}

  export async function getUsersFromLocalStorage(): Promise<GitHubUser[]> {
    try {
      const storedData = await AsyncStorage.getItem('githubUserData');
      if (storedData) {
        const parsedData: GitHubUser[] = JSON.parse(storedData);
        return parsedData.reverse();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erro ao buscar usuários no AsyncStorage:', error);
      return [];
    }
  }