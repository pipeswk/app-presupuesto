import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ( { presupuesto, setPresupuesto, gastos, setGastos, setValidarPresupuesto } ) => {

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

    const reiniciarApp = () => {
        const resultado = confirm('¿Estas seguro de reiniciar el app? Perderas el presupuesto y todos los gastos');

        if(resultado) {
            setValidarPresupuesto(false);
            setGastos([]);
            setPresupuesto(0);
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% gastado`}
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                />
            </p>
        </div>
        <div className="contenido-presupuesto">
            <button className='reset-app' type='button' onClick={reiniciarApp}>
                Reiniciar App
            </button>
            <p>
                <span>Presupuesto:</span> {valorMoneda(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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