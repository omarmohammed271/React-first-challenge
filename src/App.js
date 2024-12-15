
import './App.css';
import './index.css';
import Headers from './Headers';
import Post from './posts';
import SideMenu from './sideBar';

function App() {
  return (

    <div >
      <div >
        <Headers/>
      </div>
      <div className='container mx-auto mt-10 w-3/4 flex'>
        <div className='w-3/5 flex-auto'>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className='flex-auto mx-8 w-1/5'>
          <SideMenu/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
