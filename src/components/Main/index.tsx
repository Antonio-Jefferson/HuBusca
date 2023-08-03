import { View } from "react-native";
import SearchUser from "../Search";
import styles from "./style";

export default function Main(){
    return (
        <View style={styles.conteiner}>
            <SearchUser/>
        </View>
    )
}