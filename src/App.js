/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['침대 추천', '식탁 추천', '책상 추천']);
  let [따봉, 따봉변경] = useState(0);
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '브랜드 침대 추천';
    글제목변경( newArray );
  }

  let [modal, modal변경] = useState(false); // modal창 스위치



  return (
    <div className="app">
      <div className="black-nav">
        <div>2D 인테리어</div>
      </div>
      <div className='center'>
        <img src={process.env.PUBLIC_URL + '/oneroom.jpg'} alt="copy url" />
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>😍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <button onClick={ 제목바꾸기 }>제목 변경</button>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
        <button onClick={ ()=>{ modal변경(!modal) }}>창 열기</button>
      </div>

      
      {
      modal == true
      ? <Modal></Modal>
      : null
      }


    </div>
    
  );
}

function Modal(){
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
