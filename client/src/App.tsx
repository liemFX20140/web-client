import { HomePage } from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='fixed  w-screen  bg-primary  z-10'>
        <NavBar />
      </header>
      <div className='container mx-auto pt-16'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
