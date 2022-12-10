import Counter from "../../components/Counter/Counter";
import classes from "./CounterPage.module.css";
import HomeLink from "../../components/HomeLink/HomeLink";

const CounterPage = () => {
  return (
    <main className={classes["counter-page"]}>
      <HomeLink />
      <Counter />
    </main>
  );
};

export default CounterPage;
