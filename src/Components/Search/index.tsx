import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { FontAwesome5 } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useState } from "react";
import getUser from "../../Server/getUser";
import GitHubUser from "../../Interfaces/GitHubUser";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../Store/Reducers/userReducer";

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
       const userStoreData: UserStore = {
        username: data?.login,
      };
    
      dispatch(setUserAction(userStoreData));
    }

    return (
        <View style={styles.conteiner}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar usuário..."
                onChangeText={text => setUsername(text)} 
                value={username} 
            />
            <TouchableOpacity
                onPress={getUserInfo}
                style={styles.iconSearch}
            >
                <FontAwesome5 name="search" size={24} color="#716B6B" />
            </TouchableOpacity>
        </View>
    );
}