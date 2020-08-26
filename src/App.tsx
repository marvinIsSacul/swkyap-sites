import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';


const theme = createMuiTheme({
	typography: {
		body1: {
			color: '#444444'
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl">
				<Box>
					<Header />
				</Box>
				<Box>
					
				</Box>
				<Box>
					<Footer />
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
