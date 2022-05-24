import {store} from '../redux/_store';
import { Provider } from 'react-redux';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
