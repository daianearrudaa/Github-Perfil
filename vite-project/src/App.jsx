import { useState } from "react";
import Perfil from "./components/Perfil";
import RepoList from "./components/RepoList";
import styles from "./App.module.css";

function App() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(true);

    const handlePesquisar = () => {
        setUsuarioEncontrado(true); // Define usuarioEncontrado como true antes de fazer uma nova pesquisa
        // Coloque aqui qualquer outra lógica que você queira executar antes de fazer a pesquisa, se necessário
    };

    return (
        <>  
            <div className={styles.div}>
                <h1 className={styles.h1}>Digite abaixo o perfil do Github que deseja procurar :</h1>
                <input type="text" placeholder="Nome do Usuário" className={styles.input} onBlur={(e)=> setNomeUsuario(e.target.value)}/>
                <button onClick={handlePesquisar} className={styles.button}>Pesquisar</button>
            </div>

            {nomeUsuario.length > 4 && usuarioEncontrado && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <RepoList nomeUsuario={nomeUsuario} setUsuarioEncontrado={setUsuarioEncontrado} />
                </>
            )}

            {!usuarioEncontrado && (
                <h2 className={styles.h2}>Usuário não encontrado !</h2>
            )}
        </>
    );
}

export default App;

