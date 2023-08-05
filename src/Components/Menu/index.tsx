import { AntDesign } from '@expo/vector-icons';
import * as S from './style'
import CardRecentSearches from "../CardRecentSearches";
import { useDispatch } from 'react-redux';
import { setOpenMenuAction } from '../../Store/Reducers/GlobalReducer';
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { getUsersFromLocalStorage } from '../../utils/localStorage';
import GitHubUser from '../../Interfaces/GitHubUser';

interface MenuStore {
    setOpenMenu: boolean;
  } 

export default function Menu(){
    const dispatch = useDispatch();
    const [userData, setUserData] = useState<GitHubUser[]>()
    const closeMenu = () => {
        const Open: MenuStore = {
          setOpenMenu: false,
        };
      
        dispatch(setOpenMenuAction(Open));
      }
      useEffect(()=>{
        const  getUsers = async () => {
          const users = await getUsersFromLocalStorage()
          setUserData(users)
        }
        getUsers()
      },[])
    return (
        <S.ConteinerMenu>
            <S.Session>
                <TouchableOpacity onPress={closeMenu}>
                    <AntDesign name="right" size={28} color="#989898" />
                </TouchableOpacity>
                <S.TitleSession>Buscas Recentes</S.TitleSession>
            </S.Session>
            <S.Scroll>
              <SafeAreaView>
                    <ScrollView>
                      <FlatList
                        data={userData}
                        renderItem={({ item, index }) => (
                          <CardRecentSearches
                            name={item?.name}
                            login={item?.login}
                            location={item?.location}
                            avatar_url={item?.avatar_url}
                          />
                        )}
                        keyExtractor={(_, index) => index.toString()} 
                      />
                    </ScrollView>
              </SafeAreaView> 
            </S.Scroll>
            
        </S.ConteinerMenu>
    )
}