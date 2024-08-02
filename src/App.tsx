import React from 'react';
import './App.css';
import Card from './card';

function App() {
  
  const listdemos = [
    { title: 'Speech app', src: './1.jpeg' },
    { title: 'Chat app', src: './2.jpeg' },
    { title: 'Speech 2 text app', src: './3.jpeg' },
    { title: 'Read Text app', src: './4.jpeg' },
    { title: 'log in form', src: './4.jpeg' },
    { title: 'Draw App', src: './3.jpeg' },
    { title: 'Editor App', src: './2.jpeg' },
    { title: 'Images View App', src: './1.jpeg' },
  ];
  return (
    <>
      <h2>Passionate About Technology</h2>
      <p className="read-the-docs ">
        Start discovering some of <code><a href='#'> @Muath A Alzoubi</a> </code>works
      </p>

      <div className="grid-container">
      
        {listdemos.map((i) => (
         
          <Card key={i.title} title={i.title} imgSrc={i.src} />
        
        ))}
      </div>
    </>
  );
}

export default App;
