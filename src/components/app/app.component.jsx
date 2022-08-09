import './app.style.scss';
import Header from '../header/header.component';
import About from '../about/about.component';
import Introduction from '../introduction/introduction.component';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <main>
          <Introduction />
{/*           <About /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
