import './App.css';
import CategoriesProvider from './context/CategoriesProvider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <Home />
      </CategoriesProvider>
      <>Teste</>
    </div>
  );
}

export default App;
