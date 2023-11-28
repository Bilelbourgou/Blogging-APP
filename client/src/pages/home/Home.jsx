import React, { useEffect, useState } from "react"
import  Card  from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Home = () => {
  const [posts, setPosts] = useState([])

  // setp 2 
  // const { search } = useLocation()
  // console.log(search)
  const location = useLocation()
  console.log(posts,'aaaaaaaaaaaaaaaa')

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:8080/posts`)
    setPosts(res.data)
    }
    fetchPost()
  }, [])
  return (
    <>
      <Category />
      <Card posts={posts} />
    </>
  )
}
