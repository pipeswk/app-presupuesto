import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ( { presupuesto, setPresupuesto, validarPresupuesto, setValidarPresupuesto } ) => {
  return (
    <header>
        <h1>
            Planificador de gastos
        </h1>

        {validarPresupuesto === true ? (
          <ControlPresupuesto
          presupuesto={presupuesto}
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