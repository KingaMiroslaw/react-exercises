import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={classes["home-page"]}>
      <h1 className={classes["main-header"]}>React Exercises </h1>
      <div className={classes.container}>
        <div className={classes["container-item"]}>
          <h1 className={classes.header}>Counter</h1>
          <p className={classes.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            officiis ipsum velit, labore quod voluptas! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Minima, commodi.
          </p>
          <div className={classes.buttons}>
            <button
              onClick={() => navigate("/counter")}
              className={classes["btn-info"]}
            >
              Find more
            </button>
          </div>
        </div>
        <div className={classes["container-item"]}>
          <h1 className={classes.header}>Form</h1>
          <p className={classes.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            officiis ipsum velit, labore quod voluptas!
          </p>
          <div className={classes.buttons}>
            <button
              className={classes["btn-info"]}
              onClick={() => navigate("/form")}
            >
              Find more
            </button>
          </div>
        </div>
        <div className={classes["container-item"]}>
          <h1 className={classes.header}>Fetch</h1>
          <p className={classes.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            officiis ipsum velit, labore quod voluptas! Lorem ipsum dolor sit
            amet.
          </p>
          <div className={classes.buttons}>
            <button
              className={classes["btn-info"]}
              onClick={() => navigate("/fetch")}
            >
              Find more
            </button>
          </div>
        </div>
        <div className={classes["container-item"]}>
          <h1 className={classes.header}>RTX Query</h1>
          <p className={classes.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            officiis ipsum velit, labore quod voluptas! Lorem ipsum dolor sit
            amet.
          </p>
          <div className={classes.buttons}>
            <button
              className={classes["btn-info"]}
              onClick={() => navigate("/rtk")}
            >
              Find more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;