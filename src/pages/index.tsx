import type { NextPage } from 'next';
import { HomeContainer } from '../styles/HomeStyles';

const Home: NextPage = () => {
	return (
		<HomeContainer>
			<main className='container'>
				<h1>Next.js and Typescript Boilerplate</h1>
			</main>
		</HomeContainer>
	);
};

export default Home;
