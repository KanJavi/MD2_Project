import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Anh0 from "../Carousel/top0.png";
import Anh1 from "../Carousel/top1.png";
import Anh2 from "../Carousel/top2.png";
import Cart from "../Card/Cart";
import axios from "axios";
function BasicExample(props) {
  console.log("Card", props);
  // destructuring
  const { key, item, cart, setCart } = props;
  console.log(cart);
  const handleBuy = (e, i) => {
    console.log(i);
    let findItem = cart.find((item) => item.productId === i);
    if (!findItem) {
      axios
        .post("http://localhost:8000/carts", {
          userId: JSON.parse(localStorage.getItem("isLoginId")),
          productId: i,
          productName: e.name,
          productPrice: e.price,
          productImg: e.img,
          amount: 1,
        })
        .then((res) => {
          console.log(res);
          // update the cart state after successful addition
          setCart([...cart, res.data]); //
        })
        .catch((err) => console.log(err));
    } else {
      const updateAmount = findItem.amount + 1;
      axios
        .patch(`http://localhost:8000/carts/${findItem.id}`, {
          amount: updateAmount,
        })
        .then((res) => {
          const updatedCart = cart.map((item) =>
            item.productId === i ? { ...item, amount: updateAmount } : item
          );
          setCart(updatedCart);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="dark" onClick={() => handleBuy(item, item.id)}>
          Thêm vào giỏ hàng
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
