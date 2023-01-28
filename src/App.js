import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Homes/Home/Home';

function App() {
  return (
    <div className='lg:max-w-[1440px] mx-auto relative'>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
