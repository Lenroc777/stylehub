import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartRedux';

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser)
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        },

              {
                headers: {
                    token: "Bearer "+currentUser.accessToken
        }});

        setOrderId(res.data._id);

        dispatch(clearCart());
        
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      { true //orderId
        // ? `Order has been created successfully. Your order number is ${orderId}`
        ? `Order has been created successfully. Your order number is 123`
        : `Successfull. Your order is being prepared...`}
      <Link to="/" style={linkStyle}>
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>

  );
};

export default Success;