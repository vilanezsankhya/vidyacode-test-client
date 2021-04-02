import React, { createContext, useState } from 'react';
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
  const [id, setId] = useState('')

const handleClick = async () => {
  const axiosDataPost = async () => {
    await axios.post(endpoint, newClient)
  };
  axiosDataPost();
}

const handleList = async () => {
  const axiosData = async () => {
    const response = await axios.get(endpoint).then((res) => res.data)
    setClient(response.clients)
    setBody(true)
  };
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

const handleEdit = ({target}) => {
  setId(target.name)
}

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
  id
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
