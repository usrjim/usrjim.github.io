import { createSignal, createContext, useContext } from 'solid-js'

const PauseContext = createContext()

export function PauseProvider(props) {
  const [pause, setPause] = createSignal(props.pause || false)
  const store = [
    pause,
    { 
      togglePause() {
        console.log('togglePause!!', pause())
        setPause(!pause())
      }
    }
  ]

  return (
    <PauseContext.Provider value={store}>
      {props.children}
    </PauseContext.Provider>
  )
}

export function usePause() { return useContext(PauseContext) }
