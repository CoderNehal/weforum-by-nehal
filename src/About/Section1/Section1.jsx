import React from 'react';
import './Section1.css';
const Section1 = ({ data }) => {
	return (
		<div className='container-fluid Section1'>
			<div className='row margin-5'>
				<div className='col-12 col-lg-6 col-xl-6 order-3 order-lg-1 order-xl-1 Section1_img_container'>
					<img
						src='https://assets.weforum.org/tout/image/responsive_medium_yMLpolXHBKE84jMlg1o86IYFgQY3b8AGmPyfXpDLeUc.jpg'
						alt=''
					/>
				</div>

				<div className='col-12 col-lg-5 col-xl-5 order-1 order-lg-2 order-xl-2 d-flex flex-column justify-content-center description'>
					<p>{data}</p>
					<button>Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Section1;
