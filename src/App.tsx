import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { RulesButton } from "./components/RulesButton";
import { ScoreContextProvider } from "./contexts/scoreContext";

export function App() {

  return (
    <div className="w-screen h-screen bg-game py-8 lg:pt-14 flex flex-col items-center overflow-hidden relative">
      <ScoreContextProvider>
        <Header />
        <Game />
      </ScoreContextProvider>
      <RulesButton />
    </div>
  )
}
