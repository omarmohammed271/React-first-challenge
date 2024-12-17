
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
          <Post title="Learn Python in 30 Day" content="as you like you wanna reach"/>
          <Post title="Learn React with Omar" content="React is an important frame work" />
          <Post title="Learn JS" />
          
        </div>
        <div className='flex-auto mx-8 w-1/5'>
          <SideMenu/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
