import React from 'react';
import Statistics from 'components/Statistics';
import Feedbackoptions from 'components/Feedbackoptions';
import Section from 'components/SectionTitle';
import Notification from 'components/Notification';
import css from './App.module.css'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedBack = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFedback = good + neutral + bad;
    return totalFedback;
  };

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback()) {
      const percent = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
      return percent;
    }
  }

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <Feedbackoptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedBack}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
