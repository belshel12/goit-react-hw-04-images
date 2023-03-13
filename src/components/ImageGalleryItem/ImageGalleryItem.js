import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

const ImageGalleryItem = ({ largeUrl, webUrl, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <GalleryItem>
      <Image src={webUrl} alt={alt} onClick={toggleModal} />
      {showModal && <Modal onClose={toggleModal} url={largeUrl} alt={alt} />}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  largeUrl: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
