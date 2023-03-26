import React, { Component } from 'react';
// import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
const buttonStyle = {
  border: 0,
  lineHeight: 2.5,
  padding: '20px',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#fff',
  textShadow: '1px 1px 1px #000',
  borderRadius: '10px',
  backgroundColor: 'rgba(220, 0, 0, 1)',
  backgroundImage:
    'linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0))',
  boxShadow: 'inset 2px 2px 3px rgba(255, 255,0, 0.2)',
};

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = e => {
    this.setState(prevState => {
      console.log(prevState);
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = e => {
    this.setState(prevState => {
      console.log(prevState);
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = e => {
    this.setState(prevState => {
      console.log(prevState);
      return { bad: prevState.bad + 1 };
    });
  };

  totalFeedbacks = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositivePercent = () => {
    return this.totalFeedbacks()
      ? ((this.state.good / this.totalFeedbacks()) * 100).toFixed(0)
      : '0';
  };
  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h3>Please leave feedback</h3>
        {/* <Section title="Please live feedback"></Section> */}
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={[
            this.handleClickGood,
            this.handleClickNeutral,
            this.handleClickBad,
          ]}
        />
        .
        <button style={buttonStyle} onClick={this.handleClickGood}>
          good
        </button>
        <button style={buttonStyle} onClick={this.handleClickNeutral}>
          neutral
        </button>
        <button style={buttonStyle} onClick={this.handleClickBad}>
          bad
        </button>
        <br />
        <h3>Statistics</h3>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedbacks()}
          positivePercentage={this.countPositivePercent()}
        />
        .
        {/* <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.totalFeedbacks()}</p> */}
        {/* <p>Positive feedback:{this.countPositivePercent()}%</p> */}
      </div>
    );
  }
}
export default App;
// onLeaveFeedback={this.feedbackCounter}
