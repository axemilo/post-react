import Container from '../Container'
import Style from './Header.module.scss'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/img/logo.png'
import SearchInput from '../../assets/img/search-icon.svg'
import { menu } from './menu'

import { useSelector, useDispatch } from 'react-redux'
import { postsAction } from '../../store/reducers'

export const Header = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  const handleSearch = (evt) => {
    const searchText = evt.target.value.trim()
    console.log(posts)
    dispatch(postsAction.searchPosts(searchText))
  }
  return (
    <Container>
      <div className={Style['header-container']}>
        <Link to="/">
          <img className={Style.image} src={logoImage} alt="logoImage" />
        </Link>
        <ul className={Style.navbar}>
          {menu.map((item, idx) => {
            return (
              <li key={idx} className={Style.item}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <div className={Style.searchBox}>
          <input
            className={Style.input}
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <button className={Style['input-btn']}>
            <img
              className={Style['input-icon']}
              src={SearchInput}
              alt="search input"
            />
          </button>
        </div>
      </div>
    </Container>
  )
}
