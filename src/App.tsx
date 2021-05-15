import React from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

function App() {

  //сюда вынести стейт
  //передавать его в пропсы

  // --- не надо: useEffect проверяет localStorage и если он изменился перезаписывает стейт
  // -Скорее по кнопке set надо передавать

  // стейт передавать в счётчик

  // либо чтобы не выносить в каунтере следить за измением localStorage

  // Зачем CustomButton не понятно и что туда выносить



  return (
    <div className="App">
      <Settings />
      <Counter />
    </div>
  );
}

export default App;
