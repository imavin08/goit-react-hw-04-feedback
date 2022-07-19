import React, { useState } from 'react';
import Statistics from 'components/Statistics';
import Feedbackoptions from 'components/Feedbackoptions';
import Section from 'components/SectionTitle';
import Notification from 'components/Notification';
import css from './App.module.css';

function App() {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);

  const feedBackTypes = { good, neutral, bad };

  const leaveFeedBack = name => {
    switch (name) {
      case 'good':
        SetGood(prevState => prevState + 1);
        break;

      case 'neutral':
        SetNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        SetBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const percentOfFeedback = () => {
    if (totalFeedback()) {
      return Math.round((good / totalFeedback()) * 100);
    }
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <Feedbackoptions
          options={Object.keys(feedBackTypes)}
          onLeaveFeedback={leaveFeedBack}
        />
      </Section>

      {totalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={percentOfFeedback()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default App;
