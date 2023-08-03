import axios from 'axios';
import GitHubUser from '../interfaces/GitHubUser';

const getUser = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const dataUserInfo: GitHubUser  = {
            name: response.data.name,
            avatar_url: response.data.avatar_url,
            login: response.data.login,
            location: response.data.location
        };
        return dataUserInfo;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
};

export default getUser;
