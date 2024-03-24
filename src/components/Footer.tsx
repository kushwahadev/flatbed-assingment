import Styles from "@/app/global.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className={Styles.footerhead}>
      <div className={Styles.footerBoxOne}>
        <h6 className={Styles.footerHeadOne}>Need help? Contact us</h6>
        <p className={Styles.footerHead2}>
          Feel free to contact us in case you have any queries
        </p>
        <button className={Styles.footerbtn}>CONTACT US</button>
      </div>
    </div>
  );
}

export default Footer;
