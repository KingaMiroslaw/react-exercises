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
            A simple counting app with added functionality consisting in
            indicating the exact number by which we want to increase or reduce
            the current score. It was created using <b> Redux Toolkit</b>,{" "}
            <b> React Hook Form </b> and
            <b> useState</b>. <b>React Router</b> and <b>React Icons</b> were
            also used.
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
            An extensive form that was created to practice the possibilities
            offered by <b>React Hook Form</b> with the use of <b>date-fns</b>.
            <b> React Router</b> and <b>React Icons</b> were also used.
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
          <h1 className={classes.header}>Fetch API</h1>
          <p className={classes.info}>
            A very simple application to practice fetching basic data from API
            using <b>Fetch API </b>along with <b>useState</b> and
            <b> useEffect</b> and display data on the page. <b>React Router </b>
            and
            <b> React Icons</b> were also used.
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
          <h1 className={classes.header}>RTK Query</h1>
          <p className={classes.info}>
            A very simple application to practice fetching basic data from API
            using <b>RTK Query </b> and display data on the page.
            <b> React Router </b>
            and
            <b> React Icons</b> were also used.
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
