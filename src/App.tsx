import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div data-testid="app">
      <AppRoutes/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
