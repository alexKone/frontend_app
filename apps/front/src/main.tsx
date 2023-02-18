import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <ApolloProvider client={client}> */}
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
    {/* </ApolloProvider> */}
  </BrowserRouter>
);

reportWebVitals(console.log);
