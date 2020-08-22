import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './components/Details';
import { getComicById } from '../../context/actions';
import { useStateValue } from '../../context';


const Comics = () => {

  const { id } = useParams();
  const [state, dispatch] = useStateValue();

  console.log(id, state, 'index');

  useEffect(() => {
    getComicById(id, dispatch);
    // eslint-disable-next-line
  }, [])


  return (
    <>
      {state.comic && state.comic.map((c, key) => (
        <Details data={c} key={key} />
      ))}
    </>
  )

}

export default Comics;
