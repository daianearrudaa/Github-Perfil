/* eslint-disable no-unused-vars */
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";


function App() {
    const [formularioEstaVisivel , setFormularioEstaVisivel] = useState(true);

    return (
        <>
            <Perfil nome="Daiane" endereco="https://github.com/daianearrudaa.png" />
            <RepoList />
            
           {/* { {formularioEstaVisivel &&(
                <Formulario />
            )}

            <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>} */}
           
            
        </>
    )
}

export default App;
