function Perfil({ nombre, programa, ciudad }) {
  return (
    <section className="tarjeta perfil">
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Programa:</strong> {programa}</p>
      <p><strong>Ciudad:</strong> {ciudad}</p>
    </section>
  )
}

export default Perfil
