import styled from 'styled-components';


export const Container = styled.div`
  height: 80px;
  background: #f5f5f5;
  padding: 15px 50px;
  a{
    margin-right: 50px;
    padding: 15px 40px;
    float: right;
    font-size: 20px;  
  }
  button{
    margin: 7px 0;
    padding: 10px 10px;
    background: none;
    color: #1c6134;
    border: 1px solid;
    border-radius: 3px;
    float: right;
    font-size: 15px;
  }
  img,a,button:hover{
    cursor: pointer;
    color: #0e4f23;
  }
  img,a,button:active{
    color: #0e4f23;
  }
`;
