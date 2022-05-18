import './App.css';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='bg-white'>
      <div className='border text-center border-violet-500 '>
        <h1 className='text-3xl my-5'>What to do</h1>
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default App;
