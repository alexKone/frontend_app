import { ApolloProvider } from '@apollo/client';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import client from './client';

import App from './app/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);


reportWebVitals(console.log);
