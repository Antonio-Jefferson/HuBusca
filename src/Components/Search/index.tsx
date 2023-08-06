import { TouchableOpacity} from "react-native";
import * as S from "./style";
import { FontAwesome5 } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useState } from "react";
import getUser from "../../Server/getUser";
import GitHubUser from "../../Interfaces/GitHubUser";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../Store/Reducers/userReducer";
import { addUserToLocalStorage } from "../../utils/localStorage";
interface UserStore {
    username?: string;
}

interface DataUserProps {
    setDataUser: Dispatch<SetStateAction<GitHubUser | undefined>>
}

export default function SearchUser({ setDataUser }: DataUserProps) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const getUserInfo = async () => {
       const data = await getUser(username)
       setDataUser(data)
       await addUserToLocalStorage(data)
       const userStoreData: UserStore = {
        username: data?.login,
      };
      dispatch(setUserAction(userStoreData));
    }

    return (
        <S.Container>
            <S.SearchInput
                placeholder="Pesquisar usuário..."
                onChangeText={text => setUsername(text)} 
                value={username} 
            />
            <S.IconSearch>
                <TouchableOpacity onPress={getUserInfo}>
                    <FontAwesome5 name="search" size={24} color="#716B6B" />
                </TouchableOpacity>
            </S.IconSearch>
        </S.Container>
    );
}