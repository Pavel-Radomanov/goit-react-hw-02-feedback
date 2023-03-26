import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButton = event => {
    const name = event.target.name;
    this.setState(prevState => {
      console.log(prevState);
      console.log(name);
      return { [name]: prevState[name] + 1 };
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
    const buttonNames = Object.keys(this.state);
    // console.log(buttonName);
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'right',
          marginLeft: '50px',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          {/* <Section title="Please live feedback"></Section> */}
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>

        {this.totalFeedbacks() ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedbacks()}
              positivePercentage={this.countPositivePercent()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
export default App;
// onLeaveFeedback={this.feedbackCounter}

// handleClickNeutral = e => {
//   this.setState(prevState => {
//     console.log(prevState);
//     return { neutral: prevState.neutral + 1 };
//   });
// };
// handleClickBad = e => {
//   this.setState(prevState => {
//     console.log(prevState);
//     return { bad: prevState.bad + 1 };
//   });
// };
