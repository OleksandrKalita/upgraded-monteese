import ValueAnimation from "../ValueAnimation/ValueAnimation";
import styles from "./statistic.module.scss";

export default function StatisticBox() {

    return (
        <div className={styles.statistic__container}>
            <div className={styles.box}>
                <div className={styles.counter}><ValueAnimation symbol={"+"} startValue={0} endValue={100} duration={20}/></div>
                <div className={styles.box__title}>Successful<br/>Transactions Monthly</div>
            </div>

            <div className={styles.border_line}></div>

            <div className={styles.box}>
                <div className={styles.counter}><ValueAnimation symbol={"%"} startValue={0} endValue={98} duration={40} /></div>
                <div className={styles.box__title}>Customer<br/>Satisfaction Rate</div>
            </div>

            <div className={styles.border_line}></div>

            <div className={styles.box}>
                <div className={styles.counter}><ValueAnimation symbol={""} startValue={0} endValue={500} duration={10}/></div>
                <div className={styles.box__title}>Exquisite Properties<br/>Ready for Your Selection</div>
            </div>
        </div>
    );
}