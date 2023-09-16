import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";
function BasicExample(props) {
  console.log("Card", props);
  // destructuring

  const { key, item, cart, setCart } = props;
  console.log(cart);
  const handleBuy = (e, i) => {
    console.log("Sending Axios POST request...");
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
          // Thêm sản phẩm mới vào giỏ hàng
          setCart([...cart, res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      const updateAmount = findItem.amount + 1;
      axios
        .patch(`http://localhost:8000/carts/${findItem.id}`, {
          amount: updateAmount,
        })
        .then((res) => {
          // Cập nhật số lượng sản phẩm trong giỏ hàng
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
