import React from 'react';
import IndexView from '../main-page';
import PropTypes from 'prop-types';


const App = (filmIds) => {
  return (
    <IndexView {...filmIds}/>
  );
};
App.propTypes = {
  filmIds: PropTypes.array,
  anotherParam: PropTypes.string
};
export default App;
