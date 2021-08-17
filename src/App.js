import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Highlights from './Highlights/Highlights';
import HighlightSession from './HighlightSession/HighlightSession';
import JoinSummit from './JoinSummit/JoinSummit';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Partners from './Partners/Partners';
import Updates from './Updates/Updates';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Main />
			<About />
			<JoinSummit />
			<Partners />
			<Highlights />
			<Updates />
			<HighlightSession />
			<Footer />
		</div>
	);
};

export default App;
