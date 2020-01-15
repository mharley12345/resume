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
      
      
      
          <iframe style={{"width":"600px","height":"400px"}}  src="https://keeptruckin.he-dev.com/" href="https://keeptruckin.he-dev.com/"><h1></h1></iframe>
          <a href="https://keeptruckin.he-dev.com/" alt="" target="_Blank">Hammer Down</a>
        <iframe style={{"width":"600px","height":"400px"}} src=" https://nostalgic-torvalds-c07bf0.netlify.com"></iframe>
        <a  href=" https://nostalgic-torvalds-c07bf0.netlify.com">Kaldi Coffee</a>
        <iframe style={{"width":"600px","height":"400px"}} src="https://truckmap-login.netlify.com/" ></iframe>
        <a href="https://truckmap-login.netlify.com/">Login Components I Built</a>
            <iframe style={{"width":"600px","height":"400px"}} src="https://motherafricaneedsyou.org" ></iframe>
            <a href="https://motherafricaneedsyou.org">Many</a>
            <iframe style={{"width":"600px","height":"400px"}} src="https://blitzbuild.construction"></iframe>
            <a  href="https://blitzbuild.construction">Blitz Build</a>
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
