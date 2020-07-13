import React from 'react';
import './Loader.scss';

const Loader = () => (
	<div className='loader-wrap'>
		<img src={require('../../assets/loader.gif')} alt='' />
	</div>
);

export default Loader;

