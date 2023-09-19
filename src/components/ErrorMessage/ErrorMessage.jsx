import UiVideo from "../../components/UI/UiVideo/UiVideo";
import video from "./video/han-solo.mp4";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the forcehas won.<br></br>
        We cannot display data.<br></br>
        Come back when we fix everything.
      </p>
      <UiVideo src={video} classes={styles.video} playbackRate={1.0}></UiVideo>
    </>
  );
};

export default ErrorMessage;
