// pages/_app.js
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Diğer global stiller */
`;

function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
