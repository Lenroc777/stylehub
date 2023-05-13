import StripeCheckout from 'react-stripe-checkout'
import {useState, useEffect} from 'react'

// import { createBrowserHistory } from 'history';
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router'

import axios from 'axios'
const KEY = "pk_test_51N1jSMD785bkGyB1lUr84mVTQrWyMZ4KsiYGs8ZaXgc2jco0DP5NyhD1PMwJ4DLXM4HJDhH4hyETxqKurckXCzBn00TaP00KH3"

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()
    // const history = createBrowserHistory();


    const onToken = (token) =>{
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try {
               const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                tokenId: stripeToken.id,
                amount: 20000,
               });
               console.log(res.data);
               navigate("/success")
            } catch (err) {
                console.log(err)
            }
        }

        stripeToken && makeRequest()
    }, [stripeToken, navigate])
    return ( 
        <div style={{
            height: "100vh",
            display : "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {stripeToken ? (<span> Processing. Please wait...</span>) : (

                <StripeCheckout 
                name="Lama shop" 
                image="" 
                billingAddress
                shippingAddress
                description='Your total is 20$'
                amount={2000}
                token={onToken}
                stripeKey={KEY} >

            <button style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }}>
                Pay Now
            </button>
            </StripeCheckout>
            ) }
        </div>
     );
}
 
export default Pay;