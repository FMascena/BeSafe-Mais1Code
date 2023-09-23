import React from "react";
import { LoginPage, LoginForm, Input, Button, ForgotPasswordLink, } from "./FormLoginStyles"; 
import logoImage from "../../assets/logo.png";



const FormLogin = () => {
  return (
    <LoginPage>
      
       <img
        src={logoImage}
        alt="Logo do App"
        style={{
          width: "20%", 
          display: "block", 
          margin: "0 auto" 
        }}
      />
      <LoginForm>
        <form>
          <div className="form-group">
            <label htmlFor="email"></label>
            <Input type="email" id="email" name="email" placeholder="Seu melhor e-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <Input type="password" id="password" name="password" placeholder="Senha" />
          </div>
          <Button type="submit">Entrar</Button>
        </form>
        <ForgotPasswordLink href="/link-para-esqueceu-a-senha">Esqueceu a senha?</ForgotPasswordLink>
      </LoginForm>
    </LoginPage>
  );
};

export default FormLogin;
