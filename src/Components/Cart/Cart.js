import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import AddedCart from "../AddedCart/AddedCart";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Cart = ({ cart }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="cart__btn" onClick={openModal}>
        <BsFillCartPlusFill className="cart__icon" />
        <span className="cart__quantity">{cart.length}</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="close-btn">
          <IoMdClose className="close-icon"/>
        </button>
        <div className="addedCart-container">
          {
            cart.map(cartProduct => <AddedCart key={cart.id} cart={cartProduct} />)
          }
          
        </div>
      </Modal>
    </>
  );
};

export default Cart;
