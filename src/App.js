import './App.css';
import { StateProvider } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/routes';
import HeaderComponent from './components/header';

function App() {
  return (
      <StateProvider>
        <BrowserRouter>
        <HeaderComponent />
        <RoutesComponent />
        </BrowserRouter>
      </StateProvider>

  );
}

export default App;
