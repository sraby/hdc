
function Project(props) {
    return (
      <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" dataToggle="modal" href="#portfolioModal">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={props.thumb} alt=""></img>
            </a>
            <div className="portfolio-caption">
              <h4>{props.title}</h4>
            </div>
          </div>
    );
  }

class ProjectGrid extends React.Component {

   renderProject(props) {
    return (
      <Project title=props.title id=props.id thumburl=props.thumb>
    );
  } 


  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Tools and Organizations</h2>
              <br>
            </div>
          </div>
            // Add in Projects 
        </div>
      </div>
    </section>
    );
  }
}

ReactDOM.render(
  <ProjectGrid />,
  document.getElementById('root')
);