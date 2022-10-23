import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { useParams } from 'react-router-dom';
import {
  CastImg,
  CastList,
  CastItem,
  CastInfoHeader,
  CastInfo,
  CastWrapper,
} from 'components/Cast/Cast.styled';
import PropTypes from 'prop-types';

const Cast = id => {
  const [castInfo, setCastInfo] = useState([]);
  const [isCastInfoLoaded, setIsCastInfoLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCastInfo(movieId) {
      try {
        const castResponse = await API.getMovieCast(movieId);
        setCastInfo(castResponse);
        setIsCastInfoLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadCastInfo(movieId);
  }, [movieId]);

  if (castInfo.length === 0 && isCastInfoLoaded) {
    return <CastInfoHeader>No cast information for this movie</CastInfoHeader>;
  }
  return (
    <CastList>
      {castInfo.map(({ id, profile_path, name, character }) => {
        return (
          <CastItem key={id}>
            {profile_path ? (
              <CastImg
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
            ) : (
              <CastImg
                src={`https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`}
                alt={name}
              />
            )}
            <CastWrapper>
              <CastInfoHeader>{name}</CastInfoHeader>
              <CastInfoHeader>
                Character:
                <CastInfo>{character}</CastInfo>
              </CastInfoHeader>
            </CastWrapper>
          </CastItem>
        );
      })}
    </CastList>
  );
};
export default Cast;

Cast.propTypes = {
  castInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
