import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import theme from '../theme/index';
import GlobalStyle from '../styles/GlobalStyle';

interface CustomAppProps extends AppProps {}

function CustomApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default CustomApp;
