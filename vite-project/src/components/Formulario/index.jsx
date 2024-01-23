import { useEffect, useState } from "react"

const Formulario = () => {
    const[ materiaA , setMateriaA ]= useState(0);
    const[ materiaB , setMateriaB ]= useState(0);
    const[ materiaC , setMateriaC ]= useState(0);
    const [nome, setNome] = useState('');

    useEffect(()=> {
        console.log('o estado nome mudou');
        return()=>{
            console.log('componente finalizou')
        }
    },[])

    useEffect(()=> {
        console.log('o estado nome mudou')
    },[nome])

    useEffect(()=>{
        console.log('Materia A mudou para ' + materiaA)
    },[materiaA])

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }


    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if ( media >= 7 ){
            return(
                <p>Olá {nome}, você foi aprovado</p>
            )  
        }else {
            return(
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario