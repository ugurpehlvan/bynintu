import { connect } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from 'components/Stripe/Checkout';

function Stripe({ total, address }) {
  const stripePromise = loadStripe(
    'pk_test_51J2CNhJouClqQSpANjmafjoGyb7hkMyFNEhbjYsL3LD0hsHZRHJvmPI49hy8CRhZaJTYqhQT72LBRMVGdDhC7HYX00sE5zNN7J'
  );

  console.log('totaltotal', total);

  return (
    <>
      {total > 0 && (
        <Elements stripe={stripePromise}>
          <Checkout currency='EUR' address={address} amount={parseFloat(total) * 100} />
        </Elements>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Stripe);
