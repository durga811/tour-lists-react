import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloding] = useState(true);
  const [dataInfo, setDataInfo] = useState([]);
  useEffect(dataFetch, []);
  async function dataFetch() {
    try {
      setloding(true);
      const fetchData = await fetch(url);
      const dataInfos = await fetchData.json();
      setloding(false);
      setDataInfo(dataInfos);
      console.log(dataInfos);
    } catch (error) {
      setloding(false);
      console.log(error);
    }
  }
  const deleteTour = (id) => {
    const newTours = dataInfo.filter((tour) => tour.id !== id);
    setDataInfo(newTours);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      {dataInfo.length === 0 ? (
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={dataFetch}>
            refresh
          </button>
        </div>
      ) : (
        <Tours dataInfo={dataInfo} deleteTour={deleteTour} />
      )}
    </main>
  );
}

export default App;
