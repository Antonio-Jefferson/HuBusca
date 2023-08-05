import axios from 'axios';
import IInfoUserProfile from '../Interfaces/InfoUserProfile';
const getInfoProfile = async (username: string | undefined) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const dataUserInfo: IInfoUserProfile  = {
            name: response.data.name,
            avatar_url: response.data.avatar_url,
            login: response.data.login,
            location: response.data.location,
            id: response.data.id,
            followers: response.data.followers,
            quanty_repos: response.data.public_repos
        };
        return dataUserInfo;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
};

export default getInfoProfile;