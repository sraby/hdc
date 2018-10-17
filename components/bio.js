
const title = C.items[5].fields.title;

const p1 = C.items[5].fields.p1;

const p2 = C.items[5].fields.p2;

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