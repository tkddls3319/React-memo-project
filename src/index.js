import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurseCard from './components/CourseCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CurseCard
      img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/220208_122751/%EC%BD%94%EC%8A%A4%EC%B9%B4%EB%93%9CB_PC.png"
      tags={['발표', '패키지', '최대할인']}
      title="비즈니스 올인원, 방구석 어학연수 패키지"
      startPrice={390000}
      types={['동영상강의']}
    />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
