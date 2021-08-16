import React, { useState, useEffect } from 'react';
import db from '../Firebase/Firebase';
import './Partners.css';
const Partners = () => {
	const [partners, setpartners] = useState({});
	useEffect(() => {
		db.collection('Data')
			.doc('Partners')
			.get()
			.then((snapshot) => {
				setpartners(snapshot.data());
			});
	}, []);

	return (
		<div className='container-fluid d-flex justify-content-center mt-5'>
			<div className='Partners'>
				<div className='card-deck px-4'>
					<div className='card  '>
						<div className='card-body'>
							<h5 className='card-title'>Our Partners</h5>
							<p className='card-text'>{partners.OurPartners}</p>
						</div>
						<div className='card-footer '>
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
							<p className='card-text'>{partners.UpLink}</p>
						</div>
						<div className='card-footer'>
							<button>Visit UpLink</button>
						</div>
					</div>
					<div className='card '>
						<div className='card-body'>
							<h5 className='card-title'>SDGs</h5>
							<p className='card-text'>{partners.SDGs}</p>
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
