import './app.style.scss';
import Header from '../header/header.component';
import About from '../about/about.component';
import Introduction from '../introduction/introduction.component';
import Skills from '../skills/skills.component';
import Projects from '../projects/projects.component';
import Modal from '../modal/modal.component';
import { useContext, useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/app-context.context';

function App() {
  const {isModalOpen, modalContent} = useContext(AppContext);

  return (
    <div className="app">
      <div className={`app__container ${isModalOpen ? 'blur': ''}`}>
        <Header />
        <main>
          <Introduction />
{/*           <About /> */}
          <Skills />
          <Projects />
        </main>
      </div>
      {isModalOpen && modalContent ? <Modal>{modalContent}</Modal> : null}
    </div>
  );
}

export default App;
