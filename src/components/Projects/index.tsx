import { Container } from './styles';
import ProjectItem from './ProjectItem';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';

function Projects() {
	return (
		<Container>
			<SectionTitle title='Projects' />

			<section>
				<ProjectItem
					img='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
					title='KuiaOnline'
					slug='test'
					type='backend website'
				/>
				<ProjectItem
					img='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
					title='KuiaOnline'
					slug='test'
					type='frontend website'
				/>
				<ProjectItem
					img='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
					title='KuiaOnline'
					slug='test'
					type='Website'
				/>
			</section>
			<button type='button'>
				<Link href='/projects'>
					<a>Go to Projects</a>
				</Link>
			</button>
		</Container>
	);
}

export default Projects;
