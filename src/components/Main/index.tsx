import { View } from "react-native";
import SearchUser from "../Search";
import styles from "./style";
import InfoUser from "../InfoUser";

export default function Main(){
    return (
        <View style={styles.conteiner}>
            <SearchUser/>
            <InfoUser/>
        </View>
    )
}