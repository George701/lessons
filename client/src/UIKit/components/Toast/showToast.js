import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import theme from '../../theme'


const showToast = (text, isError= false, duration = 3000) => {
  Toastify({
    text: text,
    duration: duration,
    gravity: "bottom",
    position: "right",
    stopOnFocus: false,
    offset: {
      x: 20,
    },
    style: {
      background: "#fff",
      color: isError ? theme.palette.error : "#000",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: "4px",
    },
  }).showToast();
};

export default showToast;