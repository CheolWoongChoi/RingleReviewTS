import React, { useState, useEffect } from 'react';
import './SuggestionsCard.scss';

const SuggestionsCard = ({ message, frequencyWord, synonymList }) => {
	const [errorRequest, setErrorRequest] = useState(false);
	const [openFrequencyWord, setOpenFrequencyWord] = useState(false); 
	const [openSynonymList, setOpenSynonymList] = useState(false);
	const [openVocaSynonym, setOpenVocaSynonym] = useState({});
	const [isLike, setIsLike] = useState(false);

	const sendErrorRequest = () => {
		alert('메시지가 전송되었습니다.');
		setErrorRequest(false);

		// api call
	};
	
	const toggleFrequencyWord = () => {
		setOpenFrequencyWord(!openFrequencyWord);
	};

	const toggleLikeBtn = () => {
		if (!isLike) {
			alert('좋아요!');
		} else {
			alert('싫어요ㅠ');
		}

		setIsLike(!isLike);
	};

	const toggleSynonymList = () => {
		setOpenSynonymList(!openSynonymList);
	};

	const toggleVocaSynonym = vocaId => {
		setOpenVocaSynonym({
			...openVocaSynonym,
			[vocaId]: !openVocaSynonym[vocaId]
		})
	}

	const renderFrequency50Word = () => {
		return frequencyWord.listTop50.map((word, idx) => (
			<div key={idx} className='word-wrap'>
				<span className='word'>{word[0]}</span>
				<span className='frequency'>{word[1]}</span>
			</div>	
		));
	};

	const renderSynonymList = () => {
		return synonymList.map(synonymWrap => {
			const { voca_record, synonyms } = synonymWrap;
			const vocaId = voca_record.id;

			return (
				<div key={vocaId} className='word-wrap'> 
					<div className='voca' onClick={() => toggleVocaSynonym(vocaId)}>
						<span className='text'>
							{voca_record.word}
						</span>
						<span className='arrow'>
							{openVocaSynonym[vocaId] ? (
								<img src='https://d2mkevusy1mb28.cloudfront.net/mobile/btn-dropdown-close-nor%403x.png' alt='down' />
							) : (
								<img src='https://d2mkevusy1mb28.cloudfront.net/mobile/btn-dropdown-nor%403x.png' alt='up' />
							)}
						</span>
					</div>
					{openVocaSynonym[vocaId] && (
						<div className='synonyms-wrap'>
							{synonyms.map(synonym => (
								<button key={synonym.id} className='synonym'>
									{synonym.word}
								</button>
							))}
						</div>
					)}
				</div>
				
			);
		})
	}

	return (
		<div className='suggestions-card'>
			<span className='like-btn' onClick={toggleLikeBtn}>
				{isLike ? (
					<img src='https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/past-like.png' alt='like'/>
				) : (
					<img src='https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/past-unlike.png' alt='dislike' />
				)}
			</span>
			<div className='message'>
				{message}
			</div>
			<div className='error-request'>
				{!errorRequest && (
					<p className='default-text' onClick={() => setErrorRequest(true)}>
						링글의 제안이 정확하지 않은거 같아요.
					</p>
				)}
				{errorRequest && (
					<div className='error-send'>
						<textarea rows='3'></textarea>
						<button onClick={sendErrorRequest}>Send</button>
					</div>
				)}
			</div>
			{/* 자주 사용하는 단어 */}
			{frequencyWord && (
				<div className='frequency-word'>
					<p className='text' onClick={toggleFrequencyWord}>
						자주 사용하는 단어 {openFrequencyWord ? 'CLOSE' : 'OPEN'}
					</p>
					{openFrequencyWord && (
						<div className='word-list'>
							{renderFrequency50Word()}
						</div>
					)}
				</div>
			)}
			{/* 동의어 */}
			{synonymList && (
				<div className='synonym-list'>
					<div className='explain'>
						<button onClick={toggleSynonymList}>
							동의어 리스트 {openSynonymList ? '닫기' : '확인'}
						</button>
					</div>
					{openSynonymList && (
						<div className='word-list'>
							{renderSynonymList()}
						</div>
					)}
				</div>
			)}
		</div>
	)
};

export default SuggestionsCard;