import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { RulesButton } from "./components/RulesButton";
import { ScoreContextProvider } from "./contexts/scoreContext";

export function App() {

  return (
    <div className="w-screen h-screen bg-game py-8 lg:pt-14 flex flex-col justify-between items-center">
      <ScoreContextProvider>
        <Header />
        <Game />
      </ScoreContextProvider>
      <RulesButton />
    </div>
  )
}
