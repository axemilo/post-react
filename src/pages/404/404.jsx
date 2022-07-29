import { Container, Header } from '../../components'
import Image from '../../assets/img/404.png'
import { Link } from 'react-router-dom'
import Style from './404.module.scss'
export const Error = () => {
  return (
    <Container>
      <Header />
      <div className={Style.container}>
        <img className={Style.img} src={Image} alt="404" />
        <h2 className={Style.title}> Page not found - 404</h2>
        <p className={Style.text}>
          This page not found (deleted or never exists). Try a phrase in search
          box or back to home and start again.
        </p>
        <Link className={Style.link} to="/">
          TAKE ME HOME!{' >'}
        </Link>
      </div>
    </Container>
  )
}
