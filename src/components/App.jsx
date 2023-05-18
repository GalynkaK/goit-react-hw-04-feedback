// import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Container from './Container';
import Section from './Section';
import Notification from './Notification';
import React, { useState } from 'react';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  // handleFeedback = (e) => {
  //   if (e === 'Good') {
  //     this.setState({ good: this.state.good + 1 });
  //   } else if (e === 'Neutral') {
  //     this.setState({ neutral: this.state.neutral + 1 })
  //   } else if (e === 'Bad') {
  //     this.setState({ bad: this.state.bad + 1 });
  //   }
  // };
  const handleFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1)
        break

      default:
        return;
    }
  }

  const feedbackLook = { good, neutral, bad };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackLook;
    const percentage =
      Math.round((good / countTotalFeedback()) * 100 || 0)
    return percentage;
  }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackLook)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Container>
  );
}


export { App };

