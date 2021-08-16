import React from 'react';
const index = ({ data }) => {
	return (
		<div className='col-sm-4 imgcol'>
			<div className='card' >
				<img className='card-img' src={data[0]} alt='Card image' />
				<div className='card-img-overlay'>
					<div className='footer d-flex justify-content-center align-items-end'>
						<h4>{data[1]}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
