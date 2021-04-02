import React, { useContext } from 'react';
import { DateContext } from '../context/DataContext';
import '../styles/Form.css';

export default function Form () {
  const {
    handleClick,
    handleChange,
    handleList,
  } = useContext(DateContext);

  return(
      <>
        <h3>Cadastro de Clientes</h3>
        <div className="formContainer">
          <label htmlFor="Nome"> Nome:
            <input 
              id="Nome"
              type="text"
              maxLength="100"
              name="name"
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="CPF"> CPF:
            <input 
              id="CPF"
              type="text"
              minLength="11"
              maxLength="11"
              size="11"
              name="document"
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="Telefone"> Telefone:
            <input 
              id="Telefone"
              type="text"
              minLength="11"
              maxLength="11"
              size="11"
              name="phone"
              onChange={ handleChange }
              required
          />
          </label>
          <label htmlFor="Endereço"> Endereço:
            <input 
              id="Endereço"
              type="text"
              maxLength="200"
              name="address"
              onChange={ handleChange }
            />
          </label>
          <button type="button" onClick={ handleClick }>Cadastrar Cliente</button>
          <button type="button" onClick={ handleList }>Listar Clientes</button>
      </div>
    </>
  )
}
