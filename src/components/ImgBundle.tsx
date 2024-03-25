import Styles from "@/app/global.module.css";
import Image from "next/image";
import { relative } from "path";

function ImgBundle() {
  const mask = {
    borderTopLeftRadius: "0rem",
    borderTopRightRadius: "0rem",
    opacity: "0.7",
    // background: "linear-gradient( black, transparent)",
  };
  return (
    <div className={Styles.imgBoxfooter} style={{ marginTop: "-8rem" }}>
      <div className={Styles.cmnDiv}>
        <Image
          src="/imgs/im1.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles["fimg"]}
          style={mask}
        />
        <Image
          src="/imgs/im2.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv} style={{ marginTop: "8rem" }}>
        <Image
          src="/imgs/im3.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im4.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv} style={{ marginTop: "16rem" }}>
        <Image
          src="/imgs/im5.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im6.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv} style={{ marginTop: "24rem" }}>
        <Image
          src="/imgs/im7.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im8.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv} style={{ marginTop: "16rem" }}>
        {" "}
        <Image
          src="/imgs/im9.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im10.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv} style={{ marginTop: "8rem" }}>
        {" "}
        <Image
          src="/imgs/im11.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im12.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
      <div className={Styles.cmnDiv}>
        {" "}
        <Image
          src="/imgs/im13.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
          style={mask}
        />
        <Image
          src="/imgs/im14.jpg"
          alt="goa"
          width={170}
          height={350}
          className={Styles.fimg}
        />
      </div>
    </div>
  );
}

export default ImgBundle;
