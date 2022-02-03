import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import SkillsItem from './SkillsItem';

function Skills() {
	return (
		<Container>
			<SectionTitle title='Skills Set' />
			<section>
				<SkillsItem title='HTML5' icon={<AiFillHtml5 />} />
				<SkillsItem title='CSS3' icon={<FaCss3 />} />
				<SkillsItem title='JavaScript' icon={<IoLogoJavascript />} />
				<SkillsItem title='Reactjs' icon={<FaReact />} />
				<SkillsItem title='Nodejs' icon={<IoLogoNodejs />} />
				<SkillsItem title='Nodejs' icon={<IoLogoNodejs />} />
				<SkillsItem title='Nodejs' icon={<IoLogoNodejs />} />
				<SkillsItem title='Nodejs' icon={<IoLogoNodejs />} />
			</section>
		</Container>
	);
}

export default Skills;
