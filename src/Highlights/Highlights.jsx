import React, { useState, useEffect } from 'react';
import db from '../Firebase/Firebase';
import Highlightcol8 from './Highlight-col-8';
import Highlightcol4 from './Highlight-col-4';
import './Highlights.css';
const Highlights = () => {
	const [highlights, sethighlights] = useState([]);
	useEffect(() => {
		db.collection('Data')
			.doc('Highlights')
			.get()
			.then((snapshot) => {
				sethighlights(snapshot.data());
			});
	}, []);
	if (Object.keys(highlights).length != 0) {
		return (
			<div className='container-fluid d-flex justify-content-center'>
				<div className='Highlights margin-5'>
					<div className='container-fluid d-flex flex-column justify-content-betweeen'>
						<h3>Event Highlights</h3>
						<div className='row row1'>
							<Highlightcol8 data={highlights.h1} />
							<Highlightcol4 data={highlights.h2} />
						</div>
						<div className='row row1'>
							<Highlightcol4 data={highlights.h3} />
							<Highlightcol8 data={highlights.h4} />
						</div>
						<div className='row row1' style={{ minHeight: '27em' }}>
							<Highlightcol4 data={highlights.h5} />
							<Highlightcol4 data={highlights.h6} />
							<Highlightcol4 data={highlights.h7} />
						</div>
						<div className='row row1 m-5em'>
							<Highlightcol8 data={highlights.h8} />
							<Highlightcol4 data={highlights.h9} />
						</div>
						<div className='row row1' style={{ minHeight: '27em' }}>
							<Highlightcol4 data={highlights.h10} />
							<Highlightcol4 data={highlights.h11} />
							<Highlightcol4 data={highlights.h12} />
						</div>
						<div
							className='row row1'
							style={{ minHeight: '27em', marginTop: '5em' }}>
							<Highlightcol4 data={highlights.h13} />

							<Highlightcol4 data={highlights.h14} />
							<Highlightcol4 data={highlights.h15} />
						</div>
						<div className='row row1 m-5em' style={{ minHeight: '27em' }}>
							<Highlightcol4 data={highlights.h16} />
							<Highlightcol4 data={highlights.h17} />
							<Highlightcol4 data={highlights.h18} />
						</div>
						<div className='row row1 m-5em' style={{ minHeight: '27em' }}>
							<Highlightcol4 data={highlights.h19} />
							<Highlightcol4 data={highlights.h20} />
							{/* blank div */}
							<div className='col-sm-4 imgcol'></div> 
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Highlights;
