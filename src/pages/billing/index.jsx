import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BillingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardInfo, setCardInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, country, paymentMethod, cardInfo });
    // Reset form fields
    setName('');
    setEmail('');
    setCountry('');
    setPaymentMethod('');
    setCardInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
          Country
        </label>
        <input
          type="text"
          id="country"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="paymentMethod" className="block text-gray-700 font-bold mb-2">
          Payment Method
        </label>
        <select
          id="paymentMethod"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select a payment method</option>
          <option value="paypal">PayPal</option>
          <option value="mtnMobileMoney">MTN Mobile Money</option>
          <option value="card">Card</option>
          <option value="vodafoneCash">Vodafone Cash</option>
        </select>
      </div>
      {paymentMethod === 'card' && (
        <div className="mb-4">
          <label htmlFor="cardInfo" className="block text-gray-700 font-bold mb-2">
            Card Info
          </label>
          <input
            type="text"
            id="cardInfo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={cardInfo}
            onChange={(e) => setCardInfo(e.target.value)}
            required
          />
        </div>
      )}
      <div className="flex items-center justify-center">
       <Link to="/confirmation"> <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button></Link>
      </div>
    </form>
  );
};

export default BillingForm;