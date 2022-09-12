import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from './styledReviwes';

const Reviwes = () => {
  const [reviwes, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=09c85c81493fa6062c48f1c67aec4f00&language=en-US&page=1`;

    const getReviwes = async () => {
      const response = await axios.get();
      try {
        setReviews([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getReviwes();
  }, [id]);

  return (
    <>
      {reviwes.map(reviwe => {
        return (
          <Comment key={reviwe.id}>
            <h3>{reviwe.author}</h3>
            <p>{reviwe.content}</p>
          </Comment>
        );
      })}
    </>
  );
};

export default Reviwes;
