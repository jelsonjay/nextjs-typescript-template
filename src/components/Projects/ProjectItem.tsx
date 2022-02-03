import { ProjectContainer } from './styles';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

interface ProjectProps {
	title: string;
	type: string;
	slug: string;
	img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
	return (
		<>
			<ProjectContainer imgUrl={img}>
				<section>
					<div className='orverlay' />
					<div className='text'>
						<h1>{title}</h1>
						<h2>- {type}</h2>
					</div>
				</section>
				<button type='button'>
					<Link href={`/projects/${slug}`}>
						<a>
							Read more <AiOutlineRightCircle />
						</a>
					</Link>
				</button>
			</ProjectContainer>
		</>
	);
}
