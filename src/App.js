import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'this is memo1',
      createdAt: 1740459712601,
      updatedAt: 1740459712601,
    },
    {
      title: 'Memo 2',
      content: 'this is memo2',
      createdAt: 1740459743113,
      updatedAt: 1740459743113,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos]; //useState으로 관리하는 객체는 불변성을 유지해야함 -> 새로운 객체 생성
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos); //새로운 객체 생성
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
