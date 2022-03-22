import Gasto from "./Gasto"

const ListadoGastos = ( { gastos, setEditarGasto, eliminarGasto } ) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>

        {gastos.map( gasto => (      // el .map recorre cada elemento del array y crea una carta para cada gasto segun la cantidad
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setEditarGasto={setEditarGasto}
            eliminarGasto={eliminarGasto}
            />
        ) )}

    </div>
  )
}

export default ListadoGastos