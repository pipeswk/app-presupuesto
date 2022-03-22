import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ( { presupuesto, gastos } ) => {

    const [ disponible, setDisponible ] = useState(presupuesto);
    const [ gastado, setGastado ] = useState(0);
    const [ percentage, setPercentage ] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 );
        const montoDisponible = gastos.reduce( (presupuesto, gasto) => presupuesto - gasto.cantidad, presupuesto );
        setGastado(totalGastado);
        setDisponible(montoDisponible);
    }, [gastos])

    useEffect(() => {
        const newPercentage = ((gastado / presupuesto) * 100).toFixed(2);
        setPercentage(newPercentage);
    }, [gastado])
    
    
    

    const valorMoneda = (cantidad) => {
        return cantidad.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        })
        
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% gastado`}
                    styles={buildStyles({
                        pathColor: "#3B82F6",
                        textColor: "#3B82F6",
                    })}
                />
            </p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span> {valorMoneda(presupuesto)}
            </p>
            <p>
                <span>Disponible:</span> {valorMoneda(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {valorMoneda(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto