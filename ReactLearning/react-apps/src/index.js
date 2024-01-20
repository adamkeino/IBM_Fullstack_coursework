import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

// This is how it it is done from React 18 onwards
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App color="rgb(20,224,208" size="40px"/>);
root.render(<App color2="rgb(0,207,209)" size="35px"/>)