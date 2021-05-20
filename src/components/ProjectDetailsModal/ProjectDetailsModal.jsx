import React from "react";
import { Modal, Button } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import { ModalContent } from "./ProjectDetailsModal.styled";
import "react-awesome-slider/dist/styles.css";

export const ProjectDetailsModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body>
				<button onClick={props.onHide}>
					<i className="far fa-times-circle"></i>
				</button>
				<AwesomeSlider>
					{props.pictures.map((pic, index) => (
						<div key={index} data-src={pic} />
					))}
				</AwesomeSlider>

				<h4>{props.name}</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
		</Modal>
	);
};

export default ProjectDetailsModal;
