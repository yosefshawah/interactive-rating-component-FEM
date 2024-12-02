import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

const LandingCard = () => {
  const { rating, setRating, setSubmitted } = useContext(RatingContext);

  const ratings = [1, 2, 3, 4, 5];

  // Disable the submit button if no rating is selected
  const isSubmitDisabled = rating === null;

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <main className="wrapper">
      <img src="/images/icon-star.svg" alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol className="row">
        {ratings.map((value) => (
          <li
            className={rating === value ? "selected" : ""}
            key={value}
            onClick={() => setRating(value)}
          >
            {value}
          </li>
        ))}
      </ol>
      <button
        onClick={handleSubmit}
        className="submit"
        disabled={isSubmitDisabled} // Disable if no rating is selected
      >
        SUBMIT
      </button>
    </main>
  );
};

export default LandingCard;
