import './App.css';
import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
			</Routes>

		</div>
	);
}


export default App;
