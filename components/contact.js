class Contact extends React.Component {
    render() {
        return (<section id="contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Get In Touch</h2>
                        <h3 className="section-subheading text-primary"> We meet every third Wednesday of each month to discuss data issues, new tools, and more. Come join us! 
                          </h3>
                      </div>
                    </div>
                      <div className="col-lg-12 text-center">
                        <a href="mailto:housingdatacoalition@gmail.com" target="_blank"> <button className="btn btn-xl">Contact Us</button> </a>
                      </div>
                  </div>
                </section>);
      }
}

ReactDOM.render(
    <Contact />,
    document.getElementById('contact')
);