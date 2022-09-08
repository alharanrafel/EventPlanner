
import React from 'react
import React, { startTransition } from 'react';
import Home from './Component/Home';
import MdKeyboardArrowRight from 'react-icons/md';
import MdArrowForward from 'react-icons/md';
import {Link} from 'react-scoll';
import styled from 'styled-components';


export const HomeEleContainer =styled.div;
background : #0c0c0c;
display: felx;
justify-content:  center;
align-items: center;
padding: 0 30px;
height : 800px;
position :relative;
z-index: 1;

:befor{
    content: '';
    position : absolute;
    top: 0;
    laft: 0;
    right:0;
    bottom: 0;
    background:linear-gradient
    (180deg, 
        rgba(0,0,0,0,2) 0%,
   rgba(0,0,0,0,6) 100%
    );
    linear-gradient(180deg, rgba(0,0,0,0,2) 0%, transparent
    100%);
    z-index: 2;    
};


export const HomBg =styled.div;
positition: absolute;
top: 0;
right: 0;
bottom : 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;


export const VideoBg = styled.Video;
width: 100%;
height: 100% ;
-o-object-fit: Conver;
object-fit: conver;
background : #232a34;


export const HomeContent = srtyed.div;
z-index:3;
max-width: 1200px;
position :Absolute;
padding: 8px 24px;
display: flex;
flex-direction: colum;
align-items: center;


export const HomeH1= styled.H1;
color :#fff;
font-size: 48px;
text-align:center;


@media screen and (max-width: 768px){
    font-size:40px;
}

@media screen and (max-width: 480px){
    font-size:32px;
}


export const HomeP = styled.p;
margin-top: 24px;
color;#fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size:24px;
}

@media screen and (max-width: 480px){
    font-size:18px;
}

export const HomeBtnWrapper=styled.div;
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;


export const ArrowForward=styled(MdArrowForward);
margin-top: 32px;
display: flex;
flex-direction:column;
align-item: center;


export const ArrowForward = styled(MdArrowForward);
margin-left: 8px;
font-size: 20px;


export const ArrowRight = styled(MdKeyboardArrowRight)
margin-left: 8px;
font-size: 20px;


export const ArrowRight =styled(MdKeyboardArrowRight);
 margin-left : 8px;
 font-size : 20px;


export const Button = styled(Link);
border-radius: 50px;
background: ${({primary})=> (primray? '#01BF71 : #010606')
};

white-space :nowrap;
padding:${({big}) =>(big ? '14px 48px' :12px 30px)};
color: ${({dark})=> (dark? '#010606' :'#fff' )};
font-siz: ${({fontBig})=>(fintBig ? '20px': '16px')};
outline: none;
border: none;
cursor:Pointer 
display:flex;
justify-content: center;
align-items: center;
transition: all0.2s ease-in-out;


&hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ?   '#fff':'#01BF71')
};

};

export const AboutusContainer = styled.div;
color : #fff;
background : ${({lightBg})=> (lightBg ? '#f9f9f9' : '010606')
};

@media screen and (max-width : 768px){
    padding: 100px;
};
export const AboutusWrapper =styled.div ;
display : grid;
z-index : 1;
height : 860px;
width: 100%;
max-width : 1100px;
margin-right : auto;
margin-left : auto;
padding: 0 24px;
justify-content : center;


export const AboutRow = style.div;
display: grid;
grid-auto-columns : minmax(auto, 1fr);
align-items: center ;
grid-template-area: ${({imgStart})=> (imgStart ? 'col2 col1': 'col1 col2' )};


@media screen and(max-width: 768px){
    grid-template-areas : ${({imgStart}) => 
    (imgStart ? 'col1' 'col2' : 'col1 col1' 'col2 col2')}
};


export const column1 =styled.div;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-erea: col1;
   


  export const column2 =styled.div;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-erea: col2;
   


  export const TextWrapper =styled.div;
  max-width: 540px;
  padding-top : 0;
  padding-bottom: 60px;

  
  

   
/* export const TopLine = styled.p;
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-spacing : 1.4px;
text-transition: uppercase;
margin-bottom: 16px;


export const Heading = styled.h1;
margin-bottom : 24px;
font-size: 48px;
line-height : 1.1;
line-weight: 600;
color : ${({ lightText })=>(lightText ? '#f7f8fa': '010606')}

@media screen and (max-width: 480px){
    font-size: 32px;
};


export const Subtitle = styled.p;
max-width: 440px;
margin-bottom: 35px;
font-size : 18px;
line-height : 24px;
color: $ {({darkText}) => (darkText ? '#010606' : '#fff')};


export const BtnWrap = styled.div;
display: flex;
justify-content : flex-start;


export const ImgWrap = styled.div;
max-width: 555px;
height : 100%;

export const Img = styled.img;
width: 100%;
margin:0 0 10px 0;
padding-right: 0; */










