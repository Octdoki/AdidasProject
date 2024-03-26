import styled from 'styled-components'

export const AboutWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700;  margin-bottom:50px }
    .AboutHistory{ 
        display: flex;
        img {
            width: 400px; height: 400px;
        }
        p{
            margin-left: 30px ;
            margin-bottom: 20px;
            
            word-break: break-word;
        }
        iframe {
            /* width: 800px; height: 400px; */
        }
    }
`