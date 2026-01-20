import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1500,
  offset: 100
}, []);
function App() {
  return (
    <div className="bg-linear-to-r from-white to-blue-300 min-h-screen text-white">
      <div className="py-4">
      <Navbar />
      </div>
      <Home />
    </div>
  );
}
export default App;
