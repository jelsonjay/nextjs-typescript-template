import type { NextPage } from 'next';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header/index';
import HomeHero from '../components/HomeHero/index';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home: NextPage = () => {
	return (
		<HomeContainer>
			<Header />
			<main className='container'>
				<HomeHero />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</HomeContainer>
	);
};

export default Home;
