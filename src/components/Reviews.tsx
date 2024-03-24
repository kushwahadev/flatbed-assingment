import Styles from "@/app/global.module.css";
import Image from "next/image";
import data from "@/data/people.json";
function Reviews() {
  return (
    <div className={Styles.reviews}>
      <h2 className={Styles.headingReview}>
        Here what others has to say about us!
      </h2>
      <div className={Styles.uperbox}>
        {data.tweet.map((revieu) => (
          <div className={Styles.mainBox}>
            <div className={Styles.logoBox}>
              {/* logo */}
              <Image
                src={revieu.profilepic}
                alt="profile pic"
                width={45}
                height={45}
              />

              <div className={Styles.logoInnerBox}>
                {/* name  */}
                <h6 className={Styles.info}>{revieu.name}</h6>
                {/* date */}
                <h6 className={Styles.info}>{revieu.date}</h6>
                {/* star rating*/}
                <Image
                  src={revieu.rating}
                  alt="rating"
                  width={90}
                  height={15}
                />
              </div>
            </div>

            {/* description  */}
            <p className={Styles.reviewDescription}>{revieu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
