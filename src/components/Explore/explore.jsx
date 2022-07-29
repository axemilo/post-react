import { Facebook, Github, Twitter, LinkedIn } from '../../assets/img/social'
import Style from './explore.module.scss'
export const Explore = () => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>What I do!</h2>
      <p className={Style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
        augue erat ac eros. Cras ultricies mattis convallis.
      </p>

      <p className={Style.link}>
        Explore Me <span className={Style['link-span']}>{'>'}</span>
      </p>
      <ul>
        <li className={Style.item}>
          <img src={Facebook} alt="facebook" />
        </li>
        <li className={Style.item}>
          <img src={Github} alt="github" />
        </li>
        <li className={Style.item}>
          <img src={Twitter} alt="twitte" />
        </li>
        <li className={Style.item}>
          <img src={LinkedIn} alt="linkedIn" />
        </li>
      </ul>
    </div>
  )
}
