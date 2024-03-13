import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Função para atualizar a largura da tela
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Adiciona um ouvinte de evento de redimensionamento
    window.addEventListener('resize', handleResize)

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // A dependência vazia garante que o efeito ocorra apenas uma vez durante a montagem

  return windowWidth
}
