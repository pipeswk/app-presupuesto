import { useState } from 'react'
import Header from './Components/Header'

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </div>
  )
}

export default App
