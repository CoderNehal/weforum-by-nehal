import About from './About/About';
import './App.css';
import Highlights from './Highlights/Highlights';
import JoinSummit from './JoinSummit/JoinSummit';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Partners from './Partners/Partners';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Main />
			<About />
			<JoinSummit />
			<Partners />
			<Highlights />
		</div>
	);
}

export default App;
