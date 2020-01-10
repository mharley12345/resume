import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Some Of My Recent Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      
          <iframe src="https://keeptruckin.he-dev.com/"></iframe>
        <iframe src=" https://nostalgic-torvalds-c07bf0.netlify.com">Marketing Page I Did For A Client</iframe>
        <iframe src="https://truckmap-login.netlify.com/">Login/Signup Components I Built</iframe>
            <iframe src="https://motherafricaneedsyou.org"></iframe>
            <iframe src="https://blitzbuild.construction"></iframe>
           { resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
