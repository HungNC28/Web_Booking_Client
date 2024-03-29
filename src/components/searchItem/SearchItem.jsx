import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = ({
  id,
  name,
  distance,
  tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text,
  img_url,
}) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate(`/hotels/${id}`);
  };
  return (
    <div className="searchItem">
      <img src={img_url} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{distance}m from center</span>
        <span className="siTaxiOp">{tag}</span>
        <span className="siSubtitle">{description}</span>
        <span className="siFeatures">{type}</span>
        {/* If can cancel */}
        {free_cancel ? (
          <div>
            <div className="siCancelOp">Free cancellation </div>
            <div className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rate_text}</span>
          <button>{rate}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={clickHandle}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
