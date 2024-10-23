import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

export default function Bookmarks({bookmarks,readingTime}) {
  return (
    <div className="md:w-1/3 ml-4 my-10">
    <div className="bg-orange-400 text-white py-3 rounded-xl my-3">
        <h2 className='text-2xl font-bold text-center text-white'>Spent Time : {readingTime} </h2>
    </div>
    
    <div className="bg-slate-200 py-3 my-3 rounded-xl">
        <h2 className='text-2xl font-bold text-center'>Bookmarked Blogs : {bookmarks.length} </h2>
        {
            bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
        }
    </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number,
}