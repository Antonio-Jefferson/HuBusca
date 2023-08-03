import { View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Home(){
    return (
        <View style={styles.container}>
           <Header/>
           <Main/>
        </View>
    )
}