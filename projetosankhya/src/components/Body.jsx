import React, { useContext } from 'react';
import { DateContext } from '../context/DataContext';
import '../styles/Body.css';

export default function Body () {
  const {
    client,
    body,
    handleEdit
  } = useContext(DateContext);  

  if(body)
  return (
    <div className="bodyContainer">
      {client.map((objClient) => {
        return (
          <div className="cardContainer" key={objClient.id}>
            <span>Id:{objClient.id}</span>
            <h5>Nome:{objClient.name}</h5>
            <h5>Fone:{objClient.phone}</h5>
            <h5>CPF:{objClient.document}</h5>
            <h5>Endereço:{objClient.address}</h5>
            <button type="button" name={objClient.id} onClick={() => handleEdit(objClient)}>Editar Cliente</button>
          </div>
        )
      })}
    </div>
  )
  return(
    <div className="instructionsContainer">
      <h3>Instruções</h3>
      <ol>Para cadastrar:
        <li>Coloque o nome do cliente</li>
        <li>CPF (apenas números)</li>
        <li>Telefone (apenas números, no modelo 81912345678)</li>
        <li>Endereço (não obrigatório)</li>
        <li>Clique no botão Cadastrar Cliente</li>
      </ol>
      <ol>Para listar:
        <li>Clique no botão listar cliente</li>
      </ol>
    </div>
  )
}