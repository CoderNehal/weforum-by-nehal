import React from 'react';
import './Section1.css';
const Section1 = () => {
	return (
		<div className='container-fluid Section1' >
			<div className='row margin-5'>
				<div className='col-12 col-lg-6 col-xl-6 order-3 order-lg-1 order-xl-1 Section1_img_container' 	>
					<img
						src='https://assets.weforum.org/tout/image/responsive_medium_yMLpolXHBKE84jMlg1o86IYFgQY3b8AGmPyfXpDLeUc.jpg'
						alt=''
					/>
				</div>
             
				<div className='col-12 col-lg-5 col-xl-5 order-1 order-lg-2 order-xl-2 d-flex flex-column justify-content-center description'>
					<p>The COVID-19 crisis wreaked havoc on societies and economies and dealt a major setback to achieving the 2030 Agenda and the Paris Climate Agreement. Putting the world back on a path of sustainable, equitable, and inclusive growth will require more than a global recovery; it will require a Great Reset of social and economic systems.</p>
                    <button >Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Section1;
