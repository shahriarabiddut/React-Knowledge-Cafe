import PropTypes from 'prop-types'; // ES6
import { MdBookmarkAdd } from "react-icons/md";

const Blog = ({ blog,handleAddToBookMark,handleMarkAsRead }) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  return (
    <div className='my-10'>
        <img src={cover} alt={`Cover Picture of ${title}`} className='rounded-lg w-full' />
        
        <div className='flex justify-between my-4 '>
            <div className='flex gap-6 items-center'>
                <img src={author_img} alt="Author" className='w-16'/>
                <div>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <span>{reading_time} min read</span> <button onClick={() => handleAddToBookMark(blog)} className=' text-purple-800 text-2xl'><MdBookmarkAdd /></button>
            </div>
        </div>
        <h2 className="text-4xl my-4">{title}</h2>
        <p>
            {
                hashtags.map((tag,index)=> <span key={index} className='my-4 mr-2 text-white bg-purple-800 p-3 rounded-lg'><a href={`#${tag}`}>#{tag}</a></span>)
            }
        </p>
        <button onClick={() => handleMarkAsRead(id,parseInt(reading_time))} className='w-full bg-indigo-600 py-2 text-white text-2xl my-4 rounded-lg'>Mark As Read</button>
    </div>
  )
}
export default Blog ;

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func,
    handleMarkAsRead : PropTypes.func,
}