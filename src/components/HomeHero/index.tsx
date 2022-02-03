import { Container, CodeItem, TextContainer, InfoContainer } from './styles';
//import avatar from '/public/bg.webp';
//import Image from 'next/image';
function HomeHero() {
	return (
		<Container>
			<img
				src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
				alt='Avatar'
			/>
			<div>
				<TextContainer>
					<h1>Olá / Hello</h1>
					<h2>My name is Jelson J</h2>
				</TextContainer>
				<InfoContainer>
					<CodeItem>
						<span className='comment'>// My appresentaition</span>
						<span className='purple'>Details</span> {'\u007B'}
						<div>
							First Name: <span className='blue'>Jelson,</span>
						</div>
						<div>
							Last Name: <span className='blue'>J,</span>
						</div>
						{'\u007D'}
					</CodeItem>

					<CodeItem>
						<span className='purple'>Role</span> {'\u007B'}
						<div>
							Possion: <span className='blue'>Front-end Developer</span>
						</div>
						<div>
							Company: <span className='blue'>Freelancer</span>
						</div>
						{'\u007D'}
					</CodeItem>
				</InfoContainer>
			</div>
		</Container>
	);
}

export default HomeHero;
