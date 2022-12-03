import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './routes/providers';


function App() {
  return (
    <div data-testid="app">
      
        <AppRoutes/>
        <GlobalStyles/>
      
    </div>
  );
}

export default App;
