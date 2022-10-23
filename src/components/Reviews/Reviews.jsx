import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { useParams } from 'react-router-dom';
import {
  ReviewItem,
  ReviewInfoHeader,
  ReviewInfo,
} from 'components/Reviews/Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [isReviewInfoLoaded, setIsReviewInfoLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviewInfo(movieId) {
      try {
        const reviewResponse = await API.getMovieReviews(movieId);
        setReviewInfo(reviewResponse);
        setIsReviewInfoLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadReviewInfo(movieId);
  }, [movieId]);
  if (reviewInfo.length === 0 && isReviewInfoLoaded) {
    return <ReviewInfoHeader>No reviews for this movie</ReviewInfoHeader>;
  }
  return (
    <ul>
      {reviewInfo.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id}>
            <ReviewInfoHeader>Author: {author}</ReviewInfoHeader>

            <ReviewInfo>{content}</ReviewInfo>
          </ReviewItem>
        );
      })}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviewInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
