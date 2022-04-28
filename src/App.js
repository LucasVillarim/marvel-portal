import './App.css';
import { StateProvider } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/routes';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

function App() {
  return (
      <StateProvider>
        <BrowserRouter>
        <HeaderComponent />
        <RoutesComponent />
        <FooterComponent />
        </BrowserRouter>
      </StateProvider>

  );
}

export default App;
