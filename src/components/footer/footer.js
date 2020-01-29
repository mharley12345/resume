import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="copyright">
            <li>© Copyright 2020 Michael Harley</li>
            <li>Design by <a title="Michael Harley" href="https://mike-harley.me">Michael Harley</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home">^</a></div>
      </div>
    </footer>
    );
  }
}
