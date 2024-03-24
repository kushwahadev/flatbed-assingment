import Styles from "@/app/global.module.css";
import Image from "next/image";
function Header() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Rewards and Offers just for you</h1>
      <div className={Styles.imgBox}>
        <Image
          src="/imgs/refer.png"
          alt="logo"
          width={500}
          height={250}
          className={Styles.img1}
        />
        <Image
          src="/imgs/refer2.png"
          alt="logo"
          width={500}
          height={250}
          className={Styles.img2}
        />
      </div>
    </div>
  );
}

export default Header;
