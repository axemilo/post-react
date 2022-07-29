import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo(footer).png'
import Background from '../../assets/img/footer-bg.png'
import Container from '../Container'
import Style from './Footer.module.scss'
import { social, app } from './menu'
export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Container>
        <img className={Style.background} src={Background} alt="bgc-img" />
        <div className={Style.container}>
          <Link className={Style.logo} to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className={Style.social}>
            <h3 className={Style['social-item']}>FIGHT WITH ME ON:</h3>
            {social.map((item, idx) => {
              return (
                <li key={'Social-' + idx} className={Style['social-item']}>
                  <a
                    className={Style[item.class]}
                    href={item.path}
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className={Style.app}>
            <h3 className={Style['app-item']}>WHAT I HAVE DONE:</h3>
            {app.map((item, idx) => {
              return (
                <li key={'App-' + idx} className={Style['app-item']}>
                  {item.title}
                </li>
              )
            })}
          </ul>
          <ul className={Style.contacts}>
            <li className={Style['contacts-item']}>Contact</li>
            <li className={Style['contacts-item']}>Blog</li>
            <li className={Style['contacts-item']}>Dribble</li>
            <li className={Style['contacts-item']}>Behance</li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
