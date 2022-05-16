import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../componrnt/SingleContent/SingleContent"
import CustomPagination from "../componrnt/Pagination/CustomPagination"
import './Products.css'

const Products = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchProducts();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <center><span className="pageTitle"><h2>Trending Today</h2></span></center>
      <div className="products">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Products;
