import Link from 'next/link';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCard, addCardToDatabase } from 'store/actions/actions';

const AddToCard = ({ addToCard, addCardToDatabase, product }) => {
  const { id } = product;
  const handleAddToCard = () => {
    console.log('addtocard');
    addToCard(product);
    console.log('addtocard2');
    if (!localStorage.getItem('token')) {
      localStorage.setItem('cardWithoutLogin', 'cardWithoutLogin');
    } else {
      addCardToDatabase({
        productId: id,
        amount: 1,
      });
    }

    toast.success('Added to the card', {
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
          handleAddToCard();
        }}
      >
        Add to Card
      </a>
    </Link>
  );
};

export default connect(null, { addToCard, addCardToDatabase })(AddToCard);
