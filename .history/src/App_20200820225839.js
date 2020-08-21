import React from "react";

import "./styles.css";
import { useEffect,useState } from "react";
import api from "./services/api";

function App() {
  const [repositories,setRepositories] = useState([]);
  useEffect(() =>{
    api.get('repositories').then(response =>{
      setRepositories(response.data);
    });

},[]);



  async function handleAddRepository() {
   
     const response = await api.post('repositories',{
        "title": 'Desafio ReactJS',
      });
   const repositorie = response.data;

   setRepositories([...repositories,repositorie]);

  }

  async function handleRemoveRepository(id) {
      const response = await api.delete(`repositories/${id}`)                 
    

    const result = repositories.filter(repositorie => repositorie.id !== id);
    setProjects(result);
  
  }

  return (
    <div>
      <ul data-testid="repository-list">
      {repositories.map(repositorie =>(
          <li key={repositorie.id}>{repositorie.title}
          <button onClick={() => handleRemoveRepository(project.id)}>
            Remover
          </button>
           </li>
        ))}
      </ul>
      
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
