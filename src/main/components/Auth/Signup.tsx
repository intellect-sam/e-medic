import React, { useState, FormEvent } from "react";
import styled from "styled-components"
import { Container } from "../../../styles/reusableElements.styled";
import Logo from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";



const SignUp: React.FC = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()




  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match")
    }

    try {
      setError('')
      setLoading(true)
      const user = await createUserWithEmailAndPassword(auth as Auth, email, password)
      navigation('/login')
      console.log(user)
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  };

  return (
    <Container>
    <LogoContainer>
        <Link to="/">
          <Logo size="sm" />
        </Link>
      </LogoContainer>
    <RegisterFormContainer>
      
      <RegisterForm onSubmit={handleSubmit}>
        <FormTitle>Create your account</FormTitle>
        <FormDetails>Please note that email verification is required for signup. 
          Your email will only be used to verify your identity for security purposes.</FormDetails>
          {error && <ErrorMessage>{error}</ErrorMessage>}
     
        <FormField type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <FormField type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <FormField type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <FormField type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
        <FormButton type="submit" disabled={loading} >Sign Up</FormButton>
        <FormFooter>
          <FormFooterText>Already have an account?</FormFooterText>
          <Link to="/login">
          <FormFooterLink>Login</FormFooterLink>
          </Link>
        </FormFooter>
      </RegisterForm>
    </RegisterFormContainer>
    </Container>
  );
};

export default SignUp;


const LogoContainer = styled.div`
  display: flex;
 justify-content: center;
`

const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 5px;
  text-align: center;
  font-weight: lighter;
  font-style: italic;
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 300px;
  padding: 24px;
  border-radius: 4px;
`;

const FormDetails = styled.h5`
  font-size: 10px;
  font-weight: lighter;
  margin-bottom: 1px; 
  color: grey;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 24px;
`;

const FormField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const FormFooter = styled.div`
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
`;

const FormFooterText = styled.span`
  margin-right: 4px;
`;

const FormFooterLink = styled.a`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
