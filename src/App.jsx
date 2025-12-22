import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <html className="scroll-smooth">
    <div className="bg-linear-to-r from-white to-blue-300 min-h-screen text-white">
      <div className="py-4">
      <Navbar />
      </div>
      <Home />
    </div>
    </html>
  );
}
export default App;
