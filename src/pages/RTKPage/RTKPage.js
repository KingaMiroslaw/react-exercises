import { useGetAllYearsQuery } from "../../API/PopulationAPI/PopulationAPI";
import Card from "../../components/UI/Card/Card";
import classes from "./RTKPage.module.css";
import HomeLink from "../../components/HomeLink/HomeLink";

const RTKPage = () => {
  const { array, isFetching, refetch } = useGetAllYearsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      array: data ? data.data : [],
      data,
      ...rest,
    }),
  });

  return (
    <main className={classes["rtk-page"]}>
      <HomeLink />
      <Card>
        <header className={classes.header}>
          <h1>US population 2013-2020</h1>
        </header>
        {isFetching ? <div className={classes.loader}>Loading...</div> : null}
        <ul className={classes.list}>
          {array.map((item, index) => (
            <li className={classes["list-items"]} key={index}>
              {item.Year} - {item.Population}
            </li>
          ))}
        </ul>

        <div className={classes.button}>
          <button className={classes["btn-refresh"]} onClick={refetch}>
            Refresh
          </button>
        </div>
      </Card>
    </main>
  );
};

export default RTKPage;
