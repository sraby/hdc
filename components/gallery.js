const title = "Resource Gallery";

const subtitle = "A gallery of tools and resources created by Housing Data Coalition members";

const gallery_content = [
      {
        title: "Who Owns What",
        org:"JustFix.nyc", //ADD THIS TO CONTENT MODEL
        image:"01-thumbnail.png",
        p1:"The JustFix.nyc Who Owns What project is a new resource for community organizers and tenant leaders to demystify property ownership and shell company networks across New York City. The site utilizes a database of 200,000 other properties to connect the dots and discover other properties that your landlord might own or be associated with. Use this tool to discover what buildings in your neighborhood to organize in, what communities your landlord might be targeting, and if your building might be financially overleveraged.",
        link:"https://whoownswhat.justfix.nyc/",
        tags:"",
        contact:"hello@justfix.nyc"
      },
      {
        title: "Who Owns What 2",
        org:"JustFix.nyc1", //ADD THIS TO CONTENT MODEL
        image:"01-thumbnail.png",
        p1:"1The JustFix.nyc Who Owns What project is a new resource for community organizers and tenant leaders to demystify property ownership and shell company networks across New York City. The site utilizes a database of 200,000 other properties to connect the dots and discover other properties that your landlord might own or be associated with. Use this tool to discover what buildings in your neighborhood to organize in, what communities your landlord might be targeting, and if your building might be financially overleveraged.",
        link:"https://whoownswhat.justfix.nyc/",
        tags:"",
        contact:"hello@justfix.nyc"
      }
];                       

class GalleryItem extends React.Component {
  render() {
    return (<div className="col-md-4 col-sm-6 portfolio-item" onClick={this.props.handleClick}>
                <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal" + this.props.number}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={"img/portfolio/"+gallery_content[this.props.number].image} alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>{gallery_content[this.props.number].title}</h4>
                  <p className="text-muted">{gallery_content[this.props.number].org}</p>
                </div>
              </div>);
    }
}


class GalleryModal extends React.Component {

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  render() {
    return(<div className={"portfolio-modal modal fade "+((this.props.isOpen == this.props.number) ? "show" : "")} 
                tabIndex="-1" 
                role="dialog" 
                aria-hidden="true" 
                id={"#portfolioModal" + this.props.number}
                style={{ display: ((this.props.isOpen == this.props.number) ? "block" : "none")}}>
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
                        <h2>{gallery_content[this.props.number].title}</h2>
                        <p className="item-intro text-muted">{gallery_content[this.props.number].org}</p>
                        <a href={gallery_content[this.props.number].link} target="_blank">
                        <img className="img-fluid d-block mx-auto" src={"img/portfolio/"+gallery_content[this.props.number].image} alt=""/> </a>
                        <p align="left">{gallery_content[this.props.number].p1}</p>
                        <a href={gallery_content[this.props.number].link} target="_blank"> 
                          <button className="btn btn-primary">Go to {gallery_content[this.props.number].title}</button>
                        </a>
                        <button className="btn btn-primary" type="button" onClick={this.props.closeButton}>
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
      showModal: -1
    };
  }
 
  openModal(number) {
    this.setState({showModal: number} );
    $('body').addClass('modal-open');
    console.log("opened modal", number);
  }

  closeModal() {
    this.setState({showModal: -1} );
    $('body').removeClass('modal-open');
    console.log("closed modal");
  }

  createGallery = () => {
    
    let galleryItems = [];
    for (let i = 0; i < gallery_content.length; i++) {
        galleryItems.push(<GalleryItem key={i} number={i} handleClick={()=>{this.openModal(i)}} />)
    }
    return galleryItems;
  }

  createModals() {
    
    let modals = [];
    for (let i = 0; i < gallery_content.length; i++) {
        modals.push(<GalleryModal key={i} number={i} isOpen={this.state.showModal} closeButton={()=>{this.closeModal()}} />)
    }
    return modals;
  }

  render() {

        return (<div>
                  <section className="bg-light" id="portfolio">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <h2 className="section-heading">{title}</h2>
                          <h3 className="section-subheading text-muted">{subtitle}</h3>
                          <br/>
                        </div>
                      </div>
                      <div className="row"> 
                        {this.createGallery()}
                      </div>
                    </div>
                  </section>
                  {this.createModals()}
         </div>
        );
      }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery')
);

