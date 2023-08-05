import { View } from "react-native";
import styles from "./style";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Menu from "../../Components/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

export default function Home(){
    const  open = useSelector((state: RootState) => state.menuReducer.setOpenMenu)
    return (
        <View style={styles.container}>
           <Header/>
           <Main/>
           {open ?  <Menu/> : '' }
        </View>
    )
}