import React, { useEffect, useState } from 'react';
import db from '../Firebase/Firebase';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
const About = () => {
	const [AboutObj, setAboutObj] = useState({});
	useEffect(() => {
		
		db.collection('Data')
			.doc('About')
			.get()
			.then((snapshot) => {
				setAboutObj(snapshot.data());
			});
	}, []);
	
	if (Object.keys(AboutObj) !== 0) {
		return (
			<>
				<Section1 data={AboutObj.section1} />
				<br />
				<Section2 data={AboutObj.section2} />
			</>
		);
	} else {
		return null;
	}
};

export default About;
