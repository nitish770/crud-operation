import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
    <div className="container">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Create/>}/>
    <Route path='/read' element={<Read/>}/>
    <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
