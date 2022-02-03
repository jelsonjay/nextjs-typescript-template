import { FormContainer, Input, TextArea } from './styles';
export default function Form() {
	return (
		<>
			<FormContainer>
				<Input placeholder='Name' type='name' required />
				<Input placeholder='Email' type='email' required />
				<TextArea placeholder='Message' required />
				<button type='submit'>Send</button>
			</FormContainer>
		</>
	);
}
