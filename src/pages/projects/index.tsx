import { ProjectsContainer } from '../../styles/ProjectsStyles';
import Header from '../../components/Header';
import ProjectItems from '../../components/ProjectItems';

export default function Projects() {
	return (
		<ProjectsContainer>
			<Header />
			<main className='container'>
				<ProjectItems
					title='KuiaOnline'
					type='Front-end Developer'
					slug='test'
					imgUrl='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
				/>
				<ProjectItems
					title='KuiaOnline'
					type='Front-end Developer'
					slug='test'
					imgUrl='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
				/>

				<ProjectItems
					title='KuiaOnline'
					type='Front-end Developer'
					slug='test'
					imgUrl='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
				/>
			</main>
		</ProjectsContainer>
	);
}
