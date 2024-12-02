import "./App.css";
import Configuratoin from "./components/Configuratoin";
import Experience from "./components/Experience";
import Scene from "./components/Scene";
import { CustomizationProvider } from "./context/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Scene>
          <Experience />
        </Scene>
        <Configuratoin />
      </div>
    </CustomizationProvider>
  );
}

export default App;
