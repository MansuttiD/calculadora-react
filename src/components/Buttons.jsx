import React from 'react'
import '../styles/button.css'

const Buttons = ({children, handleInput}) => {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }


  return (

    <div onClick={() => handleInput(children)} className = {`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd() }>
      {children}
    </div>

  );
}

export default Buttons