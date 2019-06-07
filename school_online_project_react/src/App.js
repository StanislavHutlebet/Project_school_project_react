import React from 'react';
import Header from './components/main-page/header';
import Main from './components/main-page/main';
import Footer from './components/main-page/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
