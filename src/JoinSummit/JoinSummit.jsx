
//TO BE CONTINUED

import React from 'react';
import './JoinSummit.css';
const JoinSummit = () => {
	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div className='JoinSummit margin-5'>
				<div className='container-fluid justify-content-center innerCon'>
					<div className='row heading d-flex justify-content-center justify-content-lg-start justify-content-xl-start flex-nowrap'>
						<img
							src='https://www.weforum.org/assets/events/registration-icon-bcb5706a0cfa5bcb76b12e5774c6ce3f92bebb8052802a067ac1cede0fe16486.svg'
							alt=''
						/>
						<h1>Join the Sustainable Development Impact Summit</h1>
					</div>
					<div className=" row2  d-flex justify-content-between  ">
						<strong className="text-content   d-flex justify-content-start align-items-center">Become a World Economic Forum Digital Member to participate in the summit</strong>
						<div className="button   d-flex justify-content-end align-items-center"><button>Learn more and start free trial</button></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinSummit;
