import React from 'react';


function Home() {
    return(
<div id='page'>
    
<nav className='title'>
    <button id='talk1'>The Talk</button>
    <button className='talk2'>Interview Directory</button>
    <button className='talk2'>World Guide</button>
</nav>
<section className='second'>
<h3 className='title'>NEW INTERVIEW</h3>
  <img src='https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg' alt="matt" id='m1'/>
  

    <h3 className='two'>INTERVIEW DIRECTORY</h3>
<div className='img-container'>
    <img src='http://the-talks.com/wp-content/uploads/2017/06/David-Chipperfield-01.jpg' alt="David"/>
    <div className="center">ARCHITECTURE</div>
</div>

<div className='img-container'>
    <img src='https://the-talks.com/wp-content/uploads/2015/04/Anish-Kapoor-01-690x360.jpg' alt="Anish"/>
    <div className="center">ART</div>
    </div>

<div className='img-container'>
    <img src ='https://tse2.mm.bing.net/th?id=OIP.n99Mo4koIDpxuqKsBHQw8AHaEK&pid=Api&P=0&w=281&h=159' alt="Yohji"/>
    <div className="center">FASHION</div>
    </div>

<div className='img-container'>
<img src ='https://tse2.mm.bing.net/th?id=OIP.sn0_ks7br7hzmpdq6oaEtAHaD2&pid=Api&P=0&w=366&h=191' alt="Jim"/>
<div className="center">FILM</div>
</div>

<div className='img-container'>
<img src ='https://tse4.mm.bing.net/th?id=OIP.kAlw-E_1wRQDh83FT5aHkAHaD2&pid=Api&P=0&w=334&h=174' alt="Massimo"/>
<div className="center">FOOD</div>
</div>

<div className='img-container'>
<img src ='https://tse4.mm.bing.net/th?id=OIP.Q1pYrwFPAvqJTdjcTZI5gAHaD3&pid=Api&P=0&w=333&h=174' alt="Bret"/>
<div className="center">LITERATURE</div>
</div>

<div className='img-container'>
<img src ='https://tse3.mm.bing.net/th?id=OIP.Md_zAAoHgs2-Jje5lpRQEgHaEK&pid=Api&P=0&w=309&h=174' alt="Alicia"/>
<div className="center">MUSIC</div>
</div>

<div className='img-container'>
<img src ='https://tse2.mm.bing.net/th?id=OIP.EyBmS2tOHzxW-8r16zjxeAHaE9&pid=Api&P=0&w=273&h=184' alt="Lebron"/>
<div className="center">SPORTS</div>
</div>

</section>
</div>
    ) 
}

export default Home;