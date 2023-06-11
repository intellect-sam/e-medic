import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Container } from "../../../styles/reusableElements.styled";
import Logo from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate  = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth as Auth, email, password);
      navigate('/dashboard')
      console.log(user);
    } catch (error) {
      // handle errors here
      const errorCode = (error as { code: string }).code;

      if (errorCode === "auth/wrong-password") {
        setError("Wrong password");
      } else {
        setError("User not found, check you mail and password well");
      }
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo size="sm" />
        </Link>
      </LogoContainer>
      <LoginFormContainer>
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle>Welcome Back</FormTitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormField type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <FormField type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <FormFooter>
            <FormFooterText>Forgot your password?</FormFooterText>
            <FormFooterLink onClick={handleForgotPassword}>Reset Password</FormFooterLink>
          </FormFooter>
          <FormButton type="submit">Login</FormButton>
          <FormFooter>
            <FormFooterText>Don't have an account?</FormFooterText>
            <Link to="/register">
              <FormFooterLink>Sign up</FormFooterLink>
            </Link>
          </FormFooter>
        </LoginForm>
      </LoginFormContainer>
    </Container>
  );
};

export default Login;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 300px;
  padding: 24px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 5px;
  text-align: center;
  font-weight: lighter;
  font-style: italic;
`

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
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
  margin-top: 9px;
  font-size: 10px;
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
    color: #3498db;
    cursor: pointer;
  }
`;
