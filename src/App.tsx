import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/list';
import Header from './components/header';
import SinglePage from './pages/single';

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='/:pokemon' element={<SinglePage />} />
    </Routes>
  </>);
}

export default App;
