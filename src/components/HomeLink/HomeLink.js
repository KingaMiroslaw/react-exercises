import classes from "./HomeLink.module.css"
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const HomeLink = () => {
  return (
    <div>
      <Link to="/" className={classes.link}>
        <AiOutlineHome className={classes.icon} />
      </Link>
    </div>
  );
};

export default HomeLink;