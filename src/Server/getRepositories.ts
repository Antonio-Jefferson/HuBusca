import axios from 'axios';
import IInfoRepos from '../Interfaces/InfoRepos';

const getRepositories = async (username: string | undefined) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const dataUserInfo: IInfoRepos[] = response.data.map((repo: any) => ({
            id: repo.id,
            title: repo.name, 
            init: repo.created_at, 
            last_push: repo.pushed_at, 
            description: repo.description, 
            stack: repo.language, 
        }));
        return dataUserInfo;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
};

export default getRepositories;
