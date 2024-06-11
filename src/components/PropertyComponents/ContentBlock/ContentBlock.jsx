import InfoBlock from "../InfoBlock/InfoBlock";
import styles from "./content.module.scss";

import image1 from "../../../../public/images/backgrounds/dubai_bg.jpg";
// import image2 from "../../../../public/images/backgrounds/dubai_bg.jpg";
// import image3 from "../../../../public/images/backgrounds/dubai_bg.jpg";
// import image4 from "../../../../public/images/backgrounds/dubai_bg.jpg";
// import image5 from "../../../../public/images/backgrounds/dubai_bg.jpg";
import image6 from "../../../../public/images/backgrounds/map_image_bg.jpg";

export default function ContentBlock() {
    const info = [
        {
            id: 1,
            imageUrl: image1
        },
    ]
    return (
        <div className={styles.content_block}>
            <div className={styles.content}>
                <InfoBlock bgImage={image1} mapIncluded={false}/>
                <InfoBlock bgImage={image1} mapIncluded={false}/>
            </div>
            <div className={styles.content}>
                <InfoBlock bgImage={image1} mapIncluded={false}/>
                <InfoBlock bgImage={image1} mapIncluded={false}/>
            </div>
            <div className={styles.content}>
                <InfoBlock bgImage={image1} mapIncluded={false}/>
                <InfoBlock bgImage={image6} mapIncluded={true}/>
            </div>
        </div>
    );
}