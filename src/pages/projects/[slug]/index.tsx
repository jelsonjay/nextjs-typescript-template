import { ProjectInfContainer } from '../../../styles/ProjectInfContainer';
import Header from '../../../components/Header';
import BanneProject from '../../../components/BanneProject';

export default function ProjectDetails() {
	return (
		<ProjectInfContainer>
			<Header />
			<BanneProject
				title='KuiaOnline'
				type='Front-End developer'
				imgUrl='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
			/>

			<main>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit A ex quis,
					error veritatis quae numquam aspernatur omnis vero quaerat quod Lorem
					ipsum dolor sit amet consectetur adipisicing elit A ex quis, error
					veritatis quae numquam aspernatur omnis vero quaerat quod Lorem ipsum
					dolor sit amet consectetur adipisicing elit A ex quis, error veritatis
					quae numquam aspernatur omnis vero quaerat quod Lorem ipsum dolor sit
					amet consectetur adipisicing elit A ex quis, error veritatis quae
					numquam aspernatur omnis vero quaerat quod
				</p>
				<button>
					<a href='#'>Go to project</a>
				</button>
			</main>
		</ProjectInfContainer>
	);
}
