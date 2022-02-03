import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

function Experience() {
	return (
		<Container>
			<SectionTitle title='3 years' description='Experience' />
			<section>
				<ExperienceItem
					year='2019'
					title='Front-end Developer'
					description='Lorem ipsutetur adipisicing elit. Similique veniam.'
				/>
				<ExperienceItem
					year='2020'
					title='Front-end Developer'
					description='Lorem ipsutetur adipisicing elit. Similique veniam.'
				/>
				<ExperienceItem
					year='2021'
					title='Back-end  Developer'
					description='Lorem ipsutetur adipisicing elit. Similique veniam.'
				/>
				<ExperienceItem
					year='2022'
					title='FullStack Developer'
					description='Lorem ipsutetur adipisicing elit. Similique veniam.'
				/>
			</section>
		</Container>
	);
}

export default Experience;
