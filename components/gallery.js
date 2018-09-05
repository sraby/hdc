const title = "Tools Gallery";

const subtitle = "";

const gallery_items = [{
  id: 1,
  title: "Who Owns What",
  org:"JustFix.nyc", //ADD THIS TO CONTENT MODEL
  image:"01-thumbnail.png",
  p1:"The JustFix.nyc Who Owns What project is a new resource for community organizers and tenant leaders to demystify property ownership and shell company networks across New York City. The site utilizes a database of 200,000 other properties to connect the dots and discover other properties that your landlord might own or be associated with. Use this tool to discover what buildings in your neighborhood to organize in, what communities your landlord might be targeting, and if your building might be financially overleveraged.",
  link:"https://whoownswhat.justfix.nyc/",
  tags:"",
  contact:"hello@justfix.nyc"
}];

class GalleryItem extends React.Component {
  render() {
    return (<div className="col-md-4 col-sm-6 portfolio-item" onClick={this.props.handleClick}>
                <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal" + gallery_items[0].id}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={"img/portfolio/"+gallery_items[0].image} alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>{gallery_items[0].title}</h4>
                  <p className="text-muted">{gallery_items[0].org}</p>
                </div>
              </div>);
    }
}


class GalleryModal extends React.Component {

  render() {
    return(<div className={"portfolio-modal modal fade "+(this.props.isOpen ? "show" : "")} 
                tabIndex="-1" 
                role="dialog" 
                aria-hidden="true" 
                id={"#portfolioModal" + gallery_items[0].id}
                style={{ display: (this.props.isOpen ? "block" : "none")}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" onClick={this.props.closeButton}>
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2>{gallery_items[0].title}</h2>
                        <p className="item-intro text-muted">{gallery_items[0].org}</p>
                        <a href={gallery_items[0].link} target="_blank">
                        <img className="img-fluid d-block mx-auto" src={"img/portfolio/"+gallery_items[0].image} alt=""/> </a>
                        <p align="left">{gallery_items[0].p1}</p>
                        <a href={gallery_items[0].link} target="_blank"> 
                          <button className="btn btn-primary">Go to {gallery_items[0].title}</button>
                        </a>
                        <button className="btn btn-primary" type="button">
                          <i className="fa fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>);
        }
}

class Gallery extends React.Component {

  constructor (props) {
    super(props);

   this.state = {
      showModal: false
    };
  }
 
  openModal = () => {
    this.setState({showModal: true} );
    $('body').addClass('modal-open');
    console.log("opened modal");
  };

  closeModal = () => {
    this.setState({showModal: false} );
    $('body').removeClass('modal-open');
  };

  render() {
        return (<div>
                  <section className="bg-light" id="portfolio">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <h2 className="section-heading">{title}</h2>
                          <br/>
                        </div>
                      </div>
                      <div className="row"> 
                            <GalleryItem handleClick={this.openModal} />
                      </div>
                    </div>
                  </section>

         <GalleryModal
          isOpen = {this.state.showModal}
          closeButton = {this.closeModal}
           > </GalleryModal>
        </div>
        );
      }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery')
);

