import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import placeholder from '../../images/cat-beauty-products.webp';

const ActorsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  width: 650px;
`;
const ActorCard = styled.li`
  width: 160px;
  text-align: center;
`;

const Cast = () => {
  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;

    const getCast = async () => {
      const response = await axios.get();
      try {
        setCast([...response.data.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <ActorsList>
      {cast.map(({ id, profile_path, name }) => {
        return (
          <ActorCard key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : placeholder
              }
              alt={`${name}`}
              width="100px"
            />
            <p>{name}</p>
          </ActorCard>
        );
      })}
    </ActorsList>
  );
};

export default Cast;
