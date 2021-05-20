import React, { useState } from "react";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";
import {
	ProjectCard,
	ProjectPicture,
	ProjectContainer,
} from "./Projects.styled";

const Projects = ({ sectionName, projectName, projectPictures }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);

	const closeModal = () => setIsOpen(false);
	return (
		<ProjectContainer>
			<h2>{sectionName}</h2>
			<ProjectCard onClick={() => openModal()}>
				<ProjectPicture src={projectPictures[0]} alt="" />
				<p>{projectName}</p>
			</ProjectCard>
			{isOpen && (
				<ProjectDetailsModal
					show={isOpen}
					onHide={() => closeModal()}
					name={projectName}
					pictures={projectPictures}
				/>
			)}
		</ProjectContainer>
	);
};

export default Projects;
