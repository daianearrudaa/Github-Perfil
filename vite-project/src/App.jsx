/* eslint-disable no-unused-vars */
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";
import styles from "./App.module.css";



function App() {
    const [formularioEstaVisivel , setFormularioEstaVisivel] = useState(true);
    const [nomeUsuario, setNomeUsuario]=useState('');

    return (
        <>  
           
            <div className={styles.div}>
            <h1 className={styles.h1}>Digite aqui o perfil do Github que deseja procurar:</h1>
            <input type="text" placeholder="Nome do Usuário" className={styles.input} onBlur={(e)=> setNomeUsuario(e.target.value)}/>
            <button className={styles.button}>Pesquisar</button>
            </div>
            

            {nomeUsuario.length > 4 &&(
                <>
                    <Perfil nomeUsuario={nomeUsuario}/>
                    <RepoList nomeUsuario={nomeUsuario} />
                </>
            )}
            
           {/* { {formularioEstaVisivel &&(
                <Formulario />
            )}

            <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>} */}
           
    
        </>
    )
}

export default App;
