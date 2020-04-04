import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import ImageListView from './views/ImageListView';
import ImageView from './views/ImageView';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/photos/:photoId">
              <ImageView />
            </Route>
            <Route path="/">
              <ImageListView />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
