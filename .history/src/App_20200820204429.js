import React from "react";

import "./styles.css";
import { useEffect,useState } from "react";
import api from "./services/api";

function App() {
  const [projects,setProjects] = useState([]);
  useEffect(() =>{
    api.get('./repositories').then(response =>{
      console.log(response.data);
      setProjects(response.data);
    });

},[]);



  async function handleAddRepository() {
    
     const response = await api.post('/projects',{
        "title": `Desafio ReactJS ${Date.now()}`,
        "url":"https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-conceitos-reactjs",
        "techs":["Node.js","ReacJS","React Native"],
        "likes": 0
   });

   const project = response.data;

   setProjects([...projects,project]);

  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          <ul>
          {projects.map(project =>(
                  <li key={project.id}>{project.title}</li>
              ))}  
            </ul>
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
