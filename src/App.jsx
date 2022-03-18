import { useState } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal';
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ validarPresupuesto, setValidarPresupuesto ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ mostrarFormModal, setMostrarFormModal ] = useState(false);


  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      console.log('Activado')
      setMostrarFormModal(true)
    }, 600);

  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validarPresupuesto={validarPresupuesto}
        setValidarPresupuesto={setValidarPresupuesto}
      />

      {validarPresupuesto === true ? (
        <div className='nuevo-gasto'>
          <img
            src={iconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      ) : null}

      {modal === true ? (
        <Modal
          setModal={setModal}
          setMostrarFormModal={setMostrarFormModal}
          mostrarFormModal={mostrarFormModal}
        />
      ) : null }

    </div>
  )
}

export default App
