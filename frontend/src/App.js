import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<>
			<Navbar />
			<div className="App">
				<Dashboard />
			</div>
		</>
	);
}

export default App;
