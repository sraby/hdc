const title = "About Us";

const p1 = "The Housing Data Coalition (HDC) came together in 2017 to address common issues in using public data to support housing justice and tenant organizing in New York City. The first coalition members were drawn together from different types of work when they realized that they faced the same problem: data on housing in New York City is relatively abundant but spread across many separate sources, making it difficult to connect information and find meaning. Since then, HDC members have created several new tools to make housing data more accessible for organizers, community members, researchers, and advocates.";

const p2 = "At HDC we recognize that data is not inherently objective or without bias. The use of data, cartography, and statistics has provided institutional masking to racism and discrimination for centuries. To this day, housing in New York City continues to be shaped by its legacy of state-sponsored segregation through redlining maps, which at the time were seen as legitimate representations of a neighborhood’s worth based on demographic data. Amid New York’s current housing crisis, “Big Data” is being used to spur a venture-funded real estate tech industry that fuels predatory speculation and capitalizes on a racist history of disinvestment in the neighborhoods where people of color live. HDC uses this same data, gleaned from public sources, to counteract capitalist, gentrifying forces and end displacement.";

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