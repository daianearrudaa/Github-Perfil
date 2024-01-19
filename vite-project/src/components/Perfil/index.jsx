/* eslint-disable react/prop-types */
import './perfil.css';

const Perfil = (props) => {
    const{ endereco,nome}=props;
    return (
        <div>
            <img src={endereco} className="perfil-avatar" alt="" />
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    );
}

export default Perfil;
