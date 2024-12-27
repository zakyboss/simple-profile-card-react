import React from 'react';
import ReactDOM from 'react-dom/client'
function Image(){
  return (<div className='imgContainer'>
  <img src="/profile.jpg" alt="Profile" style={{backgroundColor:'white', height:'300px',padding:'4px',borderRadius:'20px'}}/>
  </div>)
}
function Header(){
return (  <div className='headerContainer'>
       < h1 style={{textDecoration:'underline'}}>
 Zakariya Mohamed
       </h1>
    </div>)
}
function Main(){
  return (<main style={{marginTop:'-25px'}}>
  <p>Full stack developer , master in PHP and laravel but currently learning mern stack and loving it each step of the way ! </p>
</main>
  )

}
function Skills (props){
  let red = Math.floor(Math.random()*255)
  let green = Math.floor(Math.random()*255)
  let blue= Math.floor(Math.random()*255)
return (<span>
<button
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      >
        {props.language} {props.emoji}
      </button>  
 </span>)
}
function App() {
return (
  <div className='container' style={{padding:'4px', border:'3px solid black', width:'300px', marginLeft:'20px'}}>
       <Image/>
       <Header/> 
       <Main/>
       
       <Skills language='React' emoji='😘'/>  
       <Skills language='Laravel' emoji='💪'/>  
       <Skills language='Javascript' emoji='🔥'/>  
       <Skills language='HTML&CSS' emoji='🏆'/>  
       <Skills language='PostgreSql' emoji='🍹'/>  
       <Skills language='Tailwindcss' emoji='😍'/>  
  </div>
)
}

export default App;
