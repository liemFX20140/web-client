import './App.css';
import { CreateUser } from './components/CreateUser';
import Login from './components/Login';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container mx-auto'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/createuser' element={<CreateUser></CreateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
