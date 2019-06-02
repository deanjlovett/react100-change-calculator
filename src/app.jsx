import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  calculate(paid,due) {
    const change = [
      ['twenties',2000],
      ['tens',    1000],
      ['fives',    500],
      ['ones',     100],
      ['quarters',  25],
      ['dimes',     10],
      ['nickels',    5],
      ['pennies',    1],  
    ];
    const name = 0;  // first element is the ID for the output field
    const value = 1; // second element is the value of that bill or coin, in pennies

    // change left to be accounted for... in pennies
    // while we are at it... save the change due
    this.state.changeDue = (paid - due);
    var change_left = (this.state.changeDue)*100; 
    change.forEach((a) => {
        this.setState({ [a[name]]: Math.floor(change_left / a[value]) });
        change_left = Math.ceil(change_left % a[value]);
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Change Calculator</h1>
        </header>

        <div id="tagline">
          <p></p>
        </div>

        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Information</h5>

                <div className="form-group">
                  <label htmlFor="amountDue">How much is due?</label>
                  <input name="amountDue" type="number" className="form-control" value={this.state.amountDue} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="amountReceived">How much was received?</label>
                  <input name="amountReceived" type="number" className="form-control" value={this.state.amountReceived} onChange={this.handleChange} />
                </div>

                <button className="btn btn-primary btn-block" disabled={!this.state.amountDue || !this.state.amountReceived} onClick={() => this.calculate(this.state.amountReceived, this.state.amountDue)}>Calculate</button>
              </div>
            </div>
          </div>

          <div className='col-md-8'>

            <div className='card text-center' style={{ padding: '20px' }}>

              {
                this.state.changeDue 
                ? 
                this.state.changeDue > 0 
                ? 
                (<div className='alert alert-success' role='alert'>The total change due is ${this.state.changeDue}</div>) 
                : 
                (<div className='alert alert-danger' role='alert'>Additional money owed</div>) 
                : 
                ''
              }

              <div className="row" style={{ paddingBottom: '20px' }}>
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Twenties</h5>
                      <p className="text-center change">{this.state.twenties}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Tens</h5>
                      <p className="text-center change">{this.state.tens}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Fives</h5>
                      <p className="text-center change">{this.state.fives}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Ones</h5>
                      <p className="text-center change">{this.state.ones}</p>
                    </div>
                  </div>
                </div>

              </div> {/* end of bills */}

              <div className="row">

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Quarters</h5>
                      <p className="text-center change">{this.state.quarters}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Dimes</h5>
                      <p className="text-center change">{this.state.dimes}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Nickels</h5>
                      <p className="text-center change">{this.state.nickels}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Pennies</h5>
                      <p className="text-center change">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>

              </div> {/* end coins */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
