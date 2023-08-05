import axios from 'axios';
import IInfoRepos from '../Interfaces/InfoRepos';

function formatDate(isoDate: string) {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

const getRepositories = async (username: string | undefined) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const dataUserInfo: IInfoRepos[] = response.data.map((repo: any) => ({
            id: repo.id,
            title: repo.name, 
            init: formatDate(repo.created_at), 
            last_push: formatDate(repo.pushed_at),
            description: repo.description, 
            stack: repo.language, 
        }));
        return dataUserInfo;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
};



export default getRepositories;
