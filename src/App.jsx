import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const handleAddToBookMark = blog => {
    const newBookmarks = [...bookmarks];
    bookmarks.find(bookmark => bookmark.id == blog.id)?'':newBookmarks.push(blog);
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id,time) => {
    const totalTime = readingTime + time;
    setReadingTime(totalTime);
    const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !==id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
      <header>
        <Header></Header>
      </header>
      <section className='md:flex'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </section>
    </div>
  )
}

export default App
