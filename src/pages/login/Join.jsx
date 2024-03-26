import { JoinWrap  } from "./LoginStyle";
import Spinner from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { signup } from "../../store/modules/authSlice";
import { useRef } from "react";
import { useState } from "react";

const Join = () => {
    const [user,setUser] =useState({
        username : '',
        tel : '',
        email : '',
        password : '',
    })
    const { username ,
        tel ,
        email ,
        password ,} =user
    const onInput = (e)=>{
        const { name, value} = e.target   
        setUser({
            ...user,
            [name] : value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(!username || !password) return
        dispatch(signup (user))
        setUser({username : ' ', tel : ' ' , email: '', password : ''})
        nameRef.current.focus()
        navigate(`/login`)
    }
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const nameRef = useRef()
    return (
        <>  
  
            <JoinWrap>
                <div className="inner">
                <h2> 회원가입 </h2>
                <form onSubmit={onSubmit} >
                    <p>
                        <label> 이름 </label>  
                        <input type="text"  placeholder="홍길동" name="username" value={username} onChange={onInput}  ref={nameRef}/>
                    </p>                
                    <p>
                        <label> 전화번호 </label>  
                        <input type="tel" name="tel" placeholder="010-0000-0000"  value={tel} onChange={onInput}/>
                    </p>                
                    <p>
                        <label>이메일 </label>  
                        <input type="email" name="email"   placeholder="abc@naver.com"  value={email} onChange={onInput}/>
                    </p>                
                    <p>
                        <label>비밀번호 </label>  
                        <input type="password" name="password"   placeholder="a1234"  value={password} onChange={onInput} />
                    </p>
                    <p><button type="submit">회원가입</button>
                       <button >취소</button></p>
                </form>
                </div>

            </JoinWrap>
        </>
    );
};

export default Join;