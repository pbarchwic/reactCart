
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Toolbar from './components/toolbar/toolbar';

function App() {
  return (
    <>
      <Toolbar></Toolbar>
      <Routes>
          <Route exact path="/" element={<Layout/>} />
      </Routes>
    </>
  );
}

export default App;
