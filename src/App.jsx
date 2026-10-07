import Encabezado from './components/Encabezado.jsx'
import Perfil from './components/Perfil.jsx'
import Mensaje from './components/Mensaje.jsx'
function App() {
  return (
    <>
      <Encabezado />

      <Perfil
        nombre="Santiago"
        programa="Desarrollo de Software"
        ciudad="Rionegro"
      />

      <Mensaje mensaje="Bienvenido a React" />
    </>
  )
}

export default App
