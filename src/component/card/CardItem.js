import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import './CardItemCss.css';

function CardItem({ name, price, image, description }) {
  return (
    <div>
      <Card >
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            {/* <span className='date'>Joined in 2015</span> */}
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {price}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
export default CardItem;
