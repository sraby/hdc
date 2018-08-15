const title = "About Us";

const p1 = "The Housing Data Coalition (HDC) came together in 2017 to address common issues in using public data to support housing justice and tenant organizing in New York City. The first coalition members were drawn together from different types of work when they realized that they faced the same problem: data related to housing in New York City is relatively abundant but spread across many separate sources, making it difficult to connect information and make insights. Since then, HDC members have created several new tools to make data related to housing more accessible for organizers, researchers, and advocates.";

const p2 = "HDC members are committed to advancing the right to housing for all New Yorkers and ending the displacement of low-income communities of color. We believe that the right to housing includes affordable, dignified homes within the communities that New Yorkers have created, and that this right is especially threatened by real estate speculation that causes displacement. [Statement about history of structural racism, other power inequalities that undergird NYC housing → tie to data and analytics particularly? → what we’re trying to accomplish/transform given this history] HDC holds monthly meetings that are open to all who share these values. Our meetings provide a space to meet others interested in housing data, to learn from each other, and to provide mutual support on current projects.";

class Bio extends React.Component {
    render() {
        return (<div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{title}</h2>
              <h3 className="section-subheading text-muted">
                <br/>
                <div>
                  <p align="left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {p1}
                    </p>
                  <p align="left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {p2}
                    </p>
                </div>
              </h3>
            </div>
          </div>
        </div>);
      }
}

ReactDOM.render(
    <Bio />,
    document.getElementById('bio')
);