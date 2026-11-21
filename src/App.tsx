import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
// import { MenuProvider } from "./contexts/MenuContext";
function App() {
  return (
    <div className="bg-bg-app" id="appWrapper">
      {/* <MenuProvider> */}
      <Header />
      <Dashboard />
      {/* </MenuProvider> */}
    </div>
  );
}
export default App;
