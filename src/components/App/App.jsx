import { useState } from 'react';
import { Layout } from './Layout';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

export function App() {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = searchText => {
    setSearchText(searchText);
  };

  return (
    <Layout>
      <Searchbar onSearch={handleSubmit} />
      <ImageGallery query={searchText} />
      <ToastContainer autoClose={2000} />
    </Layout>
  );
}
