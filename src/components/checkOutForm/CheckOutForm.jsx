import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../../hooks/useRole";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [role, refetch] = useRole();
    const navigate = useNavigate();

    const totalPrice = 10

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
        }
        else {
            console.log(paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || "anonymous",
                    name: user.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log(paymentIntent)
            if (paymentIntent.status === "succeeded") {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                const paymentInfo = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                    transactionId: paymentIntent.id,
                    role: role,
                }
                const res = await axiosSecure.post('/payments', paymentInfo);
                refetch()
                console.log(res);

                navigate('/');


            }
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
            <button
                className="bg-[#859770] px-3 py-2 rounded-xl text-white"
                type="submit"
                disabled={!stripe || !clientSecret || role !== 'Guest'}>
                Pay
            </button>
            <div>
                <h1 className="text-xl text-red-500 font-medium">{error}</h1>
            </div>
            <div>
                {
                    role !== 'Guest' && <span className="text-xl text-red-600 font-medium">You are not a guest. so payment is not available for you</span>
                }
            </div>
        </form>
    );
};

CheckOutForm.propTypes = {
    payment: PropTypes.number
}
export default CheckOutForm;