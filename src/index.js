import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurseCard from './components/CourseCard';
import Accordion from './components/Accordion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ fontsize: '2rem', padding: 30 }}>
    <Accordion title="This is a Title" content="This is a content" />
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
