import { Text, View } from "react-native"
import styles from "./style"
import { Octicons, AntDesign } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.conteiner}>
           <View style={styles.logo}>
             <View><Octicons name="mark-github" size={36} color="black" /></View>
             <View><Text style={styles.textLogo}>HUBusca</Text></View>
           </View>
           <View>
              <AntDesign name="menufold" size={32} color="black" />
           </View>
        </View>
    )
}