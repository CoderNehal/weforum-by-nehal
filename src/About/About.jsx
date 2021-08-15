import React, { useEffect, useState } from 'react';
import db from '../Firebase/Firebase';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
const About = () => {
	const [AboutObj, setAboutObj] = useState({});
	useEffect(() => {
		const sectionData = [];
		db.collection('Data')
			.doc('About')
			.get()
			.then((snapshot) => {
				setAboutObj(snapshot.data());
			});
	}, []);
	console.log(AboutObj);
	if (Object.keys(AboutObj) != 0) {
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
