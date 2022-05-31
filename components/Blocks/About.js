import Image from 'next/image'
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="block about">
        <div className="wrap center-text">
          <ul className="theory">
            <li>
              <div className="img-circle">
                <Image src="/assets/img/pixel-perfect.svg" width={64} height={64} alt="Pixel perfect" />
              </div>
              <div>
                I strive for <em>perfection</em> at the pixel level.
              </div>
            </li>
            <li>
              <div className="img-circle">
                <Image src="/assets/img/design.svg" width={64} height={64} alt="Design" />
              </div>
              <div>
                I believe <em>simplicity</em> is key to great design.
              </div>
            </li>
            <li>
              <div className="img-circle">
                <Image src="/assets/img/lightbulb.svg" width={64} height={64} alt="Lightbulb" />
              </div>
              <div>
                I have an eagerness to constantly learn <em>new</em> things.
              </div>
            </li>
            <li>
              <div className="img-circle">
                <Image src="/assets/img/cog.svg" width={64} height={64} alt="Gears" />
              </div>
              <div>
                My goal is to always deliver <em>cutting-edge</em> work.
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
