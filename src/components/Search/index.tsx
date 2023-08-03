import { TextInput, View } from "react-native";
import styles from "./style";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SearchUser() {
    return (
        <View style={styles.conteiner}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar..."
            />
            <View style={styles.iconSearch}><FontAwesome5 name="search" size={24} color="#716B6B" /></View>
        </View>
    )
}