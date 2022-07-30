import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [readLess, setReadLess] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price} $</h4>
        </div>
        <p>
          {readLess ? `${info.substr(0, 200)}...` : info}
          <button onClick={() => setReadLess(!readLess)}>
            {readLess ? "read More" : "read Less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
