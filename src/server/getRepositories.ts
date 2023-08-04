import axios from 'axios';
import IInfoRepos from '../interfaces/InfoRepos';

const getRepositories = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const dataUserInfo: IInfoRepos[] = response.data.map((repo: any) => ({
            id: repo.id,
            title: repo.name || "", 
            init: repo.created_at || "", 
            last_push: repo.pushed_at || "", 
            description: repo.description || "", 
            stack: repo.language || "", 
        }));
        return dataUserInfo;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        throw error; // Rethrow the error to handle it at a higher level
    }
};

export default getRepositories;
