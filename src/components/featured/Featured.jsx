// import "./featured.css";
import useFetch from "../../hook/fetchApi";
import { BASE_URL } from "../../utils/const";
import styles from "./featured.module.css";
const Featured = () => {
    const data = useFetch(`${BASE_URL}/hotels/hotel-count-by-city`);

    return (
        <div className={`${styles["featured"]}`}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.featuredItem}>
                        <img
                            src={"/images/" + item.imgUrl}
                            alt=""
                            className={styles.featuredImg}
                        />
                        <div className={styles.featuredTitles}>
                            <h1>{item.city}</h1>
                            <h2>{item.amount} properties</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Featured;
