import classes from "../Card/Card.module.css"

const Card = (props) => {
    return <div className={classes.container}>{props.children}</div>
}

export default Card;