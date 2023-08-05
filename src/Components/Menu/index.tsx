import { AntDesign } from '@expo/vector-icons';
import * as S from './style'
import CardRecentSearches from "../CardRecentSearches";
import { useDispatch } from 'react-redux';
import { setOpenMenuAction } from '../../Store/Reducers/GlobalReducer';
import { TouchableOpacity } from 'react-native';

interface MenuStore {
    setOpenMenu: boolean;
  } 

export default function Menu(){
    const dispatch = useDispatch();
    const closeMenu = () => {
        const Open: MenuStore = {
          setOpenMenu: false,
        };
      
        dispatch(setOpenMenuAction(Open));
      }
    return (
        <S.ConteinerMenu>
            <S.Session>
                <TouchableOpacity onPress={closeMenu}>
                    <AntDesign name="right" size={28} color="#989898" />
                </TouchableOpacity>
                <S.TitleSession>Buscas Recentes</S.TitleSession>
            </S.Session>
            <CardRecentSearches/>
        </S.ConteinerMenu>
    )
}