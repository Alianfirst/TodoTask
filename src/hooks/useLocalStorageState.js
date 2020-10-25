import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultVal) => {
	const [ state, setState ] = useState(() => {
		let value;
		try {
			value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			value = defaultVal;
		}
		return value;
	});
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state ]
	);
	return [ state, setState ];
};
export { useLocalStorageState };
