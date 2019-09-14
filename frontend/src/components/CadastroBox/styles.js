import styled from 'styled-components';

export const Container = styled.div`
text-align:center;
.header{
    width:100%;
    height: 7%;
    background:#006b2b;
}
img{
    margin: -5% 0;
    height: 30%;
    width: 30%;
}
h2{
    color: #1c6134;
    margin:7% 0;
    font-size: 25px;
}  
.main{
      margin: 5% 35%;
      height: 50%;
      width: 30%;
      color: #1c6134;
      border: 1px solid #1c6134;
      border-radius:5px;
  }
  input{
      font-size: 15px;
      padding: 7px;
      display: inline-block;
      border: none;
      border-bottom: 1px solid #1c6134;
      width: 60%;
      margin: 0 20%;
      margin-bottom: 10%;
  }
  label{
    display: inline-block;
    font-size: 16px;
    float:left;
    margin-left: 20%;
}
button{
    margin-bottom: 10%;
    cursor:pointer;
    color: white;
    padding: 10px 50px;
    font-size: 17px;
    background: #006b2b;
    border:none;
    border-radius: 3px;
}
button:hover{
    background:#0d5b27;
}


`;
