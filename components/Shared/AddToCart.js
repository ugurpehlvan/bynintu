import Link from 'next/link';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, addCartToDatabase } from 'store/actions/actions';

const AddToCart = ({ addToCart, addCartToDatabase, id }) => {
  const handleAddToCart = () => {
    addToCart(id);

    if (!localStorage.getItem('token')) {
      localStorage.setItem('cartWithoutLogin', 'cartWithoutLogin');
    } else {
      addCartToDatabase({
        productId: id,
        amount: 1,
      });
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

export default connect(null, { addToCart, addCartToDatabase })(AddToCart);
