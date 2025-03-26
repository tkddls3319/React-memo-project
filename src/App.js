import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { useCallback, useState } from 'react';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 5000); //setItem을 5초에 한번만 저장, 바로 setItem 함수를 사용하는게아니라 debounce에서 리턴한 debouncedSetItem를 사용해야 적용됨.

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        //새로운 객체 생성
        const newMemos = [...memos]; //useState으로 관리하는 객체는 불변성을 유지해야함 -> 새로운 객체 생성
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);
        return newMemos;
      });
      // localStorage.setItem('memo', JSON.stringify(newMemos));
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();

      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];

      // localStorage.setItem('memo', JSON.stringify(newMemos));
      debouncedSetItem('memo', newMemos);

      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debouncedSetItem('memo', newMemos);
        // localStorage.setItem('memo', JSON.stringify(newMemos));

        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
