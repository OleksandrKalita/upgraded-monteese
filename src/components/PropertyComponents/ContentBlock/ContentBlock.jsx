import InfoBlock from "../InfoBlock/InfoBlock";
import styles from "./content.module.scss";

import bgImage1 from "../../../../public/images/backgrounds/dubai_bg_1.jpg";
import bgImage2 from "../../../../public/images/backgrounds/dubai_bg_2.jpg";
import bgImage3 from "../../../../public/images/backgrounds/dubai_bg_3.jpg";
import bgImage4 from "../../../../public/images/backgrounds/dubai_bg_4.jpg";
import mapBGImage from "../../../../public/images/backgrounds/map_image_bg.jpg";

export default function ContentBlock() {
    // const info = [
    //     {
    //         id: 1,
    //         imageUrl: image1
    //     },
    // ]
    return (
        <div className={styles.content_block}>
            <div className={styles.content}>
                <InfoBlock bgImage={bgImage1} mapIncluded={false}/>
                <InfoBlock bgImage={bgImage2} mapIncluded={false}/>
            </div>
            <div className={styles.content}>
                <InfoBlock bgImage={bgImage3} mapIncluded={false}/>
                <InfoBlock bgImage={bgImage4} mapIncluded={false}/>
            </div>
            <div className={styles.content}>
                <InfoBlock bgImage={bgImage1} mapIncluded={false}/>
                <InfoBlock bgImage={mapBGImage} mapIncluded={true}/>
            </div>
        </div>
    );
}