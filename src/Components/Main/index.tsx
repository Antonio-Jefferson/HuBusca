import { View } from "react-native";
import SearchUser from "../Search";
import styles from "./style";
import InfoUser from "../InfoUser";
import { useState } from "react";
import GitHubUser from "../../Interfaces/GitHubUser";

export default function Main(){
  const [dataUser, setDataUser] = useState<GitHubUser | undefined>(undefined)

    return (
    
        <View style={styles.conteiner}>
            <SearchUser setDataUser={setDataUser}/>
            {dataUser && <InfoUser dataUser={dataUser}/> }
        </View>
    )
} 