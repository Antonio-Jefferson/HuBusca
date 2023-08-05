import { View } from "react-native";
import styles from "./style";
import Header from "../../Components/Header";
import Main from "../../Components/Main";

export default function Home(){
    return (
        <View style={styles.container}>
           <Header/>
           <Main/>
        </View>
    )
}