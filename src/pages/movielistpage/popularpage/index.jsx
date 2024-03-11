import { useEffect, useState } from "react";
import PopularList from "../../../components/listcomponents/popularlist";


export default function PopularPage() {
  const [populars, setPopulars] = useState([]);

  const getPopulars = () => {
    const url = new URL('https://api.themoviedb.org/3/movie/popular?api_key=4cdd27d61807ef78f598745398271c67');

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPopulars(data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }

useEffect(getPopulars, []);

  return (
    <>
      <div className="flex flex-wrap -mx-4">

        {populars.map((popular) => <PopularList key={popular.id} id={popular.id} title={popular.title} overview={popular.overview} poster_path={popular.poster_path} />)
        }
      </div>

    </>
  );
}
