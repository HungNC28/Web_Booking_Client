import "./featured.css";
import useFetch from "../../hook/fetchApi";

const Featured = () => {
    const data = useFetch(
        "http://localhost:5000/api/hotels/hotel-count-by-city"
    );

    return (
        <div className="featured">
            {data.map((item, index) => {
                return (
                    <div key={index} className="featuredItem">
                        <img
                            src={"/images/" + item.imgUrl}
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
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
