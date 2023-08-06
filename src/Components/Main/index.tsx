import SearchUser from "../Search";
import InfoUser from "../InfoUser";
import { useState } from "react";
import GitHubUser from "../../Interfaces/GitHubUser";
import Container from "./style";
import ImageHome from "../ImageHome";

export default function Main(){
  const [dataUser, setDataUser] = useState<GitHubUser | undefined>(undefined)

    return (
    
        <Container>
            <SearchUser setDataUser={setDataUser}/>
            {dataUser ? <InfoUser dataUser={dataUser}/> : <ImageHome/> }
        </Container>
    )
} 