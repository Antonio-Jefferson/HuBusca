import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Menu from "../../Components/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import Container from "./style";

export default function Home(){
    const  open = useSelector((state: RootState) => state.menuReducer.setOpenMenu)
    return (
        <Container>
           <Header/>
           <Main/>
           {open ?  <Menu/> : '' }
        </Container>
    )
}