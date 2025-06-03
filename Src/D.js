import react, { useState } from 'react';

function D() {
  const [name, setname] = useState("guest");
  const [quantity, setquantity] = useState(1);
  const [comment, setcomment] = useState(""); // Start with empty string
  const [payment, setpayment] = useState(""); // Start with empty string
  const [delivery, setdelivery] = useState("pickup");

  function namechange(e) {
    setname(e.target.value);
  }
  function quantitychange(e) {
    setquantity(Number(e.target.value)); // Ensure quantity is a number
  }
  function commentchange(e) {
    setcomment(e.target.value);
  }
  function paymentchange(e) {
    setpayment(e.target.value);
  }
  function deliverychange(e) {
    setdelivery(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={namechange}></input>
      <p>Name: {name}</p>

      <input value={quantity} type="number" onChange={quantitychange}></input>
      <p>quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={commentchange}
        placeholder="Want to tell us something?" // Use placeholder
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={paymentchange}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      
      <p>payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="pickup"
          checked={delivery === "pickup"}
          onChange={deliverychange}
        />
        pick up
      </label>
      <label>
        <input
          type="radio"
          value="delivery"
          checked={delivery === "delivery"}
          onChange={deliverychange}
        />
        delivery
      </label>
      <p>shipping: {delivery}</p>
      
    </div>
  );
}

export default D;
