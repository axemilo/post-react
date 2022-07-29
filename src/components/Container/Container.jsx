import Style from './Container.module.scss'

export const Container = ({children}) => {
  return (
    <div  className={Style.container}>{children}</div>
  )
}