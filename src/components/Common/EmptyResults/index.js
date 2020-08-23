import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, ErrorBox } from '../../../styles'

const EmptyResults = () => {
  return (
    <Container>
      <ErrorBox>
        No Results <FontAwesomeIcon icon={faTimes} />, Please Search Again!
      </ErrorBox>
    </Container>
  )
}

export default EmptyResults
