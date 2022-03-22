import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './Helpers/Index.js'
import ListadoGastos from './Components/ListadoGastos'
import { formatearFecha } from './Helpers/Index'
import Filtro from './Components/Filtro'

function App() {
  const [ presupuesto, setPresupuesto ] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [ validarPresupuesto, setValidarPresupuesto ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ mostrarFormModal, setMostrarFormModal ] = useState(false);
  const [ gastos, setGastos ] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  );
  const [ editarGasto, setEditarGasto ] = useState({});
  const [ filtro, setFiltro ] = useState('');
  const [ gastosFiltrados, setGastosFiltrados ] = useState([]);

  // Cambios que ocurren en editarGasto
  useEffect(() => {
    if(Object.keys(editarGasto).length > 0) {
      setModal(true);

      setTimeout(() => {
        setMostrarFormModal(true)
      }, 600);
    }
  }, [editarGasto])


  // Cambios que ocurren en presupuesto
  useEffect(() => {
    Number(localStorage.setItem('presupuesto', presupuesto ?? 0));
  }, [presupuesto])
  

  // Cambios que ocurren en el LocalStorage
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0) {
      setValidarPresupuesto(true);
    }
  }, [])


  // Cambios que ocurren en gastos
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos])
  

  // Cambios que ocurran en filtro

  useEffect(() => {
    if(filtro) {
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro )
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])
  
  

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
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
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
