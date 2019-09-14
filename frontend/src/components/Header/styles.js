import styled from 'styled-components';


export const Container = styled.div`
  .main-header{
    height: 80px;
    background: #f5f5f5;
    padding: 15px 50px;
    display: block;
  }
  img{
    float:left;
    margin-left: 10%;
  }
  .buttons{
    float:right;
    display:inline-flex;
    width: 50px;
    margin-right: 20%;
    margin-top: -2px;
  }
  a{
    text-decoration: none;
    padding: 15px 15px;
    font-size: 20px;  
    margin-top: 0;
  }

  button{
    padding: 10px 10px;
    background: none;
    color: #00a035;
    border: 1px solid;
    border-radius: 3px;
    font-size: 15px;
    margin-top: -7px;
  }
  img,a,button:hover{
    cursor: pointer;
    color: #006b2b;
  }
  img,a,button:active{
    color: #006b2b;
  }
  a:hover,a:active{
    text-decoration: underline;
  }
`;
