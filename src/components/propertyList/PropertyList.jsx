import "./propertyList.css";
import useFetch from "../../hook/fetchApi";
import { BASE_URL } from "../../utils/const";

const PropertyList = () => {
    const data = useFetch(`${BASE_URL}/hotels/hotel-count-by-type`);

    return (
        <div className="pList">
            {data.map((item, index) => {
                return (
                    <div key={index} className="pListItem">
                        <img src={item.imgUrl} alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>{item.type}</h1>
                            <h2>
                                {item.amount} {item.type.toLowerCase()}
                            </h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PropertyList;
