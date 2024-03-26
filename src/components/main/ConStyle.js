import styled from 'styled-components'

export const Con1Wrap  = styled.div`
width:100%; height: auto;
        box-sizing: border-box; 
        .introWrap {
            display: flex;
            justify-content: space-between;
            line-height: 50px;
                    letter-spacing: -1px;

        }
        h3{ font-family: 'Lato',sans-serif;
                    font-size: 40px;
                    font-weight: 500;
                    word-break: keep-all;
                    line-height: 50px;
                    letter-spacing: -1px;
               }
               .read {   line-height: 70px; display:block; font-family: 'Lato', sans-serif; font-weight:bold;   
                    img { position:relative; left:10px; top:0; width: 20px;  margin-top: 25px;}
                }
        .cart-box { margin-top: 15px; display: flex; justify-content: space-between; flex-wrap: wrap;  
        article { width: 23%; padding: 20px; box-sizing: border-box; margin-bottom: 30px; text-align: center; 
            div {margin-bottom: 25px; }
            img { width: 100%;  height: 300px;}
            h3 {font-size: 16px; margin-bottom: 10px;}
            h4 {font-size: 20px; line-height: 1.3; font-weight: 300;margin-bottom: 20px; }
            p { width: 90%; margin: auto; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;
                button { background: #333; padding: 8px 45px; vertical-align: middle; color:#fff;
                &.off { background: tomato; padding: 8px 45px; vertical-align: middle;  }
                span { font-size: 18px; }
                }
            }
        }
    }
 
    .more {
        background: #000000;
        color: #ffffff;;
        border: 1px solid #000000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    height: 44px;
    width: max-content;
    font-family: var(--gl-body-font-set-family-functional-8),var(--gl-font-family-fallback);
    font-size: var(--gl-body-font-set-size-functional-8);
    font-style: var(--gl-body-font-set-style-functional-8);
    font-weight: var(--gl-body-font-set-weight-functional-8);
    letter-spacing: var(--gl-body-font-set-letterspacing-functional-8);
    line-height: var(--gl-body-font-set-lineheight-functional-8);
    -webkit-text-decoration: var(--gl-body-font-set-decoration-functional-8);
    text-decoration: var(--gl-body-font-set-decoration-functional-8);
    text-transform: var(--gl-body-font-set-case-functional-8);
    }

    .con3Swiper{
        height: 100%;
        img{width: 90%; height: 300px;}
        
    }
    

`
export const Con2Wrap =styled.section`
    width:100%; height:600px; background-color:#faf6ec; 
    ul {
        li { width:50%; height:600px; float:left; position:relative;
            &.adventImg { background-image: url("./images/con2.jpg");
             background-size:auto 100%; 
             background-position: 30%; background-repeat:no-repeat; }
            div {
                width:50%; position:relative; left:50%; transform: translateX(-50%); margin-top: 130px; transition: opacity 1s; 
                h3 { 
                    font-family: 'Lato',sans-serif;
                    font-size: 40px;
                    font-weight: 500;
                    word-break: keep-all;
                    line-height: 50px;
                    letter-spacing: -1px;
                }
                p { font-size: 19px; line-height:35px; font-weight: 400; margin:40px 0px; word-break:keep-all; }
                .read { width:40%; display:block; font-family: 'Lato', sans-serif; font-weight:bold;    line-height:20px;
                    img { position:relative; left:20px; top:0; width: 20px; }
                }
            }
        }
    }

`
export const Con4Wrap =styled.div`
    margin-bottom: 200px;
    ul{
        display: flex;
        li{
            width: 50%;
            margin: 5px;
            img {
                display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
            }
            p{
                margin-top: 48px;
                h4{font-weight: 500; font-size: 24px;}
                span{display: block; margin-top: 24px;}
            }
        }
    }
`