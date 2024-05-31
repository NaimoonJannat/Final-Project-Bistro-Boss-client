import { loadStripe } from "@stripe/stripe-js";
import Title from "../Shared/Title";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe('');

const Payment = () => {
    
    
    return (
        <div>
            <Title title="Payment" subtitle="Please pay to order!"></Title>
            <div>
            <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>

            </div>
        </div>
    );
};

export default Payment;