import { connect } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from 'components/Stripe/Checkout';

function Stripe({ total, address }) {
  const stripePromise = loadStripe(
    'pk_live_51J2CNhJouClqQSpAb3qpcaW0m3GQvk9pfXnHHG2y7ynwZ2JJmHHRw0uAF72I7vsr7MLpCKIsef1n20hks6ZDQVxC001Ik7Pwa3'
  );
    console.log('Stripe', total);
  return (
    <>
      {total > 0 && (
        <Elements stripe={stripePromise}>
          <Checkout currency='EUR' address={address} total={parseFloat(total)} />
        </Elements>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Stripe);
