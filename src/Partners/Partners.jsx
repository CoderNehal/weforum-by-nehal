import React from 'react';
import './Partners.css';
const Partners = () => {
	return (
		<div className='container-fluid d-flex justify-content-center mt-5'>
			<div className='Partners'>
				<div className='card-deck px-4'>
					<div className='card  '>
						<div className='card-body'>
							<h5 className='card-title'>Our Partners</h5>
							<p className='card-text'>
								World Economic Forum Partners are world-class companies with a
								strong interest in developing systemic solutions to key
								challenges
							</p>
						</div>
						<div className='card-footer ' >
							
								<button>Our Partners</button>
							
						</div>
					</div>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<img
									src='https://assets.weforum.org/tout/image/responsive_tiny_LM2OUR7Tr5Yw9OuSDCXx1etiBfs6wUP_SWZTuJSt-LU.jpg'
									alt=''
								/>{' '}
								<br /> <br />
								UpLink
							</h5>
							<p className='card-text'>
								UpLink is a digital platform that crowdsources innovative
								solutions for the UN Sustainable Development Goals (SDGs).
								Through its Challenges and Action groups, UpLink seeks to
								connect the best solutions to networks of industry leaders,
								experts, and partners, to scale their initiative and accelerate
								their impact.
							</p>
						</div>
						<div className='card-footer'>
							<button>Visit UpLink</button>
						</div>
					</div>
					<div className='card '>
						<div className='card-body'>
							<h5 className='card-title'>SDGs</h5>
							<p className='card-text'>
								We've built a 3D virtual environment about the Sustainable
								Development Goals and the champions working to achieve them by
								2030
							</p>
						</div>
						<div className='card-footer'>
							<button>Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
