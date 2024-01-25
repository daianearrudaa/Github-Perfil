import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuError, setDeuError] = useState(false);
    

    useEffect(() => {
        setEstaCarregando(true);
        setDeuError(false); // Reseta o estado de erro ao começar a buscar

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(() => {
                setEstaCarregando(false); // Se ocorrer um erro, também setamos a flag de carregamento para false
                setDeuError(true);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {!deuError && !estaCarregando}
            {deuError ? ( // Renderiza a mensagem de erro
               <h2>Usuário não encontrado</h2>
            ) 
            
            : (
                estaCarregando ? ( // Renderiza a mensagem de carregando
                    <h2>Carregando...</h2>
                ) : (
                    <> {/* Renderiza a lista de repositórios */}
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url }) => (
                                <li key={id} className={styles.listItem}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b>
                                        {language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" href={html_url} >Visitar no Github</a>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            )}
        </div>
    );
};

export default RepoList;
