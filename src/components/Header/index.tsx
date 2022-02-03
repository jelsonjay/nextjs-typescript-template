import { Container } from './styles';
import NavLink from './NavLink';

function Header() {
	return (
		<Container>
			<ul>
				<NavLink title='Home' path='/' />
				<NavLink title='Projects' path='/projects' includes />
			</ul>
		</Container>
	);
}

export default Header;
