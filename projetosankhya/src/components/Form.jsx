import React, { useContext } from 'react';
import { DateContext } from '../context/DataContext';
import '../styles/Form.css';

export default function Form () {
  const {
    handleClick,
    handleChange,
    handleList,
    edit,
  } = useContext(DateContext);

  return(
      <>
        <h3>Cadastro de Clientes</h3>
        <div className="formContainer">
          <label htmlFor="name"> Nome:
            <input 
              id="name"
              type="text"
              maxLength="100"
              name="name"
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="document"> CPF:
            <input 
              id="document"
              type="text"
              minLength="11"
              maxLength="11"
              size="11"
              name="document"
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="phone"> Telefone:
            <input 
              id="phone"
              type="text"
              minLength="11"
              maxLength="11"
              size="11"
              name="phone"
              onChange={ handleChange }
              required
          />
          </label>
          <label htmlFor="address"> Endereço:
            <input 
              id="address"
              type="text"
              maxLength="200"
              name="address"
              onChange={ handleChange }
            />
          </label>
          {edit ? 
            <button title="Atualizar Clientes" type="button" onClick={ handleClick }>Atualizar Cliente</button>
            :
            <button title="Cadastrar Clientes" type="button" onClick={ handleClick }>Cadastrar Cliente</button>
          }
          <button title="Listar Clientes" type="button" onClick={ handleList }>Listar Clientes</button>
      </div>
    </>
  )
}
