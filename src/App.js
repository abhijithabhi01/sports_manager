import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
