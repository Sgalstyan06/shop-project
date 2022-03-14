import CardItem from "./CardItem";
import { getData } from "../service/api";
import { useEffect, useState } from "react";
import "./CardCss.css";

function Cards() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    getData().then((data) => setResponse(data));
  }, []);

  return (
    <div className="total">
      {response.map((item) => {
        return (
          <CardItem
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
export default Cards;
