import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { Container } from '../../components'
import Style from './login.module.scss'
import Axios from 'axios'
import { useRef } from 'react'
import { useDispatch } from 'react-redux/'
import { authAction } from '../../store/reducers'
export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    navigate('/')
    const request = () => {
      Axios.post('https://reqres.in/api/login', {
        email: usernameRef.current.value,
        password: passwordRef.current.value,
      })
        .then(function (response) {
          localStorage.setItem('token', JSON.stringify(response.data))
          dispatch(authAction.setState(localStorage.getItem('token')))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    request()
  }
  return (
    <Container>
      <Link className={Style.link} to="/">
        <img src={Logo} alt="logo icon" />
      </Link>
      <form onSubmit={handleSubmit} className={Style.form}>
        <h1 className={Style.title}>Login</h1>
        <input
          ref={usernameRef}
          className={Style.input}
          type="text"
          placeholder="Login"
        />
        <input
          ref={passwordRef}
          className={Style.input}
          type="password"
          placeholder="Password"
        />
        <button className={Style.button}>Submit</button>
      </form>
    </Container>
  )
}
