import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Anh0 from "../Carousel/top0.png";
import Anh1 from "../Carousel/top1.png";
import Anh2 from "../Carousel/top2.png";
import Cart from "../Card/Cart";
function BasicExample(props) {
  console.log("Card", props);
  const { key, item } = props;
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Thêm vào giỏ hàng</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
