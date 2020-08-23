import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';
import { getComicById } from '../../../context/actions';
import { useStateValue } from '../../../context';
import { LoadingBox, Container } from '../../../styles';
import ComicDetails from './components/ComicDetails';

const Comics = () => {

  const { id, } = useParams();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (!state.comic) {
      getComicById(id, dispatch);
    }
    // eslint-disable-next-line
  }, [id]);

  const isEmpty = Object.entries(state.comic).length === 0;

  if (isEmpty) {
    return (
      <Container>
        <LoadingBox>
          <SpinnerCircularFixed
            size={100}
            thickness={100}
            speed={100}
            color='rgba(236, 29, 36, 1)'
            secondaryColor='rgba(204, 204, 204, 1)'
          />
        </LoadingBox>
      </Container>
    );
  };

  return (
    <Container>
      {state.comic && state.comic.map((comic, key) => (
        <ComicDetails data={comic} key={key} />
      ))}
    </Container>
  );

};

export default Comics;
