import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RatingContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function RatingProvider({ children }) {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <RatingContext.Provider
      value={{ rating, setRating, submitted, setSubmitted }}
    >
      {children}
    </RatingContext.Provider>
  );
}
