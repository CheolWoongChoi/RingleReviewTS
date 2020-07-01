import React from 'react';
import FeedbackContainer from './containers/FeedbackContainer';
import AnalysisContainer from './containers/AnalysisContainer';
import SuggestionsContainer from './containers/SuggestionsContainer';
import ScriptContainer from './containers/ScriptContainer';
import AudioPlayContainer from './containers/AudioPlayerContainer';
import TitleHeader from './components/TitleHeader';

import './App.scss';

const App = () => {
	return (
		<div className='ringle-review'>
			<TitleHeader />
			
			{/* 내용 */}
			<div className='contents'>
				<div className='left'>
					<div>
						<ScriptContainer />
						<SuggestionsContainer />
					</div>
					<AudioPlayContainer />
				</div>
				<div className='right'>
					<FeedbackContainer />
					<AnalysisContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
