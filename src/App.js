import React, { Component } from 'react';

import Header from './Header.js';
import ParallaxOverlay from './_shared/ParallaxOverlay.js';
import { src, trace } from './images/evilfxarmor.png';
import Carousel from './_shared/Carousel.js';

// Line-height
// Serif font for body
// Justify main text

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Header />

        <ParallaxOverlay id="armor" alt="Armor" src={src} trace={trace} />

        <div className="main main--right">
          <h3 className="info">We specialize in custom props and costume commision work for film, television, collectors and costumers.</h3>
          <p className="info info--small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a porta nisi, in vestibulum dolor. Nulla finibus volutpat ornare. Nullam ut accumsan massa, at lacinia risus. Maecenas et finibus velit. Phasellus sed nulla non nisl fermentum consequat. Integer ac lectus vel mauris porta vehicula ut eu eros.</p>

          <div className="main__cards">
            <div className="main__card">
              <h4>Hand Crafted</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a porta nisi, in vestibulum dolor.
            </div>

            <div className="main__card">
              <h4>Hi-Tech</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a porta nisi, in vestibulum dolor.
            </div>

            <div className="main__card">
              <h4>Accurate</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a porta nisi, in vestibulum dolor.
            </div>
          </div>

          <div className="reel" />
          </div>

          

          <div className="panel">
            <div className="main">
              <h3>News</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a porta nisi, in vestibulum dolor. Quisque metus purus, ultricies vel libero eu, semper auctor purus.
              <br /><br />
              Nulla finibus volutpat ornare. Nullam ut accumsan massa, at lacinia risus. Maecenas et finibus velit. Phasellus sed nulla non nisl fermentum consequat. Integer ac lectus vel mauris porta vehicula ut eu eros.
              <br /><br />
              Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor, tellus ut tempor facilisis, mi lacus lobortis tellus, eget scelerisque dui ex vitae sem. Vestibulum interdum risus nec neque suscipit finibus.

              <div className="video">Video</div>
          </div>
        </div>


        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
