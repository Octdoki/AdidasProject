
import { useState } from "react";
import { LoginWrap  } from "./LoginStyle";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { login } from "../../store/modules/authSlice";
 
 
const Login = () => {
    
    const [user, setUser] = useState({
        email : '' , password : ''
    })

    const {dataList} = useSelector(state => state.auth)
    const emailRef = useRef()
    const { email, password} =user

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onInput=(e)=>{
        const { name , value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!email || !password ) { alert('틀림')}

        dispatch(login(user))
        navigate(`/logout`)

        setUser({
            email : ' ',
            password : '',
        })
        emailRef.current.focus()
    }
    return (
        <LoginWrap>
            <div className="inner">
            <h2>로그인 페이지 입니다.   </h2>
            <form onSubmit={onSubmit} >
                <p>
                    <label>이메일 </label>  
                    <input type="email"   placeholder="로그인정보:abc@naver.com"value={email} name="email" ref={emailRef} onChange={onInput}
                   />
                </p>                
                <p>
                    <label>비밀번호 </label>  
                    <input type="password"   placeholder="로그인정보:a1234"value={password} name="password" onChange={onInput} />
                </p>
                <p><button type="submit">로그인</button></p>
            </form>
            </div>

        </LoginWrap>
    );
};

export default Login;