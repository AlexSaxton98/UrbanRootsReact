import "./Homepage.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const OrderConfirm = () => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push("/home")
        }, 5000)
      }, []);



      return(
          <div className="orderConfirm">
              <h1>Thank You For Your Order!</h1>
              <h3>You will shortly be returned to the Homepage</h3>
          </div>
      )
}

export default OrderConfirm;