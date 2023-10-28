import React from 'react'
import Post from './Post'


const posts = [
    {
        id: "123",
        username: "nature_nurture",
        userImg: "https://thumbs.dreamstime.com/b/beautiful-young-woman-elegant-dress-beach-sunset-walking-123422055.jpg",
        img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70",
        caption: "Nature Rocks"
    },
     {
        id: "123",
        username: "nature_nurture",
        userImg: "https://thumbs.dreamstime.com/b/beautiful-young-woman-elegant-dress-beach-sunset-walking-123422055.jpg",
        img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70",
        caption: "Nature Rocks"
    }
]
export default function Posts() {
  return (
      <div>
          {posts.map(post =>
              <Post key={post.id}
                    id={post.id}
                  username={post.username}
                  userImg={post.userImg}
                  img={post.img}
                  caption = {post.caption}
              />)}
          
    </div>
  )
}
