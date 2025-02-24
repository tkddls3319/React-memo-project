import { useCallback, useEffect, useState } from 'react';

function Counter() {
  console.log('Render Counter!');
}

const [value, setValue] = useState(0);

useEffect(() => {
  console.log('useEffect : 컴포넌트가 마운트 될 떄, 한 번 호출.');

  const eventHandler = () => {
    console.log('click body');
  };

  document.body.eventHandler('click', eventHandler);

  return () => {
    console.log('useEffect return : 컴포넌트가 언마운트 될 때 한 번 호출.');
    document.body.removeEventListener('click', eventHandler);
  };
}, []);

useEffect(() => {
  console.log('컴포넌트가 마운트 될 때 + value가 변경되면');

  return () => {
    console.log('새로 useEffect를 수행하기 전에');
  };
}, [value]);


const increaseValue = useCallback(()=>{
    setValue(value +1);
}[]);


return (<div><h1></h1></div>)


export default Counter;
