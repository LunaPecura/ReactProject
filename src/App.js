
// Technical stuff
import './App.css';
import {Route, Routes, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

// Main components
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import AntPage from './pages/AntPage';
import LibraryPage from './pages/LibraryPage';

function App() {

	const apiKey = 'LzgRZhjbLiFQT87zeQBoVpJOa3hl1Rk9U4mnRXza'
	const [apodData, setApodData] = useState(null)
	const getApodData = async () => {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		const data = await response.json();
		setApodData(data);
	}

	useEffect(() => { getApodData(); }, [])



	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<MainPage apodData={apodData} />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/ant' element={<AntPage />} />
				<Route path='/library' element={<LibraryPage />} />
			</Routes>

		</div>
	);
}


export default App;
