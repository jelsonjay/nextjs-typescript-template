import { SkillsContainer } from './styles';
import { ReactNode } from 'react';

interface SkillsContainerProps {
	title: string;
	icon: ReactNode;
}

export default function SkillsItem({ title, icon }: SkillsContainerProps) {
	return (
		<SkillsContainer>
			<p>{title}</p>
			{icon}
		</SkillsContainer>
	);
}
