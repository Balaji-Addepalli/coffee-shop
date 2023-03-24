import classes from './Feature.module.css'
const Feature = (props) => {
  return (
    <div className={classes['feature']}>
        <div className={classes['feature-icon']} style={{background:props.backgroundColor}}>{props.children}</div>
        <div className={classes['feature-description']}>{props.description}</div>
    </div>
  )
}

export default Feature