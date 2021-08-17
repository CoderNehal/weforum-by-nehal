import React, { useState } from 'react';
import './HighlightSession.css';
import { IoStarSharp } from 'react-icons/io5';
import dateFormat from 'dateformat';
const date = new Date('September 22 ,2020');
// console.log( dateFormat(date, 'fullDate').toString());
const HighlightSession = () => {
	const [events, setevents] = useState([
		{
			'Monday, September 21, 2020': [
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
			],
		},
		{
			'Tuesday, September 22, 2020': [
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
				{
					title: 'COVID-19 Outlook',
					subtitle:
						'Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita Zaidi',
				},
			],
		},
	]);

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
					{/* <div className='row'>
						<div className='col-12 grid-title col-lg-4 border-top'>
							Monday, September 21, 2020
						</div>
						
						<div id='hover' className='col-12 col-lg-8 pl-5'>
							<div className='border-top d-flex flex-column section'>
								<h4 className='session-title '>COVID-19 Outlook</h4>
								<p>
									Speakers: Hiroko Kuniya, Osagie Ehanire, Lydie Hudson, Anita
									Zaidi
								</p>
								<span className='d-none d-lg-inline'>Watch session &gt;</span>
								<p className='d-lg-none d-block watch'>Watch session &gt;</p>
							</div>
							
						</div>
					</div> */}
					{events.map((eventDate, idx) => {
						console.log(Object.keys(eventDate))
						return (
							<div className='row'>
								<div className='col-12 grid-title col-lg-4 border-top'>
									{Object.keys(eventDate)}
								</div>
								{/* {Object.values(eventDate).map((EachEvent, index) => {
									EachEvent.forEach(element => {
										console.log(element)
									});
									return (
										<div id='hover' className='col-12 col-lg-8 pl-5'>
											<div className='border-top d-flex flex-column section'>
												<h4 className='session-title '>
													{EachEvent[index].title}
												</h4>
												<p>{EachEvent[index].subtitle}</p>
												<span className='d-none d-lg-inline'>
													Watch session &gt;
												</span>
												<p className='d-lg-none d-block watch'>
													Watch session &gt;
												</p>
											</div>
										</div>
									);
								})} */}
								
							</div>
						);
					})}
				</div>
				<button>See all updates</button>
			</div>
		</div>
	);
};

export default HighlightSession;
