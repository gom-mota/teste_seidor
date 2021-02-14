import React from 'react';

import { Container } from './styles.js'

const SimpleModal = ({ id='modal', onClose=() => {}, children}) => {
  
	const handleOutsideClick = (e) => {
		if (e.target.id === id) onClose();
	}

	return (
		<Container>
			<div id={id} className="modal" onClick={handleOutsideClick}>
				<div className="container">
					
					<div className="close" onClick={onClose} >X</div>
					<div className="content">
						{children}
					</div>
					
				</div>
			</div>
		</Container>

	);
}

export default SimpleModal;