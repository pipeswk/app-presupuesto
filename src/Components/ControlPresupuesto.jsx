
const ControlPresupuesto = ( { presupuesto } ) => {

    const valorMoneda = (cantidad) => {
        return cantidad.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        })
        
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>GRAFICA AQUI</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span> {valorMoneda(presupuesto)}
            </p>
            <p>
                <span>Disponible:</span> {valorMoneda(0)}
            </p>
            <p>
                <span>Gastado:</span> {valorMoneda(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto