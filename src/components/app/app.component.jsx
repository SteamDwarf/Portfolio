import './app.style.scss';
import Header from '../header/header.component';
import Introduction from '../introduction/introduction.component';
import Skills from '../skills/skills.component';
import Projects from '../projects/projects.component';
import Modal from '../modal/modal.component';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context.context';
import Contact from '../contact/contact.component';
import Footer from '../footer/footer.component';

function App() {
  const {isModalOpen, modalContent} = useContext(AppContext);

  return (
    <div className="app">
      {isModalOpen && modalContent ? <Modal>{modalContent}</Modal> : null}
      <div className={`app__container ${isModalOpen ? 'blur': ''}`}>
        <Header />
        <main>
          <Introduction />
          <Skills />
          <Projects />
          <Footer />
          {/* <Contact /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
