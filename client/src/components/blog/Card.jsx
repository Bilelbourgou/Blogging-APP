import React from "react"
import "./blog.css"
import  blog  from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

  const Card = (props) => {
  // create file 
  console.log(typeof props.posts,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {   props.posts && props.posts.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>{item.photo && <img src={PublicFlo + item.photo} alt='' />}</div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.categories.map((c) => (
                    <a href='/'>#{c.name}</a>
                  ))}
                </div>
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date(item.createdAt).toDateString()}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Card