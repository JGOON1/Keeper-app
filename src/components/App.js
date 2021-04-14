import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../notes'


function App() {
  return (
    <div>
      <Header />
        {notes.map(entry => (
            <Note 
            key={entry.key}
            title={entry.title}
            content={entry.content}
            />
        ))}
      <Footer />
    </div>
  );
}

export default App;
