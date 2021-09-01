import React from 'react';
import './Main.css';
import { MdLocationOn } from 'react-icons/md';

const Main = () => {
	return (
		<div className='mainImgContainer d-flex justify-content-center'>
			<div className='row info'>
				<div className='col-12 col-xl-6 col-lg-6 d-flex justify-content-center flex-column'>
					<div className='dates'>
						<MdLocationOn color='red' style={{ marginRight: '2px' }} />
						DIGITAL MEETING
						<br />
						21—24 September 2020
					</div>
					<div className=''>
						<h1 className='mainTitle'>Sustainable Development Impact Summit</h1>
					</div>
				</div>
				<div className='col-12 col-xl-6 col-lg-6 tagLine d-flex flex-column justify-content-start justify-content-lg-end justify-content-xl-end'>
					Realizing a 'Great Reset' for Sustainable Development
				</div>
			</div>
		</div>
	);
};

export default Main;
