import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../components/checkOutForm/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="mx-20 min-h-[calc(100vh-400px)] mt-10 ">
           <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
           </Elements>
        </div>
    );
};

export default Payment;