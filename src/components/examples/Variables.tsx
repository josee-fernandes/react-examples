import { useState, useCallback } from 'react'

const buttonStyle = {
  height: 60,
  width: 400,
  fontSize: 30
}

// const useQualquerCoisa = () => {
//   const obj = {
//     nome: 'João',
//     sobrenome: 'Silva'
//   }

//   return obj
// }

export const Variables = () => {
  const objeto = {
    nome: 'João',
    sobrenome: 'Silva'
  }

  const { nome } = objeto

  // const { nome, sobrenome } = useQualquerCoisa()

  const [count, setCount] = useState(0)

  // const handleClickButtonA = (newCount: number) => {
  //   setCount(newCount)

  //   console.log('💎CONSOLE LOG DENTRO DO MÉTODO', newCount)
  // }

  const handleClickButtonA = useCallback((newCount: number) => {
    setCount(newCount)

    console.log('💎CONSOLE LOG DENTRO DO MÉTODO', newCount)
  }, [count])

  console.log('❇️CONSOLE LOG FORA DO MÉTODO', count)

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        flexDirection: 'column'
      }}
    >
      <button
        style={buttonStyle}
        // onClick={handleClickButtonA(count + 1)} -> errado, tentando executar função
        onClick={() => handleClickButtonA(count + 1)}
      >
        Button A
      </button>
      <button
        style={buttonStyle}
      >
        Button B
      </button>
      <button
        style={buttonStyle}
      >
        Button C
      </button>
      <div>
        <h1
          style={{
            fontSize: 60
          }}
        >
          CONTADOR: {count}
        </h1>
      </div>
      <div>
        nome: {nome}
      </div>
    </div>
  )
}