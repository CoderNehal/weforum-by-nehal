import React from 'react';
import Highlightcol8 from './Highlight-col-8';
import Highlightcol4 from './Highlight-col-4';
import './Highlights.css';
const Highlights = () => {
	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div className='Highlights margin-5'>
				<div className='container-fluid'>
					<h3>Event Highlights</h3>

					<div className='row row1'>
						<Highlightcol8 />
						<Highlightcol4 />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Highlights;
