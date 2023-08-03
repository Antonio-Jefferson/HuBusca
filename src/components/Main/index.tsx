import { View } from "react-native";
import SearchUser from "../Search";
import styles from "./style";
import InfoUser from "../InfoUser";
import { useState } from "react";
import GitHubUser from "../../interfaces/GitHubUser";

export default function Main(){
  const [dataUser, setDataUser] = useState<GitHubUser | undefined>(undefined)
  console.log({dataUser})
    return (
    
        <View style={styles.conteiner}>
            <SearchUser setDataUser={setDataUser}/>
            {dataUser && <InfoUser dataUser={dataUser}/> }
        </View>
    )
} 