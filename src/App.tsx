import './App.css';
import Card from './card';

function App() {
  const listdemos = [
    { title: 'Speech app', src: './1.jpeg' },
    { title: 'Char app', src: './2.jpeg' },
    { title: 'Speech app', src: './1.jpeg' },
    { title: 'Speech app', src: './1.jpeg' },
    { title: 'Speech app', src: './1.jpeg' },
  ];
  return (
    <>
      <h2>Passionate About Technology</h2>
      <p className="read-the-docs ">
        Start discovering some of <code>@Muath A Alzoubi </code>works
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
