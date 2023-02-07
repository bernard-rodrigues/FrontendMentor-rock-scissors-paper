import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { RulesButton } from "./components/RulesButton";

export function App() {

  return (
    <div className="w-screen h-screen bg-game py-8 flex flex-col justify-between items-center">
      <Header />
      <Game />
      <RulesButton />
    </div>
  )
}
