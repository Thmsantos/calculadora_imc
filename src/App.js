import './App.css';
import React, { useState } from 'react';

function App() {

  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [situacao, setSituacao] = useState('')
  const [imc_texto, setImc_texto] = useState('')

  let imc_quebrado = 0
  let imc = 0

  function calcularImc(){
    imc_quebrado = peso/(altura * altura)

    imc = imc_quebrado.toFixed(2)

    setImc_texto(imc)

    if(imc <= 18.5){
      setSituacao('Abaixo do peso')
    }
    if(imc > 18.5 && imc <= 24.9){
      setSituacao('peso ideal')
    }
    if(imc > 25 && imc <= 29.9){
      setSituacao('Levemente acima do peso')
    }
    if(imc > 30 && imc <= 34.9){
      setSituacao('Obesidade I')
    }
    if(imc > 35 && imc <= 39.9){
      setSituacao('Obesidade II')
    }
    if(imc > 40){
      setSituacao('Obesidade III')
    }
  }


  return (
    <div className="App">
      <p>Peso</p>
      <input onChange={(e) => setPeso(e.target.value)}></input>

      <p>Altura</p>
      <input onChange={(e) => setAltura(e.target.value)}></input>

      <button onClick={calcularImc} >calcular Imc</button>

      <p>{imc_texto}</p>

      <p>{situacao}</p>
    </div>
  );
}

export default App;
