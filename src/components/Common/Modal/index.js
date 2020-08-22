import React from 'react';
import ReactDOM from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalWrapper, CloseButton, ModalCard, ModalHeader, ModalBody, Background, IconImage } from '../../../styles'
import PropTypes from 'prop-types';

const Modal = ({ isOpen, toggle, children }) => isOpen && ReactDOM.createPortal(
  <React.Fragment>
    <ModalWrapper>
      <ModalCard>
        <ModalHeader>
          <h3>Character Details</h3>
          <CloseButton type="button" onClick={toggle}>
            <IconImage icon={faTimes} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalCard>
      <Background onClick={toggle} />
    </ModalWrapper>
  </React.Fragment>, document.body
)

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
