import React from 'react';
import './Updates.css';
const Updates = () => {
	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div className='Updates margin-5'>
				<div className='title'>
					<h2>Updates from our partners</h2>
				</div>
				<ul>
					<li>
						<a href='#'>
							ConsenSys: Revolutionizing clinical trial based research
						</a>
						<small>today</small>
					</li>
					<li>
						<a href='#'>
                        Islamic Development Bank's call for innovation to save women's lives from cancer
						</a>
						<small>today</small>
					</li>
					<li>
						<a href='#'>
                        Biogen's Alzheimer's drug gets FDA approval
						</a>
						<small>today</small>
					</li>
				</ul>
                <button>See all updates</button>
			</div>
		</div>
	);
};

export default Updates;
