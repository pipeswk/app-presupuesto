import cerrar from '../img/cerrar.svg'
import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';

const Modal = ( { 
    setModal,
    mostrarFormModal,
    setMostrarFormModal,
    guardarGasto,
    editarGasto } ) => {

    const [mensaje, setMensaje] = useState('');
    
    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState('');
    const [ categoria, setCategoria ] = useState('');
    const [ id, setId ] = useState('');
    const [ fecha, setFecha ] = useState('');

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0) {
            setNombre(editarGasto.nombre);
            setCantidad(editarGasto.cantidad);
            setCategoria(editarGasto.categoria);
            setId(editarGasto.id);
            setFecha(editarGasto.fecha);
          }
    }, [])
    
    

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

        } else if( cantidad < 1 ) {
            setMensaje('⚠ La cantidad debe ser superior a 0 ⚠');

            setTimeout(() => {
                setMensaje('');
            }, 6000);
        } else {
            guardarGasto( { nombre, cantidad, categoria, id, fecha } );
            ocultarModal();
        } return;
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
            <legend>{Object.keys(editarGasto).length > 0 ? 'Editar gasto' : 'Nuevo gasto'}</legend>

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
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input
            type="submit"
            value={Object.keys(editarGasto).length > 0 ? 'GUARDAR CAMBIOS' : 'AGREGAR GASTO'}
            />

        </form>

    </div>
  )
}

export default Modal