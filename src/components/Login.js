import React from "react";
import { useState } from "react";
import image from '../images/Login Image.png'
import styled from 'styled-components';

const Login=()=>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
return(
    <div>
      <Container>
      <LoginImage src={image} height={400} width={450} alt="Login" />
      <LoginContainer>
<LoginTitle>Login</LoginTitle>
<p style={{fontWeight:'bold'}}>Login ID</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{fontWeight:'bold'}}>Password</p>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

<TopCheck>
<CheckboxLabel>
          <Checkbox
            type="checkbox"
          />
          Remember Me
        </CheckboxLabel>
        <ChangePsw><a href="#" style={{textDecoration:"none"}}><p >Change Password</p></a></ChangePsw>
</TopCheck>
<CheckboxLabel>
          <Checkbox
            type="checkbox"      
          />
          I Agree to the  <a href="#terms" style={{textDecoration:'none'}}> Terms and Conditions</a>
        </CheckboxLabel>
        <Button>Login</Button>
      </LoginContainer>
     
    </Container>
    </div>
)
}

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content:center;
  @media (max-width: 1025px) {
    flex-direction: column;
    align-items:center;
  }
`;

const LoginTitle= styled.div`
display:flex;
font-weight:bold;
margin:auto;
font-size:35px;
font-family:sans-serif;
`;

const TopCheck= styled.div`
display:flex;
justify-content:space-between;

@media (max-width: 376px) {
  width:100px;
}
`;


const ChangePsw = styled.div`
text-decoration:none;
@media (max-width: 376px) {
  margin-left:125px;
}
`;

const LoginImage = styled.img`
margin-top:140px;
  @media (max-width: 576px) {
    width:400px;
  }
  @media (max-width: 541px) {
    width:340px;
    margin-right:80px;
  }
  @media (max-width: 414px) {
    width:200px;
  }
  @media (max-width: 1025px) {
    margin-left:120px;
    margin-top:50px;
  }
  @media (max-width: 376px) {
    height:300px;
    margin-right:117px;
  }
`;

const LoginContainer = styled.div`
display:flex;
flex-direction:column;
width:600px;
padding:30px;
margin-top:140px;
margin-left:100px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
@media (max-width: 1230px) {
  width:500px;
}
@media (max-width: 1140px) {
  width:400px;
}
@media (max-width: 1036px) {
  width:350px;
}
@media (max-width: 541px) {
  width:340px;
  margin-right:80px;
}
@media (max-width: 415px) {
  width:320px;
  margin-right:90px;
}
@media (max-width: 376px) {
  margin-right:90px;
  width:280px;
}
`
;

const Input = styled.input`
  width: 96%;
  padding: 10px;
  border-radius:7px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight:bold;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin:auto;
  margin-top:30px;

  &:hover {
    background-color: #0056b3;
  }
`

;





export default Login;