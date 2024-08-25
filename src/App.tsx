import React from 'react';
import Section from './components/Section';
import SubSection from './components/SubSection';
import MathExample from './components/MathExample';
import NavBar from './components/NavBar';
import './styling/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">

          <Section title="Introduction">
            <p>This is a sample React app that mimics the appearance of a LaTeX document.</p>
          </Section>

          <Section title="Mathematics">
            <SubSection title="Integrals">
              <p>Here is an example of an integral:</p>
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
              <MathExample />
            </SubSection>
          </Section>

          <Section title="Conclusion">
            <p>Thanks for reading!</p>
          </Section>
        
      </div>
    </div>
  );
};

export default App;
