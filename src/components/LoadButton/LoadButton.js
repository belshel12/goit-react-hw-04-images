import PropTypes from 'prop-types';
import { Button } from './LoadButton.styled';

const LoadButton = ({ onLoad }) => {
  return <Button onClick={onLoad}>Load more</Button>;
};

LoadButton.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default LoadButton;
