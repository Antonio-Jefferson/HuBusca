import { TouchableOpacity, View } from "react-native"
import * as S from './style'
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
        <S.Container>
           <S. LogoContainer >
             <View><Octicons name="mark-github" size={36} color="black" /></View>
             <View><S.TextLogo>HUBusca</S.TextLogo></View>
           </S.LogoContainer >
           <TouchableOpacity onPress={OpenMenu}>
              <AntDesign name="menufold" size={32} color="black" />
           </TouchableOpacity>
        </S.Container>
    )
}