import { ParallaxBanner } from 'react-scroll-parallax'
import Icon from '../Icon'
import social from '../../data/social'

const Hero = () => (
  <ParallaxBanner
    style={{ height: '100vh', background: '#066FFF' }}
    layers={[
      {
        id: 'hero-bg-img',
        image: '/assets/img/bg-hero.jpg',
        speed: -100,
        translateY: [0, 50],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
      },
      {
        children: (
          <header>
            <div className="wrap center-text">
              <div className="hero-layout">
                <div className="hero-content">
                  <div class="hero-title">
                    <div className="overline">
                      Hi, I'm <h1>Austin Condiff</h1>
                    </div>
                    <h2 className="lead">
                      I create <em>digital experiences</em>
                    </h2>
                  </div>
                  <p>
                    For the past fifteen years I have been designing and developing mobile, desktop, and web based user
                    experiences for small businesses and Fortune 500 companies using the best design techniques and the
                    latest front-end technologies.
                  </p>
                  <a className="button primary" href="#connect">
                    Work With Me
                  </a>
                </div>
                <div className="hero-image">
                  <div className="photo"></div>
                </div>
              </div>
            </div>
            <ul className="social">
              {social.map((s) => (
                <li key={s.id}>
                  <a target="_blank" rel="noreferrer" href={s.url}>
                    <Icon type={s.id} />
                  </a>
                </li>
              ))}
            </ul>
            <i className="arrow"></i>
          </header>
        ),
      },
    ]}
  />
)

export default Hero
