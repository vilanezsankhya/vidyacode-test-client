import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DateContext = createContext();

const endpoint = 'https://vidyacode-test-j742x.ondigitalocean.app/api/clients'
const DataProvider = ({ children }) => {
  const [client, setClient] = useState([{
    name: '',
    document: '',
    phone: '',
    address: '',
  }]);
  const [newClient, setNewClient] = useState({
      name:'',
      document:'',
      phone:'',
      address:'',
  })
  const [body, setBody] = useState(false)
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')

  const axiosData = async () => {
    const response = await axios.get(endpoint).then((res) => res.data)
    
    setClient(response.clients) 
    setBody(true)
  };

const handleClick = async () => {
  const axiosDataPost = async () => {
    await axios.post(endpoint, newClient).catch(error => alert(error.message))
  };
  const axiosDataPut = async () => {
    await axios.put(`${endpoint}/${id}`, newClient).then(() => {setEdit(false); axiosData()})
  }
  return edit ? axiosDataPut() : axiosDataPost();
}

const handleList = async () => {
  axiosData();
}

const handleChange = ({target}) => {
  switch (target.name) {
    case "name":
    setNewClient({...newClient, name: target.value})
    break;
    case "document":
    setNewClient({...newClient, document: target.value})
    break;
    case "phone":
    setNewClient({...newClient, phone: target.value})
    break;
    case "address":
      setNewClient({...newClient, address: target.value})
    break;
  default:
    alert('Verifique seus dados')
  }
}

const handleEdit = ({id, name, phone, document, address}) => {
  setId(id)
  setNewClient({name, phone, document, address})
  setEdit(true);
  console.log(newClient)
}

const handleDelete = async (objClient) => {
  const axiosDataPut = async () => {
    if (!window.confirm("Deseja excluir o registro?")) return;
    await axios.delete(`${endpoint}/${objClient.id}`).then(() => axiosData())
}
return axiosDataPut();
}

useEffect(() => {
  document.getElementById('name').value = newClient.name;
  document.getElementById('phone').value = newClient.phone;
  document.getElementById('document').value = newClient.document;
  document.getElementById('address').value = newClient.address;
}, [newClient])

const store = {
  client,
  setClient,
  handleClick,
  handleChange,
  handleList,
  body,
  setBody,
  handleEdit,
  setId,
  id,
  edit,
  setEdit,
  handleDelete,
}

  return(
    <DateContext.Provider value={ store }>
      {
        children
      }
    </DateContext.Provider>
  );
};

export default DataProvider
