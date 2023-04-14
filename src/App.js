// import './App.css';
import CategoriesProvider from './context/CategoriesProvider';
import SearchProvider from './context/SearchProvider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <SearchProvider>
          <Home />
        </SearchProvider>
      </CategoriesProvider>
      <>Teste</>
    </div>
  );
}

export default App;
