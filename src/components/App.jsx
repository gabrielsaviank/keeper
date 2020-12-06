import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from "../notes";


const App = () => {
    return(
        <div>
            <Header/>
            {notes.map((noteItem) => {
                return(
                    <Note
                        key={noteItem.key}
                        title={noteItem.title}
                        content={noteItem.content}
                    />
                );
            })};
            <Footer/>
        </div>
    );
};

export default App;