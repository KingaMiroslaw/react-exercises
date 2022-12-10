import Form from "../../components/Form/Form";
import classes from "./FormPage.module.css";
import HomeLink from "../../components/HomeLink/HomeLink";

const FormPage = () => {
  return (
    <main className={classes["form-page"]}>
      <HomeLink />
      <Form />
    </main>
  );
};

export default FormPage;
