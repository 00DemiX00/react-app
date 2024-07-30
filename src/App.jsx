import React, { useState } from 'react';
import './Styles/App.css';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';



function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'Название поста 1', body: 'Описание поста 1'},
    {id: 2, title: 'Название поста 2', body: 'Описание поста 2'},
    {id: 3, title: 'Название поста 3', body: 'Описание поста 3'},
  ])
  
  return (
  <div className='App'>
    <form>
      <MyInput type='text' placeholder='Название поста'></MyInput>
      <MyInput type='text' placeholder='Название поста'></MyInput>
      <MyButton>Создать пост</MyButton>
    </form>
     <PostList posts={posts} title="Список постов 1"></PostList>

  </div>
  );
}

export default App
