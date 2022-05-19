import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Tasks from './components/Tasks';

function App() {
  return (
    <div height='100vh' className='bg-white m-0'>
      <div className='text-center'>
        <h1 className='text-4xl text-primary font-bold my-10'>WHAT TO-DO</h1>
        <Routes>
          <Route path='/' element={<RequireAuth>
          <Tasks></Tasks>
          </RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
