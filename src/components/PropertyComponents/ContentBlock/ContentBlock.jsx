import InfoBlock from "../InfoBlock/InfoBlock";
import styles from "./content.module.scss";

export default function ContentBlock() {
    return (
        <div className={styles.content_block}>
            <div className={styles.content}>
                <InfoBlock/>
                <InfoBlock/>
            </div>
            <div className={styles.content}>
                <InfoBlock/>
                <InfoBlock/>
            </div>
            <div className={styles.content}>
                <InfoBlock/>
                <InfoBlock/>
            </div>
        </div>
    );
}