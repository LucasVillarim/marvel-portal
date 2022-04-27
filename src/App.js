import logo from './logo.svg';
import './App.css';
import HomeComponent from './pages/home';
import { StateProvider } from './context/context';

function App() {
  return (
      <StateProvider>
        <HomeComponent />
      </StateProvider>

  );
}

export default App;
