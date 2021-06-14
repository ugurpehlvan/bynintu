import Link from 'next/link';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from 'store/actions/actions';

const AddToCart = ({ addToCart, id }) => {
  const handleAddToCart = () => {
    if (!localStorage.getItem('token')) {
      addToCart(id);
    } else {
    }

    toast.success('Added to the cart', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Link href='#'>
      <a
        className='btn btn-light'
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart();
        }}
      >
        Add to Cart
      </a>
    </Link>
  );
};

export default connect(null, { addToCart })(AddToCart);
