import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../components/checkOutForm/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    
    return (
        <div className="mx-20 min-h-[calc(100vh-400px)] mt-10 font-poppins">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Wanna be a pro user?</h1>
                <h1 className="text-xl font-medium mt-5 flex items-center justify-center gap-2">spend only <span className="text-5xl font-bold text-[#859770]">10</span>$</h1>
            </div>
            <div className="w-[30vw] mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;