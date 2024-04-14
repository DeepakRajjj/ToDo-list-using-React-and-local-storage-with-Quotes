// App.js
import React from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/AddTodo/TodoList';
import ImageCarousel from './ImageCarousel';

const App = () => {
  const images = [
    'https://wallpapercave.com/wp/wp2724278.jpg',
    'https://rare-gallery.com/mocahbig/1422493-motivation-quotes-typography-hd-4k-5k-dark-black.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/2619.jpg',    
    'https://img.freepik.com/premium-vector/just-focus-your-priorities-lettering-motivational-quotes_571623-33.jpg?w=2000',
    'https://www.creativefabrica.com/wp-content/uploads/2021/06/26/focus-on-the-goal-quotes-lettering-Graphics-13899178-1.jpg',
    'https://wallpapers.com/images/hd/black-and-yellow-4k-ultra-hd-motivational-maeme6msk4e9h9rr.jpg',
    'https://rare-gallery.com/mocahbig/1422493-motivation-quotes-typography-hd-4k-5k-dark-black.jpg'
  ];
  return (
    <div className="flex gap-4">
      <div className="w-1/3">
        <ImageCarousel images={images} />
      </div>
      <div className="w-2/3">
        <div className='flex flex-col gap-y-2 mt-10 px-4 md:px-20 p-5 max-w-screen-lg bg-gray-100'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
