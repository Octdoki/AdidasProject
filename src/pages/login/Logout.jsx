 
import { LogoutWrap } from "./LoginStyle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/modules/authSlice";
 

const Logout = () => {
    const {authed, user} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onGo =() =>{
        dispatch(logout())
        navigate(`/login`)
    }
    return (
        <LogoutWrap>
             <div className="inner">
                
                    
                    <>
                    <h2>방문해 주셔서 감사합니다.<br/> 다시 방문해주세요</h2>
                    <h3><span> {user.username} 님 이용해주셔서 감사합니다 </span> </h3>
                     
                    <p> <button onClick={onGo} >로그아웃</button> </p>
                </>  
                    
            </div>
        </LogoutWrap>
    );
};

export default Logout;