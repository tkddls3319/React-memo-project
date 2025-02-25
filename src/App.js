import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextInput from './components/TextInput.js';
import Select from './components/Select.js';
const contryOptions = ['한국', '중국', '미국', '일본'];

function App() {
  const [formValue, setFormValue] = useState({
    name: '',
    contry: '',
    address: '',
  });

  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>1. 이름이 무엇인가요?</h1>
          <TextInput
            value={formValue.name}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                name: value,
              }));
            }}
          />
        </div>
        <div className="form-item">
          <h1>2. 사는 곳은 어딘가요??</h1>
          <Select
            value={formValue.contry}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                name: value,
              }));
            }}
            options={contryOptions}
          />
        </div>
        {formValue.contry === '한국' && (
          <div className="form-item">
            <h1>2-1. 한국 어디에 사나요?</h1>
            <TextInput
              value={formValue.address}
              setValue={() => {
                setFormValue((state) => ({
                  ...state,
                  address: value,
                }));
              }}
            />
          </div>
        )}
        <div className="button-group">
          <button
            onClick={() => {
              alert('저장되었습니다.');
              setFormValue({
                name: '',
                contry: '',
                address: '',
              });
            }}
            disabled={!formValue.name || !formValue.contry}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
