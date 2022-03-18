import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ( { presupuesto, setPresupuesto, setValidarPresupuesto } ) => {

    const [ mensaje, setMensaje ] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(presupuesto <= 0) {
            setMensaje('Presupuesto invalido')
            setValidarPresupuesto(false);
            return;
        } 

        setMensaje('');
        setValidarPresupuesto(true);
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>Definir presupuesto</label>
                <input
                className="nuevo-presupuesto"
                type="number"
                // min="0"
                placeholder={`$ Agrega tu presupuesto mensual`}
                onChange={ e => setPresupuesto(Number(e.target.value)) }
                />
            </div>

            <input
            type="submit"
            value='Añadir' 
            />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}


        </form>
    </div>
  )
}

export default NuevoPresupuesto