import React from 'react';
import '../styles/form.css';

const Form = () => (
  <form action="/" className="Form">
    <input type="text" placeholder="Dato de contacto" className="Form__input" />
    <input type="text" placeholder="Dato de contacto" className="Form__input" />
    <input type="text" placeholder="Dato de contacto" className="Form__input" />
    <input type="text" placeholder="Dato de contacto" className="Form__input" />
    <textarea
      placeholder="Dato de contacto"
      className="Form__textarea"
      cols="30"
      rows="10"
    />
    <button type="submit" className="Form__btn">
      CTA
    </button>
  </form>
);

export default Form;
