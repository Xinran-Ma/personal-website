import React, {useEffect, useState} from 'react';

import PageLoader from './components/PageLoader/PageLoader';

function App() {
	const [display_loader, setDisplay] = useState('display');

	useEffect(() => {
		setDisplay('hide');
	})
	
	return (
		<div className="App">
			<PageLoader active={display_loader} />
		</div>
	);
}

export default App;