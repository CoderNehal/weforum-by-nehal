import React from 'react';
import './Section2.css';
const Section2 = () => {
	return (
		<div className='container-fluid Section2'>
			<div className='row margin-5'>
				<div className='col-12 col-lg-6 col-xl-6  description'>
					<div className='Section2_Inner d-flex flex-column justify-content-center'>
						<p>
							Taking place in the context of the United Nations General
							Assembly, the World Economic Forum’s fourth and, for the first
							time, fully virtual Sustainable Development Impact Summit will
							convene leaders from government, business, international
							organizations and civil society along with a diverse group of
							experts and innovators to initiate, accelerate and scale-up
							entrepreneurial solutions to tackle climate change and advance
							sustainable development.
						</p>
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
