import Image from "next/image";
import styles from "./page.module.css";
import HomeSection from "@/sections/HomeSection/HomeSection";
import VideoSection from "@/sections/VideoSection/VideoSection";
import PropertySection from "@/sections/PropertySection/PropertySection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSection/>
      <VideoSection/>
      <PropertySection/>
      {/* <HomeSection/> */}
    </main>
  );
}
