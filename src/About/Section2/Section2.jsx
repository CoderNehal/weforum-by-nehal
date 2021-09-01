import React from 'react';
import './Section2.css';
const Section2 = ({ data }) => {
	return (
		<div className='container-fluid Section2'>
			<div className='row margin-5'>
				<div className='col-12 col-lg-6 col-xl-6 description d-flex  justify-content-center align-items-center'>
					<div className='Section2_Inner d-flex  justify-content-center align-items-center'>
						<p>{data}</p>
					</div>
				</div>
				<div className='col-12 col-lg-6 col-xl-6  Section2_img_container'>
					<img
						src='https://assets.weforum.org/tout/image/responsive_medium_5xpWZ95dgP7NYVK2A97DJgP288lsOE7t03ejqlWVw7c.jpg'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Section2;
