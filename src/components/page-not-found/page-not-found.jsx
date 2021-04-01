import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/"><h2>Вернуться на главную</h2></Link>
    </>
  );
};

export default PageNotFound;
