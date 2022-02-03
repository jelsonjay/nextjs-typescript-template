import { Container } from './styles';
import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineFacebook
} from 'react-icons/ai';
function Footer() {
	function handleRedirect(url: string) {
		window.open(url);
	}

	function handleScrollTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<Container>
			<div className='container'>
				<button onClick={handleScrollTop} type='button'>
					Back top
				</button>
				<section>
					<AiOutlineInstagram
						onClick={() => handleRedirect('https://www.instagram.com')}
					/>
					<AiOutlineTwitter
						onClick={() => handleRedirect('https://www.twitter.com')}
					/>
					<AiOutlineGithub
						onClick={() => handleRedirect('https://www.guithub.com')}
					/>
					<AiOutlineFacebook
						onClick={() => handleRedirect('https://www.facebook.com')}
					/>
				</section>
			</div>
		</Container>
	);
}

export default Footer;
