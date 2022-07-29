import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import clockIcon from '../../assets/img/post-clock_item.svg'
import { Pagination } from './Pagination'
import Container from '../Container'
import Style from './Posts.module.scss'
import { postsAction } from '../../store/reducers'
import Explore from '../Explore'
import { Routes, Route, Link, Switch } from 'react-router-dom'
export const Posts = () => {
  const POST_NUM = 20

  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state.posts.posts)
  const posts = allPosts.slice(0, POST_NUM)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => dispatch(postsAction.setPosts(data)))
      .catch((err) => console.error(err))
  }, [dispatch])

  return (
    <Container>
      <div className={Style['post-container']}>
        <Explore />
        <div>
          <h2 className={Style.title}>Recent Posts</h2>
          <ul className={Style.list}>
            {posts.map((item, idx) => {
              return (
                <li className={Style.item} key={idx}>
                  <div className={Style['item-date']}>
                    <p>September 24.2020</p>
                    <p>Design Theory</p>
                  </div>
                  <Link to={'/post/' + idx} className={Style['item-title']}>
                    {item.title}
                  </Link>
                  <Routes>
                    <Route path={'/post/' + idx} element={<>{item.title}</>} />
                  </Routes>

                  <div className={Style['item-time']}>
                    <img src={clockIcon} alt="icon clock" />
                    <p className={Style['item-time__title']}>3 minutes read</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className={Style.pagination}>
            <button className={Style['page-btn']}>{'<'}</button>
            <ul>
              <Pagination />
            </ul>
            <button className={Style['page-btn']}>{'>'}</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
