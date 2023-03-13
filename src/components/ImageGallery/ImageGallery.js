import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getApi } from '../../services/getApi';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem';
import LoadButton from 'components/LoadButton';

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (value !== query) {
      setPage(1);
      setImages([]);
      setValue(query);
      isFirstRender.current = true;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLoading(true);

    getApi(query, page)
      .then(result => {
        setLoading(false);
        setTotalImages(result.totalHits);
        if (result.hits.length) {
          setImages(prevState => [...prevState, ...result.hits]);
        } else {
          setImages([]);
          setPage(1);
        }
      })
      .catch(error => {
        toast(error.message);
        setImages([]);
        setPage(1);
        setLoading(false);
        return;
      });
  }, [query, value, page]);

  const handleLoad = () => {
    return setPage(state => state + 1);
  };

  return (
    <>
      {loading && <Loader />}

      <GalleryList>
        {images.map(item => {
          return (
            <li key={item.id}>
              <ImageGalleryItem
                largeUrl={item.largeImageURL}
                webUrl={item.webformatURL}
                alt={item.tags}
              />
            </li>
          );
        })}
      </GalleryList>

      {images.length > 0 && images.length < totalImages && (
        <LoadButton onLoad={handleLoad} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
