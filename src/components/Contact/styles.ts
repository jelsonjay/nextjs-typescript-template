import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.section``;

export const FormContainer = styled.form`
	margin-top: 8rem;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	> button {
		border: none;
		padding: 1rem 2.5rem;
		color: #fff;
		font-weight: 300;
		font-size: 1.25rem;
		border-radius: 0.5rem;
		background: ${({ theme }) => theme.primary};
		transition: 0.5s;
		width: fit-content;

		&:disabled {
			opacity: 0.5;
		}

		&:not(:disabled):hover {
			background: ${({ theme }) => darken(0.05, theme.primary)};
		}
	}

	@media (max-width: 700px) {
		margin-top: 5rem;
		grid-template-columns: 1fr;
	}
	@media (max-width: 450px) {
		> button {
			padding: 0.8rem 1.5rem;
			font-size: 1rem;
		}
	}
`;

export const Input = styled.input`
	height: 3rem;
	width: 100%;
	background: ${({ theme }) => theme.inputBG};
	border: 1px solid ${({ theme }) => theme.boder};
	padding: 1.8rem 1.5rem;
	color: ${({ theme }) => theme.primary};
	font-size: 1.25rem;
	border-radius: 0.5rem;
	outline: none;
	transition: 0.5s;

	&:focus {
		border-color: ${({ theme }) => theme.primary};
	}

	&::placeholder {
		border-color: ${({ theme }) => theme.primary};
	}

	@media (max-width: 450px) {
		padding: 1.5rem;
		font-size: 1rem;
	}
`;

export const TextArea = styled.textarea`
	height: 10rem;
	width: 100%;
	background: ${({ theme }) => theme.inputBG};
	border: 1px solid ${({ theme }) => theme.boder};
	padding: 1.8rem 1.5rem;
	color: ${({ theme }) => theme.primary};
	font-size: 1.25rem;
	border-radius: 0.5rem;
	outline: none;
	transition: 0.5s;
	resize: none;
	grid-column: 1 / 3;

	&:focus {
		border-color: ${({ theme }) => theme.primary};
	}

	&::placeholder {
		border-color: ${({ theme }) => theme.primary};
	}
	@media (max-width: 7000px) {
		padding: 1.5rem;
		font-size: 1rem;
	}

	@media (max-width: 450px) {
		padding: 1.5rem;
		font-size: 1rem;
	}
`;
