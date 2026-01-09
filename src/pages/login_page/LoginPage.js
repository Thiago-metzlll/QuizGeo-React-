import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./../../components/ui/input/Input";
import LoginText from "./../../components/ui/login_text/LoginText";
import styles from "./LoginPage.module.scss"
import EnterBtn from "./../../components/ui/allBtns/enter.btn/EnterBtn";
import TextBtn from './../../components/ui/allBtns/text.btn/TextBtn';
import EnterpriseBtn from "./../../components/ui/allBtns/empresa.btn/EnterpriseBtn";
import { useState } from "react";
import { useAuth } from "./../../../src/context/AuthContext"
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const emailTeste = 'usuarioteste@gmail.com';
    const senhaTeste = '123456';

    const [email, setEmail] = useState(emailTeste);
    const [emailError, setEmailError] = useState('');
    const [senha, setSenha] = useState(senhaTeste);
    const [senhaError, setSenhaError] = useState('');
    const navigate = useNavigate();



    const { login } = useAuth()

    const handleLogin = () => {
        let valid = true;

        if (!email.includes('@')) {
            setEmailError('Email inválido');
            valid = false;
        } else if (email !== emailTeste) {
            setEmailError('Email não corresponde ao cadastro.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (senha.length < 6) {
            setSenhaError('A senha deve ter pelo menos 6 caracteres.');
            valid = false;
        } else if (senha !== senhaTeste) {
            setSenhaError('Senha incorreta.');
            valid = false;
        } else {
            setSenhaError('');
        }

        if (valid) {
            login();
            navigate('/cards');
        }
    };
    return (
        <div className={styles.bodylogin}>
            <div className={styles.loginContainer}>
                <LoginText texto="Login" />
                <p className={styles.subtitle}>Acesse seus cartões e quizzes</p>

                <div className={styles.inputGroup}>
                    <Input
                        placeholder="Usuário"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {emailError && <p className={styles.errorMessage}>{emailError}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <Input
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    {senhaError && <p className={styles.errorMessage}>{senhaError}</p>}
                </div>

                <div className={styles.buttonGroup}>
                    <EnterBtn texto="Entrar" onClick={handleLogin} />
                </div>

                <div className={styles.footer}>
                    <span>Entrar como empresa</span>
                    <EnterpriseBtn icon={faCircleUser} />
                </div>
            </div>
        </div>
    );
}

export default LoginPage