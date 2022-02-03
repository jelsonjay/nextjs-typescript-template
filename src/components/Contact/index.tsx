import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import Form from './Form';
function Contact() {
	return (
		<Container>
			<SectionTitle
				title={
					<>
						Contact
						<br />
						Get in touch
					</>
				}
				description={<>Please fill the form field!</>}
			/>
			<Form />
		</Container>
	);
}

export default Contact;
