import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const RepoList = ({ nomeUsuario, setUsuarioEncontrado }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    setUsuarioEncontrado(false); // Define que o usuário não foi encontrado
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
                setEstaCarregando(false);
            });
    }, [nomeUsuario, setUsuarioEncontrado]);

    return (
        <div className="container">
            {estaCarregando ? (
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
            )}
        </div>
    );
};

export default RepoList;
