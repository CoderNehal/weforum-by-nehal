import React from 'react';
const Highlightcol8 = ({ data }) => {
	return (
		<div className='col-sm-8 imgcol'>
			<div className='card'>
				<img className='card-img' src={data[0]} alt='Card image' />
				<div className='card-img-overlay'>
					<div className='footer d-flex justify-content-center align-items-end'>
						<h2>{data[1]}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Highlightcol8;
