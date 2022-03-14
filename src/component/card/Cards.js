import CardItem from "./CardItem";
import {getData} from "../service/api";
import { useEffect, useState } from "react";
function Cards(){
    const [response, setResponse] = useState([]);
    // useEffect(()=>{
    //     setResponse([...getData()])
    // },[]);
    console.log(getData());
    return(
        <div>
            <CardItem/>
        </div>
    )
}
export default Cards;