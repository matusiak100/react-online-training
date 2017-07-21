import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  } else {
    return props.children;
  }
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
