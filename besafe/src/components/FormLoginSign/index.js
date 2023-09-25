import React from "react";
import { LoginPage, LoginForm, Input, Button, ForgotPasswordLink, } from "./FormLoginSignStyles"; 
import logoImage from "../../assets/logo.png";



const FormLoginSign = () => {
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
            <label htmlFor="nome"></label>
            <Input type="text" id="enome" name="enome" placeholder=" Insira seu nome Completo" />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <Input type="email" id="email" name="email" placeholder="Insira seu e-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <Input type="password" id="password" name="password" placeholder="Insira sua senha" />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <Input type="password" id="password" name="password" placeholder="Insira novamente sua senha" />
          </div>
          <Button type="submit">Criar Conta</Button>
        </form>
    </LoginForm>
    </LoginPage>
  );
};

export default FormLoginSign;