import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return <div>
    <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
    <p>This movie was rated {movieRating} stars</p>
  </div>
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} message={["Terrible", "Bad", "Ok", "Good", "Amazing"]} />
    <StarRating maxRating={5} color="pink" size={60} className="text" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
