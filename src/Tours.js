import React from "react";
import Tour from "./Tour";
const Tours = ({ dataInfo, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {dataInfo.map((tour) => (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
