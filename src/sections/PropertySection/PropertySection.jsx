import styles from "./property.module.scss";
import Image from "next/image";

import {motion, useInView} from "framer-motion";

import youtubeIcon from "../../../public/images/icons/soc_icons/youtube_icon.svg";
import instagramIcon from "../../../public/images/icons/soc_icons/instagram_icon.svg";
import tiktokIcon from "../../../public/images/icons/soc_icons/tiktok_icon.svg";
import ContentBlock from "../../components/PropertyComponents/ContentBlock/ContentBlock";


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
                    <div className={styles.prop_button}>All Properties</div>
                    <div className={styles.social_block}>
                        <div className={styles.social__text}>Don&apos;t Miss Out on Hot Deals!<br/> Follow Us on Social Media</div>
                        <nav className={styles.social__links}>
                            <button className={styles.link_button}>
                                <Image src={youtubeIcon} alt="" className={styles.button__icon}/>
                            </button>
                            <button className={styles.link_button}>
                                <Image src={instagramIcon} alt="" className={styles.button__icon}/>
                            </button>
                            <button className={styles.link_button}>
                                <Image src={tiktokIcon} alt="" className={styles.button__icon}/>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}