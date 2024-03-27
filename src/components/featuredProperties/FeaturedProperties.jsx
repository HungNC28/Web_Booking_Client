import "./featuredProperties.css";
import useFetch from "../../hook/fetchApi";
import { BASE_URL } from "../../utils/const";

const FeaturedProperties = () => {
    const data = useFetch(`${BASE_URL}/hotels/top-rating`);
    return (
        <div className="fp">
            {data.map((item, index) => {
                return (
                    <div key={index} className="fpItem">
                        <img src={item.photos[0]} alt="" className="fpImg" />
                        <span className="fpName">
                            <a href={`./hotels/${item._id}`} target="_blank">
                                {item.name}
                            </a>
                        </span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">
                            Starting from ${item.cheapestPrice}
                        </span>
                        <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FeaturedProperties;
