import './App.css';
import React, { useState } from 'react';

function App() {

  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [situacao, setSituacao] = useState('')
  const [imc_texto, setImc_texto] = useState('')
  const [pontuacao, setPontuacao] = useState('')

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
      setSituacao('Peso ideal')
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

    setPontuacao(',')
  }


  return (
    <div className="App">
      <div className='exterior-container'>
        <div className='interior-container'>
              <div className='inputs'>
                  <p>Informe seu peso</p>
                  <input placeholder='Peso' onChange={(e) => setPeso(e.target.value)}></input>

                  <p>Informe sua altura</p>
                  <input placeholder='Altura' onChange={(e) => setAltura(e.target.value)}></input>
              </div>

              <div className='botao'>
                  <button onClick={calcularImc} >Calcular Imc</button>
              </div>
              
              <div className='texto'>
                  <p className='resultado'>{imc_texto} {pontuacao} {situacao}</p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
