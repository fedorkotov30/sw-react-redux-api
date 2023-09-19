import { useState } from "react";
import { useSelector } from "react-redux";

import PeopleList from "../../components/PeoplePage/PeopleList";
import { useEffect } from "react";

// import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector((state) => {
    console.log(state);
    return state;
  });

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeople(res);
    }
  }, [storeData]);

  return (
    <>
      <h1 className="header__text">Favorites Page</h1>
      {people.length ? (
        <PeopleList people={people}></PeopleList>
      ) : (
        <h2 className={StyleSheet.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritesPage;
