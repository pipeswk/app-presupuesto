import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './Helpers/Index.js'
import ListadoGastos from './Components/ListadoGastos'
import { formatearFecha } from './Helpers/Index'

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ validarPresupuesto, setValidarPresupuesto ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ mostrarFormModal, setMostrarFormModal ] = useState(false);
  const [ gastos, setGastos ] = useState([]);
  const [ editarGasto, setEditarGasto ] = useState({});

  useEffect(() => {
    if(Object.keys(editarGasto).length > 0) {
      setModal(true);

      setTimeout(() => {
        setMostrarFormModal(true)
      }, 600);
    }
  }, [editarGasto])
  
  

  const handleNuevoGasto = () => {
    setModal(true);
    setEditarGasto({});

    setTimeout(() => {
      setMostrarFormModal(true)
    }, 600);

  }


  const guardarGasto = (gasto) => {
    console.log(gasto.id);
    if(gasto.id) {
      //Actualiza un gasto
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState );
      setGastos(gastosActualizados);
      setEditarGasto({})
    } else {
      // Agrega un gasto nuevo
      gasto.id = generarId();
      gasto.fecha = formatearFecha();
      setGastos( [ ...gastos, gasto ] );
    }
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id );
    console.log(gastosActualizados);
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validarPresupuesto={validarPresupuesto}
        setValidarPresupuesto={setValidarPresupuesto}
        gastos={gastos}
      />

      {validarPresupuesto === true ? (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={iconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      ) : null}

      {modal === true ? (
        <Modal
          setModal={setModal}
          setMostrarFormModal={setMostrarFormModal}
          mostrarFormModal={mostrarFormModal}
          guardarGasto={guardarGasto}
          editarGasto={editarGasto}
        />
      ) : null }

    </div>
  )
}

export default App
