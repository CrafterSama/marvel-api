import React from 'react'
import Modal from '../../Common/Modal'
import CharacterComicsInfo from './CharacterComicsInfo'

const CharacterModal = ({ isOpen, toggle, data }) => {
  return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <CharacterComicsInfo data={data} toggle={toggle} />
      </Modal>
  )
}

export default CharacterModal
