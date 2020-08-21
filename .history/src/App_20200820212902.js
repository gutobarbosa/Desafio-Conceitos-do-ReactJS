import React from "react";

import "./styles.css";
import { useEffect,useState } from "react";
import api from "./services/api";

function App() {
  const [projects,setProjects] = useState([]);
  useEffect(() =>{
    api.get('./repositories').then(response =>{
      setProjects(response.data);
    });

},[]);



  async function handleAddRepository() {
    
     const response = await api.post('/repositories',{
        "title": 'Desafio ReactJS',
     
   });
   console.log(response.data);
   const project = response.data;

   setProjects([...projects,project]);

  }

  async function handleRemoveRepository(id) {
      const response = await api.delete(`products/${id}`,{                  
 });
 console.log(response.data);
 const project = response.data;

 setProjects([...projects,project]);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
            repositori 1
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
        <li>
            repositori 2
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
