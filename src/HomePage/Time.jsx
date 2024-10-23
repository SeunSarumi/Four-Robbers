import { Link } from "react-router-dom";
import styles from "./Time.module.css";

function Time() {
  return (
    <div className={styles.time}>
      <h2>What&apos;s On</h2>
      <div className={styles.timeContainer}>
        <div className={styles.contained}>
          <h3>21st | December</h3>
          <div className={styles.border}></div>
          <h4>AGIP RECITAL HALL</h4>
          <h3>ONCE UPON FOUR ROBBERS</h3>
          <div className={styles.timeBox}>
            <p>7:30pm</p>
            <Link className={styles.buyNowBtn} to="/buynow">
              Buy Tickets
            </Link>
          </div>
        </div>
        {/*  */}
        <div className={styles.contained}>
          <h3>22nd | December</h3>
          <div className={styles.border}></div>
          <h4>AGIP RECITAL HALL</h4>
          <h3>ONCE UPON FOUR ROBBERS</h3>
          <div className={styles.timeBox}>
            <p>7:30pm</p>
            <Link className={styles.buyNowBtn} to="/buynow">
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
