import { View } from "react-native";
import styles from "./style";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Menu from "../../Components/Menu";

export default function Home(){
    return (
        <View style={styles.container}>
           <Header/>
           <Main/>
           <Menu/>
        </View>
    )
}