import React from 'react';
import { createPortal } from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalWrapper, CloseButton, ModalCard, ModalHeader, ModalBody, Background, IconImage } from '../../../styles'
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  return createPortal(children, modalRoot);
};

const Modal = ({ children, toggle, open }) => (
  <Portal>
    {open && (
    <ModalWrapper>
      <ModalCard>
        <ModalHeader>
          <h3>Comic Info</h3>
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
    )}
  </Portal>
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
