import { Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { Octicons, AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { setOpenMenuAction } from "../../Store/Reducers/GlobalReducer";

interface MenuStore {
  setOpenMenu: boolean;
}

export default function Header() {
  const dispatch = useDispatch();

  const OpenMenu = () => {
    const Open: MenuStore = {
      setOpenMenu: true,
    };
  
    dispatch(setOpenMenuAction(Open));
  }

    return (
        <View style={styles.conteiner}>
           <View style={styles.logo}>
             <View><Octicons name="mark-github" size={36} color="black" /></View>
             <View><Text style={styles.textLogo}>HUBusca</Text></View>
           </View>
           <TouchableOpacity onPress={OpenMenu}>
              <AntDesign name="menufold" size={32} color="black" />
           </TouchableOpacity>
        </View>
    )
}