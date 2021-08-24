import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/index';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps): any {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
