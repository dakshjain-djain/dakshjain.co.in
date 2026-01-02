import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-wrapper">
          <h1 className="greeting">Hello, I'm Daksh Jain</h1>
          
          <div className="profile-image-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_ead78139-2e78-436d-9d6b-c7487585cc12/artifacts/9xfkspev_Gemini_Generated_Image_27sz2627sz2627sz.png" 
              alt="Daksh Jain Sketch" 
              className="profile-sketch"
            />
          </div>

          <div className="bio-section">
            <p className="bio-text">
              I'm a student studying Digital Business & Entrepreneurship with a thing for tech and AI. 
              I'm not a traditional developer, but I love building small projects and shipping things that work. 
              I spend a lot of time at events, workshops, and conferences, soaking up everything I can about 
              where the industry is headed.
            </p>
            
            <p className="bio-text">
              I believe you don't need to code full time to understand technology, you just need to care enough 
              to stay curious. I follow the latest in AI, experiment with new tools, and figure out how tech 
              actually creates value in the real world. For me, it's about connecting what's possible with what 
              people actually need.
            </p>
            
            <p className="bio-text">
              On LinkedIn, I write about tech, business, and AI. The stuff I'm learning, the trends I'm seeing, 
              and the tools I'm testing. I keep it simple because that's how I think about it. If you're into 
              building things and figuring out what's next in tech, you'll probably get what I'm doing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/dakshjain-d/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <span className="separator">·</span>
            <a 
              href="https://www.instagram.com/dakshjxin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
            <span className="separator">·</span>
            <a 
              href="https://x.com/dakshjxin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              X
            </a>
          </div>
          <p className="footer-text">© 2025 Daksh Jain</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
