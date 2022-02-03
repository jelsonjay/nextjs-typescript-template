import { Container } from './styles';
interface BanneProjectProps {
	title: string;
	type: string;
	imgUrl: string;
}

function BanneProject({ title, type, imgUrl }: BanneProjectProps) {
	return (
		<Container imgUrl={imgUrl}>
			<div className='overlay' />
			<section>
				<h1>{title}</h1>
				<h2>{type}</h2>
			</section>
		</Container>
	);
}

export default BanneProject;
