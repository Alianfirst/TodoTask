import React, { createContext } from 'react';
import useInputState from '../hooks/useInputState';

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
	const [ value, handleChange ] = useInputState('All');
	return <ValueContext.Provider value={{ value, handleChange }}>{children}</ValueContext.Provider>;
};
