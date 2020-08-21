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
   const project = response.data;

   setProjects([...projects,project]);

  }
  
  async function handleRemoveRepository(id) {
    const id = 'fd9859d6-218a-4026-ac9b-80b3130a0666';
  
      const response = await api.delete(`products/${id}`,{                  
    });
    const project = response.data;
    console.log(response.data);

    setProjects([...projects,project]);
  }

  return (
    <div>
      <ul data-testid="repository-list">
      {projects.map(project =>(
          <li key={project.id}>{project.title}
          <button onClick={() => handleRemoveRepository(1)}>
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
