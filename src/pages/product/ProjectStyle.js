import styled from 'styled-components'

export const ProductWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 {  margin-bottom:50px; font-weight:700; }

    .cart-box { display: flex; justify-content: space-between; flex-wrap: wrap;  
        article { width: 23%; border: 1px solid #999; padding: 20px; box-sizing: border-box; margin-bottom: 30px; text-align: center; 
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


`
export const ProductSearchWrap = styled.div`
margin-bottom:30px; position:relative;
 form {
    display: flex;
    justify-content: space-between;
    p {        
        /* input[type=text] { width:350px; box-sizing:border-box; height:45px; padding:10px; border:1px solid #999; }
        button { width:100px; height:45px; vertical-align:top; position:relative;} */
        .search-wrap {
        display: flex;
        margin-right: 5px;
        min-width: 280px;
        max-width: 280px;
        position: relative;
        width: 100%;
        height: 32px;

        input {
            background-color: rgb(247, 249, 249);
            border: 1px solid #dcdcdc;
            border-radius: 19px;
            padding: 8px 12px 8px 40px;
            width: 100%; 
            outline-color: #000000;
        }
        .search-icon {
            fill: rgb(68, 68, 68);
            height: 18px;
            left: 12px;
            position: absolute;
            top: 8px;
            width: 18px;
        }
    }
        select { width:200px; height:45px; box-sizing:border-box; padding:10px;  border:1px solid #999; }
        span { margin-left:15px; cursor: pointer;}
    }
 }

`
