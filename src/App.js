
import './App.css';
import './index.css';
import Headers from './Headers';
import Post from './posts';
import SideMenu from './sideBar';

function App() {
  const posts = [
    {id:1, title: "Learn Python in 30 Day", content: "as you like you wanna reach" },
    {id:2, title: "Learn React with Omar", content: "React is an important frame work" },
    {id:3, title: "Learn JS" }
  ];
  const postsValue = posts.map((post) => (
    <Post key={post.id} title={post.title} content={post.content} />
  ));
  console.log(posts);
  return (

    <div >
      <div >
        <Headers/>
      </div>
      <div className='container mx-auto mt-10 w-3/4 flex'>
        <div className='w-3/5 flex-auto'>
        {postsValue}
          {/* {posts.map((post) => <Post key={post.id} title={post.title} content={post.content} />)} */}
          {/* <Post title="Learn Python in 30 Day" content="as you like you wanna reach"/>
          <Post title="Learn React with Omar" content="React is an important frame work" />
          <Post title="Learn JS" /> */}
          
        </div>
        <div className='flex-auto mx-8 w-1/5'>
          <SideMenu/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
