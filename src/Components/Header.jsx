import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ( { presupuesto, setPresupuesto, validarPresupuesto, setValidarPresupuesto, gastos, setGastos } ) => {
  return (
    <header>
        <h1>
            Planificador de gastos Jupi
        </h1>

        {validarPresupuesto === true ? (
          <ControlPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setValidarPresupuesto={setValidarPresupuesto}
          />
        ): (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setValidarPresupuesto={setValidarPresupuesto}
          />
        )}

    </header>
  )
}

export default Header