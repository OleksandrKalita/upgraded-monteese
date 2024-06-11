import styles from "./property.module.scss";
import Image from "next/image";

import youtubeIcon from "../../../public/images/icons/soc_icons/youtube_icon.svg";
import instagramIcon from "../../../public/images/icons/soc_icons/instagram_icon.svg";
import tiktokIcon from "../../../public/images/icons/soc_icons/tiktok_icon.svg";
import ContentBlock from "@/components/PropertyComponents/ContentBlock/ContentBlock";

export default function PropertySection() {
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.head_block}>
                    <h1 className={styles.headline}>Explore Our Property Portfolio</h1>
                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li className={`${styles.menu__item} ${styles.selected}`}>
                                <span className={styles.item__text}>Apartments</span>
                            </li>
                            <li className={styles.menu__item}>
                                <span className={styles.item__text}>Villas</span>
                                </li>
                            <li className={styles.menu__item}>
                                <span className={styles.item__text}>For Rent</span>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* main component */}
                <ContentBlock/>

                <div className={styles.footer_block}>
                    <button className={styles.property_button}>
                        <span className={styles.button__text}>All Properties</span>
                    </button>
                    <div className={styles.social_block}>
                        <div className={styles.social__text}>Don't Miss Out on Hot Deals!<br/> Follow Us on Social Media</div>
                        <nav className={styles.social__links}>
                            <button className={styles.link_button}>
                                <Image src={youtubeIcon} className={styles.button__icon}/>
                            </button>
                            <button className={styles.link_button}>
                                <Image src={instagramIcon} className={styles.button__icon}/>
                            </button>
                            <button className={styles.link_button}>
                                <Image src={tiktokIcon} className={styles.button__icon}/>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}