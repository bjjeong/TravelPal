import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {

  return (
    // <Provider store={store}>
    //   <HashRouter>
    //     <App />
    //   </HashRouter>
    // </Provider>
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Root;