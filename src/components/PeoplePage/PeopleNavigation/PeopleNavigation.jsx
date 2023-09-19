import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiButton from "../../UI/UiButton/UiButton";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, countPage }) => {
  const handleChangePrev = () => getResource(prevPage);
  const handleChangeNext = () => getResource(nextPage);
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${countPage - 1}`} className={styles.buttons}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        ></UiButton>
      </Link>
      <Link to={`/people/?page=${countPage + 1}`} className={styles.buttons}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        ></UiButton>
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  countPage: PropTypes.number,
};

export default PeopleNavigation;
