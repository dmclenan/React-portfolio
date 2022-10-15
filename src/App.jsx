import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Topbar from "./components/topbar/Topbar";
import Topbar from "./components/topbar/Topbar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="section">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
