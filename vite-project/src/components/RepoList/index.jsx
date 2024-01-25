/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from './RepoList.module.css';


const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuError, setDeuError] = useState(false);


    useEffect(() => {
        setDeuError(true);
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)

            })

            .catch (e => {
                setDeuError(true);
            })
        
    }, [nomeUsuario]);

    
    return (
        <div className="container">
            
            {estaCarregando ? (<h1>Carregando...</h1>) : (
                <>
                    <ul className={styles.list}>
                        {repos.map(({ id, name, language, html_url }) => (
                            <li key={id} className={styles.listItem}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b>
                                    {name} </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {language}</div>


                                <a className={styles.itemLink} href={html_url} >Visitar no Github</a>
                            </li>
                        ))}

                    </ul>
                </>
            )}


        </div>
    )
}

export default RepoList