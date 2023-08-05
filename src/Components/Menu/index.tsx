import { AntDesign } from '@expo/vector-icons';
import * as S from './style'
import CardRecentSearches from "../CardRecentSearches";

export default function Menu(){
    return (
        <S.ConteinerMenu>
            <S.Session>
                <AntDesign name="right" size={28} color="#989898" />
                <S.TitleSession>Buscas Recentes</S.TitleSession>
            </S.Session>
            <CardRecentSearches/>
        </S.ConteinerMenu>
    )
}