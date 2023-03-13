import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchContainer,
  Form,
  FormInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (value.trim() === '') {
      return toast('Enter a search value.');
    }
    onSearch(value);
    setValue('');
  };

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel></SearchButtonLabel>
          <BsSearch size="20" />
        </SearchButton>

        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </SearchContainer>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
