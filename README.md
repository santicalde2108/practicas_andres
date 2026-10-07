# Examen Práctico: Componentes en React

## PARTE 1: CONOCIMIENTO

**1. ¿Qué es un componente en React?**
**Respuesta: B.** Una parte reutilizable de la interfaz.
> Un componente es una pieza independiente de la interfaz (un título, una tarjeta, un botón…) que se puede usar varias veces y combinar con otras para armar la aplicación.

**2. ¿Cuál es una forma correcta de crear un componente funcional?**
**Respuesta: A.**
```jsx
function Perfil() {
  return <h1>Mi perfil</h1>
}
```
> Un componente funcional es una función de JavaScript, con nombre en mayúscula, que retorna JSX. Las opciones B, C y D usan palabras (`component`, `create`, `new Component`) que no existen en React para definir componentes.

**3. ¿Qué hace `return` dentro de un componente?**
**Respuesta: B.** Devuelve lo que el componente mostrará en pantalla.
> En `function Saludo() { return <h1>Hola</h1> }`, el `return` entrega el JSX `<h1>Hola</h1>`, que React dibuja en la página.

**4. ¿Para qué sirven las `props`?**
**Respuesta: A.** Para enviar información de un componente padre a un componente hijo.
> Por ejemplo, `App` (padre) le envía `nombre`, `programa` y `ciudad` a `Perfil` (hijo).

---

## PARTE 2: DESEMPEÑO ("Mi Panel Personal")

### Estructura
```
src
├── App.jsx
├── main.jsx
├── index.css
└── components
    ├── Encabezado.jsx
    ├── Perfil.jsx
    └── Mensaje.jsx
```

### Cómo ejecutarlo
```bash
npm install
npm run dev
```
Después, abre en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).

### Resumen
- **Encabezado** (punto 5): muestra el título "MI PANEL PERSONAL" entre líneas de `=`. No recibe props.
- **Perfil** (punto 6): recibe por props `nombre`, `programa` y `ciudad` y los muestra.
- **Mensaje** (punto 7): recibe la prop `mensaje` y la muestra con un 💡.
- **App** (punto 8): es el componente padre. Usa los tres componentes y les envía los datos mediante props.

> **Idea clave:** Componente = pieza reutilizable → Props = información que recibe → App = lugar donde las piezas se conectan.
