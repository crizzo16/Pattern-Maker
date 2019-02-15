import React, { Component } from "react";
import "../App.css";

class Percent extends Component {
  state = {
    percents: [10, 20, 30, 40],
    width: 13,
    height: 15
  };

  minus(ind) {
    //console.log(ind);
    const index = parseInt(ind);
    //console.log(index);
    if (this.state.percents[index] > 0) {
      const newVal = this.state.percents[index] - 5;
      let adjNum = index + 1;
      if (index === this.state.percents.length - 1) {
        adjNum = 0;
      }
      while (this.state.percents[adjNum] === 100) {
        adjNum++;
        if (adjNum === this.state.percents.length) {
          adjNum = 0;
        }
      }
      const adjVal = this.state.percents[adjNum] + 5;
      let newPercent = [];
      for (let i = 0; i < this.state.percents.length; i++) {
        if (i === index) {
          newPercent.push(newVal);
        } else if (i === adjNum) {
          newPercent.push(adjVal);
        } else {
          newPercent.push(this.state.percents[i]);
        }
      }
      this.setState({
        percents: newPercent
      });
    }
  }

  plus(ind) {
    //console.log(ind);
    const index = parseInt(ind);
    //console.log(index);
    if (this.state.percents[index] < 100) {
      const newVal = this.state.percents[index] + 5;
      let adjNum = index + 1;
      if (index === this.state.percents.length - 1) {
        adjNum = 0;
      }
      while (this.state.percents[adjNum] === 0) {
        adjNum++;
        if (adjNum === this.state.percents.length) {
          adjNum = 0;
        }
      }
      const adjVal = this.state.percents[adjNum] - 5;
      let newPercent = [];
      for (let i = 0; i < this.state.percents.length; i++) {
        if (i === index) {
          newPercent.push(newVal);
        } else if (i === adjNum) {
          newPercent.push(adjVal);
        } else {
          newPercent.push(this.state.percents[i]);
        }
      }
      this.setState({
        percents: newPercent
      });
    }
  }

  minuswh(type) {
    if (this.state[type] > 0) {
      const newNum = this.state[type] - 1;
      this.setState({
        [type]: newNum
      });
    }
  }

  pluswh(type) {
    if (this.state[type]) {
      const newNum = this.state[type] + 1;
      this.setState({
        [type]: newNum
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="flex">
          <h4>Width: </h4>
          <div>
            <i
              className="fas fa-lg fa-minus-circle m-15"
              onClick={() => this.minuswh("width")}
            />
            <span id="order-roll">{this.state.width}</span>
            <i
              className="fas fa-lg fa-plus-circle m-15"
              onClick={() => this.pluswh("width")}
            />
          </div>
          <h4>Height: </h4>
          <div>
            <i
              className="fas fa-lg fa-minus-circle m-15"
              onClick={() => this.minuswh("height")}
            />
            <span id="order-roll">{this.state.height}</span>
            <i
              className="fas fa-lg fa-plus-circle m-15"
              onClick={() => this.pluswh("height")}
            />
          </div>
          <h4>Total Squares: {this.state.width * this.state.height}</h4>
        </div>
        <div className="flex">
          <div className="percent-display flex flex-column">
            <h4>First Pattern</h4>
            <div>
              <i
                className="fas fa-lg fa-minus-circle m-15"
                onClick={() => this.minus("0")}
              />
              <span id="order-roll">{this.state.percents[0]}</span>
              <i
                className="fas fa-lg fa-plus-circle m-15"
                onClick={() => this.plus("0")}
              />
            </div>
            <h4>
              Num:{" "}
              <span id="num0">
                {Math.round(
                  (this.state.percents[0] *
                    this.state.width *
                    this.state.height) /
                    100
                )}
              </span>
            </h4>
          </div>
          <div className="percent-display flex flex-column">
            <h4>Second Pattern</h4>
            <div>
              <i
                className="fas fa-lg fa-minus-circle m-15"
                onClick={() => this.minus("1")}
              />
              <span id="order-roll">{this.state.percents[1]}</span>
              <i
                className="fas fa-lg fa-plus-circle m-15"
                onClick={() => this.plus("1")}
              />
            </div>
            <h4>
              Num:{" "}
              <span id="num1">
                {Math.round(
                  (this.state.percents[1] *
                    this.state.width *
                    this.state.height) /
                    100
                )}
              </span>
            </h4>
          </div>
          <div className="percent-display flex flex-column">
            <h4>Third Pattern</h4>
            <div>
              <i
                className="fas fa-lg fa-minus-circle m-15"
                onClick={() => this.minus("2")}
              />
              <span id="order-roll">{this.state.percents[2]}</span>
              <i
                className="fas fa-lg fa-plus-circle m-15"
                onClick={() => this.plus("2")}
              />
            </div>
            <h4>
              Num:{" "}
              <span id="num2">
                {Math.round(
                  (this.state.percents[2] *
                    this.state.width *
                    this.state.height) /
                    100
                )}
              </span>
            </h4>
          </div>
          <div className="percent-display flex flex-column">
            <h4>Fourth Pattern</h4>
            <div>
              <i
                className="fas fa-lg fa-minus-circle m-15"
                onClick={() => this.minus("3")}
              />
              <span id="order-roll">{this.state.percents[3]}</span>
              <i
                className="fas fa-lg fa-plus-circle m-15"
                onClick={() => this.plus("3")}
              />
            </div>
            <h4>
              Num:{" "}
              <span id="num3">
                {Math.round(
                  (this.state.percents[3] *
                    this.state.width *
                    this.state.height) /
                    100
                )}
              </span>
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Percent;
