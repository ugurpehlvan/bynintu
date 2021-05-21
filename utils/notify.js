import { toast, Slide } from 'react-toastify';

const notify = (type, message) => {
  return toast[type](message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    transition: Slide,
  });
};

export default notify;
