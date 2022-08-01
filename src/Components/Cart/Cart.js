import React from "react";
import Modal from "react-modal";
import { BsFillCartPlusFill, IoMdClose } from "react-icons/all";
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
  let subtitle;
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
            cart.map(cartProduct => <AddedCart cart={cartProduct} />)
          }
          
        </div>
      </Modal>
    </>
  );
};

export default Cart;
