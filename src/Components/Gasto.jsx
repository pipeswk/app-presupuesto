import { formatearFecha } from '../Helpers/Index'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro : iconoAhorro,
  comida : iconoComida,
  hogar : iconoCasa,
  gastos : iconoGastos,
  ocio : iconoOcio,
  salud : iconoSalud,
  suscripciones : iconoSuscripciones
}     //Este diccionario permite asociar el icono con la categoria


const Gasto = ( { gasto, setEditarGasto, eliminarGasto } ) => {

    const { nombre, cantidad, categoria, fecha, id } = gasto;

    const aplicarGasto = () => {
      setEditarGasto({});
      setEditarGasto(gasto);
    }

    const trailingActions =() => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => eliminarGasto(id)}
        >
          ELIMINAR
        </SwipeAction>
      </TrailingActions>
    )

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => aplicarGasto()}>
          EDITAR
        </SwipeAction>
      </LeadingActions>
    )



  return (

    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
      <div className="gasto sombra">
        <div className="contenido-gasto">
          <img
            src={diccionarioIconos[categoria]}
            alt='icono-gasto'
          />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">Agregado el {''}</p>
                <span>{fecha}</span>
            </div>
        </div>
        <p className="cantidad-gasto">{`$${cantidad}`}</p>
      </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto