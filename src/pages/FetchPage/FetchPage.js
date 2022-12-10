import { useEffect, useState } from "react";
import Card from "../../components/UI/Card/Card";
import classes from "./FetchPage.module.css";
import HomeLink from "../../components/HomeLink/HomeLink";

const FetchPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUSAData = () => {
    console.log("start fetching");
    setLoading(true);

    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("successfull fetch", response);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error fetch", error);
      })
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });
  };

  useEffect(() => {
    getUSAData();
  }, []);

  return (
    <main className={classes["fetch-page"]}>
      <HomeLink />
      <Card>
        <header className={classes.header}>
          <h1>US population 2013-2020</h1>
        </header>
        {loading ? <div className={classes.loader}>Loading...</div> : null}
        <ul className={classes.list}>
          {data.map((item, index) => (
            <li className={classes["list-items"]} key={index}>
              {item.Year} - {item.Population}
            </li>
          ))}
        </ul>

        <div className={classes.button}>
          <button className={classes["btn-refresh"]} onClick={getUSAData}>
            Refresh
          </button>
        </div>
      </Card>
    </main>
  );
};

export default FetchPage;
