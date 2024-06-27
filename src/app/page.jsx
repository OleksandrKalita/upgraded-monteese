import Image from "next/image";
import styles from "./page.module.css";
import HomeSection from "@/sections/HomeSection/HomeSection";
import VideoSection from "@/sections/VideoSection/VideoSection";
import PropertySection from "@/sections/PropertySection/PropertySection";
import StatisticSection from "@/sections/StatisticSection/StatisticSection";
import SolutionsSection from "@/sections/SolutionsSection/SolutionsSection";
import CirclesAnimationSection from "@/sections/CirclesAnimationSection/CirclesAnimationSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSection/>
      <VideoSection/>
      <PropertySection/>
      <StatisticSection/>
      <SolutionsSection/>
      {/* <div className={styles.box}></div> */}
      <CirclesAnimationSection/>
    </main>
  );
}
