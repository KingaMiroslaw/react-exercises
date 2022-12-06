import Counter from "../../components/Counter/Counter";
import classes from "./CounterPage.module.css";

const CounterPage = () => {
  return (
    <main className={classes["counter-page"]}>
      <Counter />
    </main>
  );
};

export default CounterPage;
