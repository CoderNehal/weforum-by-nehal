import React, { useState, useEffect } from 'react';
import './HighlightSession.css';
import { IoStarSharp } from 'react-icons/io5';
import dateFormat from 'dateformat';
import db from '../Firebase/Firebase';
const date = new Date('September 22 ,2020');
// console.log( dateFormat(date, 'fullDate').toString());
const HighlightSession = () => {
	const [events, setevents] = useState([]);
	useEffect(() => {
		db.collection('Data')
			.doc('HighlightSession')
			.get()
			.then((snapshot) => {
				const data = snapshot.data();

				const sortedData = Object.values(sortObj(data));
				//console.log(sortedData)
				setevents(sortedData);
			});
	}, []);
	function sortObj(obj) {
		return Object.keys(obj)
			.sort()
			.reduce((result, key) => {
				result[key] = obj[key];
				return result;
			}, {});
	}
	console.log(events);
	return (
		<div className='HighlightSession-container container-fluid'>
			<div className='HighlightSession margin-5'>
				<div className='title'>
					<h2>
						<span>
							<IoStarSharp />
						</span>
						Highlight sessions
					</h2>
					<p className='subtitle'>
						Must-watch talks, curated by the World Economic Forum team
					</p>
				</div>
				<div className='container-fluid'>
					
					{events.map((element) => {
						const date = element.date;
						const sessions = element.sessions;
						console.log();
						return (
							<div className='row'>
								<div className='col-12 grid-title col-lg-4 heading-border-top'>
									{dateFormat(
										date.toDate().toDateString(),
										'dddd, mmmm d, yyyy'
									)}
								</div>

								<div className='col-12 col-lg-8 pl-5 hover'>
									{sessions.map((session) => {
										return (
											<div className='border-top d-flex flex-column section'>
												<h4 className='session-title '>{session.title}</h4>
												<p>{session.description}</p>
												<span className='d-none d-lg-inline'>
													Watch session &gt;
												</span>
												<p className='d-lg-none d-block watch'>
													Watch session &gt;
												</p>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className='update d-flex justify-content-end align-items-center'>
					
					<button>See all updates</button>
				</div>
			</div>
		</div>
	);
};

export default HighlightSession;
