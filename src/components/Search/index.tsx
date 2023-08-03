import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { FontAwesome5 } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useState } from "react";
import getUser from "../../server/getUser";
import GitHubUser from "../../interfaces/GitHubUser";

interface DataUserProps {
    setDataUser: Dispatch<SetStateAction<GitHubUser | undefined>>
}
export default function SearchUser({ setDataUser }: DataUserProps) {
    const [username, setUsername] = useState('');

    const getUserInfo = async () => {
       const data = await getUser(username)
       setDataUser(data)
    }

    return (
        <View style={styles.conteiner}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar..."
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