import cerrar from '../img/cerrar.svg'
import { useState } from 'react';
import Mensaje from './Mensaje';

const Modal = ( { setModal, mostrarFormModal, setMostrarFormModal } ) => {

    const [mensaje, setMensaje] = useState('');
    
    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState('');
    const [ categoria, setCategoria ] = useState('');
    

    const ocultarModal = () => {
        setMostrarFormModal(false);

        setTimeout(() => {
            setModal(false);
        }, 650);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( [nombre, cantidad, categoria].includes('') ) {
            setMensaje('⚠ Todos los campos son obligatorios ⚠');

            setTimeout(() => {
                setMensaje('');
            }, 6000);

        } else {
            console.log('Campos Ok')
        }
    }

  return (
    <div className="modal">
        <div className="cerrar-modal" onClick={ocultarModal}>
            <img
                src={cerrar}
                alt="Icono cerrar modal"
            />x
        </div>

        <form
            className={`formulario ${mostrarFormModal === true ? "animar" : ""}`}
            onSubmit={handleSubmit}
        >
            <legend>Nuevo gasto</legend>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor="nombre">Nombre gasto</label>
                
                <input
                    type="text"
                    placeholder='Agrega el nombre del gasto'
                    id='nombre'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                
                <input
                    type="number"
                    placeholder='Agrega la cantidad del gasto'
                    id='nombre'
                    value={cantidad}
                    onChange={ e => setCantidad( Number(e.target.value) ) }
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                
                <select
                    id="categoria"
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value) }
                >
                    <option value="">---Seleccionar---</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="hogar">Hogar</option>
                    <option value="gastos Varios">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input
            type="submit"
            value="AGREGAR GASTO" 
            />

        </form>

    </div>
  )
}

export default Modal