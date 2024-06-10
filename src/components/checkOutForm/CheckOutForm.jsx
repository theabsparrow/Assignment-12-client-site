import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            setError(error.message)
        }
        else {
            console.log(paymentMethod)
            setError('')
        }
    }
        return (
            <form onSubmit={handlePayment} className="space-y-2 font-poppins">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#859770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-[#859770] px-3 py-2 rounded-xl text-white" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <div>
                    <h1 className="text-xl text-red-500 font-medium">{error}</h1>
                </div>
            </form>
        );
    };

    export default CheckOutForm;