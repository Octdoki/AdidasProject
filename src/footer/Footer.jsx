import { FooterBottom, FooterWrap } from "./FooterStyle";

 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
              
                <ul>
                    <li><a href="#">문의하기</a></li>
                    <li><a href="brand.html">브랜드 소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보정책</a></li>
                </ul>

                <FooterBottom>
                    <p>
                        상호: 아디다스코리아(유) | 대표자: 곽근엽<br />
                        주소 : 서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 (06620)<br />
                        이메일: service@onlineshop.adidas.co.kr
                    </p>
                    
                    <ul>
                        <li><a href="#"><img src="./images/instagram.png" alt="instagram icon" /></a></li>
                        <li><a href="#"><img src="./images/twitter.svg" alt="twitter icon" /></a></li>
                    </ul>
                </FooterBottom>
            </div>
            
        </FooterWrap>
    );
};

export default Footer;
