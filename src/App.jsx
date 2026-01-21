import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

// Import assets
import contactIcon from './assets/Logos/contact.png';
import theArtistIcon from './assets/Logos/theartist.png';
import theArchitectIcon from './assets/Logos/thearchitect.png';
import videoIcon from './assets/Logos/video.png';
import hatIcon from './assets/Logos/hat.png';
import scarfIcon from './assets/Logos/scarf.png';
import mittensIcon from './assets/Logos/mittens.png';
import swaterIcon from './assets/Logos/swater.png';
import accountIcon from './assets/Logos/Account.png';

// Reusable Scroll Animation Component
const ScrollReveal = ({ children, className, style, direction = 'left' }) => {
  const initialX = direction === 'left' ? -50 : 50;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// SVG Icons for Header (recreated to match style approximately)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const ToolsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Header = ({ reset }) => (
  <header className="header">
    <div className="header-left">
      <div className="logo-container" onClick={reset}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <svg width="150" height="25" viewBox="0 0 60 10" stroke="black" fill="none" strokeWidth="1.5">
          <path d="M0,5 Q10,0 25,5 T60,2 " />
        </svg>
      </div>
    </div>
    <div className="header-nav">
      <div className="nav-item">
        <span>Contact</span>
        <img src={contactIcon} alt="contact" className="nav-icon" />
      </div>
      <div className="nav-item" onClick={reset}>
        <span>Home page</span>
        <img src={theArtistIcon} alt="home" className="nav-icon" />
      </div>
      <div className="nav-item">
        <span>Pattern maker</span>
        <img src={swaterIcon} alt="maker" className="nav-icon" />
      </div>
      <div className="user-icon">
        <img src={accountIcon} alt="account" className="account-icon" />
      </div>
    </div>
  </header>
);

const ArtistContent = ({ onNavigate }) => (
  <div className="detail-view">
    <div className="detail-header">
      <motion.img
        src={theArtistIcon}
        alt="The Artist"
        className="detail-icon"
        layoutId="artist-icon"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      />
      <motion.h2
        className="detail-title"
        layoutId="artist-title"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      >
        You've chosen the artist
      </motion.h2>
      <motion.p
        className="detail-subtitle"
        layoutId="artist-desc"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      >
        From pixel to stitch. Bring your own image or explore our library. Your design, your gauge.
      </motion.p>
    </div>

    <motion.div
      className="content-grid"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Row 1 */}
      <div className="content-row">
        <ScrollReveal className="content-card" direction="left">
          <h3>Extensive motif library</h3>
          <p className="card-subtitle">A universe of art, one click away</p>
          <p className="card-description">
            Stuck? Step away from the blank grid and browse thousands of community-created motifs. From pixel art to classic cables, find what inspires you and purchase it in a single click.
          </p>
          <p className="card-description">
            Grab a pro-level design, unlock the icons to knit it, and make it your own.
          </p>
        </ScrollReveal>
        <ScrollReveal className="media-card" direction="left">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
      </div>

      {/* Row 2 */}
      <div className="content-row">
        <ScrollReveal className="media-card" direction="right">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
        <ScrollReveal className="content-card" direction="right">
          <h3>The Digital Canvas</h3>
          <p className="card-subtitle">Your personal knitting studio to create your own art</p>
          <p className="card-description">
            Didn't find "The One"? Create it.
          </p>
          <p className="card-description">
            Perhaps the perfect motif doesn't exist yet because you haven't made it. Use tools built for knitters no workarounds. Publish it for the world or keep it secret. Your art, your decision.
          </p>
        </ScrollReveal>
      </div>

      {/* Row 3 */}
      <div className="content-row">
        <ScrollReveal className="content-card" direction="left">
          <h3>State of the art tools</h3>
          <p className="card-subtitle">Stay on track. Style on the fly.</p>
          <p className="card-description">
            Once you've chosen or created your perfect piece, follow the pattern row-by-row with our focused tracking tool. No more sliding rulers down a PDF.
          </p>
          <p className="card-description">
            But don't just follow, remix. Use the built-in color picker to visualize your specific yarn choices before you commit to a single stitch.
          </p>
        </ScrollReveal>
        <ScrollReveal className="media-card" direction="left">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
      </div>
    </motion.div>

    <motion.div
      className="footer-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <button className="footer-link-item">
        <img src={theArtistIcon} alt="Artist" className="footer-icon" />
        <span className="footer-main-text">Start your Masterpiece</span>
        <span className="footer-sub-text">Go to home page ↗</span>
      </button>
      <button className="footer-link-item" onClick={onNavigate}>
        <img src={theArchitectIcon} alt="Architect" className="footer-icon" />
        <span className="footer-main-text">Plan the Perfect Fit</span>
        <span className="footer-sub-text">Discover <strong style={{ color: 'black' }}>The architect</strong> ↗</span>
      </button>
    </motion.div>
  </div>
);

const ArchitectContent = ({ onNavigate }) => (
  <div className="detail-view">
    <div className="detail-header">
      <motion.img
        src={theArchitectIcon}
        alt="The Architect"
        className="detail-icon"
        layoutId="architect-icon"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      />
      <motion.h2
        className="detail-title"
        layoutId="architect-title"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      >
        You've chosen the architect
      </motion.h2>
      <motion.p
        className="detail-subtitle"
        layoutId="architect-desc"
        transition={{ type: "spring", stiffness: 900, damping: 70 }}
      >
        From blueprint to garment. Choose a structural pattern, customize the measurements, and let the logic guide you. Your size, your fit.
      </motion.p>
    </div>

    <motion.div
      className="content-grid"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Row 1 */}
      <div className="content-row">
        <ScrollReveal className="content-card" direction="left">
          <h3>Start on the foundation</h3>
          <p className="card-subtitle">Define the Structure</p>
          <p className="card-description">
            Every great fit begins with the right frame. Choose your base silhouette from sweaters to hats or scarfs our wide selection of clothing ensures you find the right base for your next piece.
          </p>
          <p className="card-description">
            Start at the beginning. Start right.
          </p>
        </ScrollReveal>
        <ScrollReveal className="media-card" direction="left" style={{ overflow: 'hidden' }}>
          <motion.div
            className="garment-scroll-track"
            animate={{ x: [0, -752] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              }
            }}
          >
            {/* First Set */}
            <div className="garment-item"><img src={swaterIcon} alt="sweater" /></div>
            <div className="garment-item"><img src={mittensIcon} alt="mittens" /></div>
            <div className="garment-item"><img src={hatIcon} alt="hat" /></div>
            <div className="garment-item"><img src={scarfIcon} alt="scarf" /></div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="garment-item"><img src={swaterIcon} alt="sweater" /></div>
            <div className="garment-item"><img src={mittensIcon} alt="mittens" /></div>
            <div className="garment-item"><img src={hatIcon} alt="hat" /></div>
            <div className="garment-item"><img src={scarfIcon} alt="scarf" /></div>

            {/* Third Set (Additional for ultra-smooth scroll) */}
            <div className="garment-item"><img src={swaterIcon} alt="sweater" /></div>
            <div className="garment-item"><img src={mittensIcon} alt="mittens" /></div>
            <div className="garment-item"><img src={hatIcon} alt="hat" /></div>
            <div className="garment-item"><img src={scarfIcon} alt="scarf" /></div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Row 2 */}
      <div className="content-row">
        <ScrollReveal className="media-card" direction="right">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
        <ScrollReveal className="content-card" direction="right">
          <h3>Scaffold the Anatomy</h3>
          <p className="card-subtitle">Your vision. Your rules. Your piece.</p>
          <p className="card-description">
            Precision from neck to hem.
          </p>
          <p className="card-description">
            A base is just a starting point. Fine-tune every aspect of your garment by selecting specific attributes. Define the colors, swap a crew neck for a V-neck, adjust the arm taper, or modify the hem. The look adapts to your own decisions.
          </p>
        </ScrollReveal>
      </div>

      {/* Row 3 */}
      <div className="content-row">
        <ScrollReveal className="content-card" direction="left">
          <h3>Simulate the Structure</h3>
          <p className="card-subtitle">Verify the geometry in real-time.</p>
          <p className="card-description">
            Don't build blindly. Tweak the critical specs from knitting tension to body dimensions and watch your piece adapt in real time.
          </p>
          <p className="card-description">
            We handle the calculations in the background, translating your decisions into a visual guarantee that the final fit matches your vision.
          </p>
        </ScrollReveal>
        <ScrollReveal className="media-card" direction="left">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
      </div>

      {/* Row 4 */}
      <div className="content-row">
        <ScrollReveal className="media-card" direction="right">
          <img src={videoIcon} alt="video" className="media-placeholder-icon" />
        </ScrollReveal>
        <ScrollReveal className="content-card" direction="right">
          <h3>Build according to plan</h3>
          <p className="card-subtitle">Follow the blueprint and make it perfect</p>
          <p className="card-description">
            Execute the build your way. Use our dynamic instructions or interactive guide that updates step-by-step based on your specific customizations.
          </p>
          <p className="card-description">
            Prefer the classic approach? Download the static chart to print the blueprint and work offline. Two methods, one precise result.
          </p>
        </ScrollReveal>
      </div>
    </motion.div>

    <motion.div
      className="footer-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <button className="footer-link-item">
        <img src={theArchitectIcon} alt="Architect" className="footer-icon" />
        <span className="footer-main-text">Start building</span>
        <span className="footer-sub-text">Go to pattern maker ↗</span>
      </button>
      <button className="footer-link-item" onClick={onNavigate}>
        <img src={theArtistIcon} alt="Artist" className="footer-icon" />
        <span className="footer-main-text">Reveal your creativity</span>
        <span className="footer-sub-text">Discover: <strong style={{ color: 'black' }}>The artist</strong> ↗</span>
      </button>
    </motion.div>
  </div>
);


function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleHover = (option) => {
    if (!selectedOption) {
      setHoveredOption(option);
    }
  };

  const handleClick = (option) => {
    setSelectedOption(option);
    window.scrollTo(0, 0);
  };

  const getWidth = (option) => {
    // If we have a selection...
    if (selectedOption) {
      // If this is the selected option, it takes 100%
      if (selectedOption === option) return '100%';
      // If the other one is selected, this one takes 0%
      return '0%';
    }

    // Default interaction state (no selection)
    if (hoveredOption === option) return '65%';
    if (hoveredOption && hoveredOption !== option) return '45%';
    return '50%';
  };

  return (
    <div className="container">
      <Header reset={() => setSelectedOption(null)} />

      <main className="main-content">
        <div
          className="split-view"
          style={{
            height: selectedOption ? 'auto' : 'calc(100vh - 80px)',
            overflow: selectedOption ? 'visible' : 'hidden',
            // When an option is selected, we might want the split-view to not limit height
            flexDirection: 'row'
          }}
        >

          {/* Artist Panel */}
          <motion.div
            className="panel"
            onMouseEnter={() => handleHover('artist')}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => !selectedOption && handleClick('artist')}
            animate={{
              width: getWidth('artist'),
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRight: selectedOption === 'architect' ? 'none' : '1px solid black',
              overflow: selectedOption === 'artist' ? 'visible' : 'hidden',
              height: selectedOption === 'artist' ? 'auto' : '100%',
              minHeight: selectedOption === 'artist' ? 'calc(100vh - 80px)' : 'auto',
              justifyContent: selectedOption === 'artist' ? 'flex-start' : 'center',
              cursor: selectedOption ? 'auto' : 'pointer'
            }}
          >
            {selectedOption === 'artist' ? (
              <motion.div
                style={{ width: '100%' }}
              >
                <ArtistContent onNavigate={() => { handleClick('architect'); }} />
              </motion.div>
            ) : (
              <div className="panel-content" style={{ opacity: selectedOption === 'architect' ? 0 : 1, transition: 'opacity 0.2s' }}>
                <motion.img
                  src={theArtistIcon}
                  alt="The artist"
                  className="panel-icon"
                  layoutId="artist-icon"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                />
                <motion.h2
                  className="panel-title"
                  layoutId="artist-title"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                >
                  The artist
                </motion.h2>
                <motion.p
                  className="panel-desc"
                  layoutId="artist-desc"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                >
                  Discover our motif creation tools, extensive library and colour picker to unleash your creativity
                </motion.p>
              </div>
            )}
          </motion.div>

          {/* Architect Panel */}
          <motion.div
            className="panel"
            onMouseEnter={() => handleHover('architect')}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => !selectedOption && handleClick('architect')}
            animate={{
              width: getWidth('architect'),
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: selectedOption === 'architect' ? 'visible' : 'hidden',
              height: selectedOption === 'architect' ? 'auto' : '100%',
              minHeight: selectedOption === 'architect' ? 'calc(100vh - 80px)' : 'auto',
              justifyContent: selectedOption === 'architect' ? 'flex-start' : 'center',
              cursor: selectedOption ? 'auto' : 'pointer'
            }}
          >
            {selectedOption === 'architect' ? (
              <motion.div
                style={{ width: '100%' }}
              >
                <ArchitectContent onNavigate={() => { handleClick('artist'); }} />
              </motion.div>
            ) : (
              <div className="panel-content" style={{ opacity: selectedOption === 'artist' ? 0 : 1, transition: 'opacity 0.2s' }}>
                <motion.img
                  src={theArchitectIcon}
                  alt="The architect"
                  className="panel-icon"
                  layoutId="architect-icon"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                />
                <motion.h2
                  className="panel-title"
                  layoutId="architect-title"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                >
                  The architect
                </motion.h2>
                <motion.p
                  className="panel-desc"
                  layoutId="architect-desc"
                  transition={{ type: "spring", stiffness: 900, damping: 70 }}
                >
                  Structure comes first, art second, discover our wide variety of patterns, precise knitting instruction tools and line by line charts
                </motion.p>
              </div>
            )}
          </motion.div>

        </div>
      </main>
    </div>
  );
}

export default App;
