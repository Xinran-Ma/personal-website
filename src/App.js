import React, {useEffect, useState} from 'react';

import PageLoader from './components/PageLoader/PageLoader';
import MainPageContainer from './components/MainPageContainer/MainPageContainer';

function App() {
	const [display_page_loader, setPageLoaderDisplay] = useState('display');
	const [display_page, setPageDisplay] = useState('hide');

	useEffect(() => {
		setInterval(function(){ 
			setPageLoaderDisplay('hide'); 
			setPageDisplay('display');
		}, 3000);
		
	}, [])

	return (
		<div className="App">
			<PageLoader active={display_page_loader} />
			<MainPageContainer active={display_page} />
		</div>
	);
}

export default App;