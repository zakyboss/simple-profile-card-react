import React from 'react';
import ReactDOM from 'react-dom/client'
function App() {
return (
  <div className='container' style={{padding:'4px', border:'3px solid black', width:'300px', marginLeft:'20px'}}>
    <div className='imgContainer'>
    <img src="/profile.jpg" alt="Profile" style={{backgroundColor:'white', height:'300px',padding:'4px',borderRadius:'20px'}}/>
    </div>
    <div className='headerContainer'>
       < h1 style={{textDecoration:'underline'}}>
 Zakariya Mohamed
       </h1>
    </div>
    <main style={{marginTop:'-25px'}}>
      <p>Full stack developer , master in PHP and laravel but currently learning mern stack and loving it each step of the way ! </p>
     <span>
      <button style={{backgroundColor:'green'}}>HTML&CSS 💪</button>
      <button style={{backgroundColor:'gold'}}>Bootstrap 😘</button>
      <button style={{backgroundColor:'blue'}}>PHP💘</button>
      <button style={{backgroundColor:'teal'}}>Laravel🤟</button>
      <button style={{backgroundColor:'beige'}}>JS🥇</button>
      <button style={{backgroundColor:'aquamarine'}}>Tailwind CSS😘</button>
      <button style={{backgroundColor:'violet'}}>Git and github🔫</button>
     
     </span>
    </main>
    
  </div>
)
}

export default App;
