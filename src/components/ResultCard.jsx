import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

const ResultCard = () => {
  const { rating } = useContext(RatingContext);
  return (
    <div className="wrapper-thank-you">
      <img src="images/illustration-thank-you.svg" alt="" />
      <span>you selected {rating} out of 5</span>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ResultCard;
