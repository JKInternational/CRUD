import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useCallback } from 'react';
import './Admin.css';


class Admin extends React.Component {


  render() {


    return <>
      <div className="Admin">
        <ul className="container1">
          <li className='tap1'>
            <h1>상품 등록</h1>
            <div className='tapTop'>
              <div className='tapTop1'>
                <DropdownButton id="dropdown-basic-button" title="카테고리">
                  <Dropdown.Item href="#/action-1">티찹-파워툴</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">티찹-컴프레서</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">블루샤크</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">워디툴</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">기타</Dropdown.Item>
                </DropdownButton>
                <input type="checkbox" id='newArrival' />신상품
                <input type="checkbox" id='bestItem' />베스트
              </div>
              <div>
                <button type='submit' className='modify'>수정</button>
                <button type='submit' className='delete'>삭제</button>
                <button type='submit' className='submitBtn'><h3>등록</h3></button>
              </div>
            </div>     
          </li>
          <li>
            <hr />
          </li>
          <li>
            <input type='text' placeholder='제목' className='title' />
          </li>
          <li>
            
            <input type='text' placeholder='메인화면 이미지 첨부 파일' className='result1' />
            <button type='button' className='find1'>찾아보기</button>
          </li>
          <li>
            <input type='text' placeholder='본문 이미지 첨부 파일' className='result2' />
            <button type='button' className='find1'>찾아보기</button>
          </li>
          <li>
            <textarea type='text' placeholder='본문 내용' className='textContent1' />
          </li>
          <li>
            <textarea type='text' placeholder='태그 입력' className='textContent1' />
          </li>
        </ul>

        <ul className="container2">
          <li className='tap1'>
            <h1>게시글 등록</h1>
            <button type='submit' className='submitBtn'><h3>등록</h3></button>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <input type='text' placeholder='제목' className='title' />
          </li>
          <li>
            <textarea type='text' placeholder='본문 내용' className='textContent1' />
          </li>
          <li>
            <input type='text' placeholder='첨부 파일' className='result1' />
            <button type='button' className='find1'>찾아보기</button>
          </li>
        </ul>

        


      
      </div>

    </>;
  }
}

export default Admin;