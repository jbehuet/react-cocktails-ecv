import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ApplicationContext } from '../domain/application.store';
import { authRegister, authLogin } from "../domain/authentication/authentication.actions";
import './Auth.css';

export default function Login() {
    const history = useHistory();
    const { state, dispatch } = useContext(ApplicationContext);
    const [displayRegisterFrom, setDisplayRegisterForm] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        authRegister(dispatch, form);
    }

    const login = (e) => {
        e.preventDefault();
        authLogin(dispatch, { email: form.email, password: form.password });
    }

    useEffect(() => { if (state.isLoggedIn) history.push('/') }, [state.isLoggedIn, history])

    return (
        <div className="auth">
            <h1>Cocktail app !</h1>
            <form>
                {state.error && <p className="error">{state.error.message}</p>}
                {displayRegisterFrom ?
                    <>
                        <input name="name" type="text" placeholder="Name" onChange={onChange} />
                        <input name="email" type="email" placeholder="Email" onChange={onChange} />
                        <input name="password" type="password" placeholder="Password" onChange={onChange} />
                        <button onClick={register}>Register</button>
                        <p>Do have an account ?</p>
                        <p className="no-margin-top"><span onClick={() => setDisplayRegisterForm(!displayRegisterFrom)}>Login</span></p>
                    </>
                    :
                    <>
                        <input name="email" type="email" placeholder="Email" onChange={onChange} />
                        <input name="password" type="password" placeholder="Password" onChange={onChange} />
                        <button onClick={login}>Connexion</button>
                        <p>Don't have an account ?</p>
                        <p className="no-margin-top"><span onClick={() => setDisplayRegisterForm(!displayRegisterFrom)}>Create your account</span></p>
                    </>
                }
            </form>
        </div>
    )

}