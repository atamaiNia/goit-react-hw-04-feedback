import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };
  console.log(totalFeedback());
  const positivePercentageFeedback = () => {
    const percentageFeedback = Number(
      ((good / totalFeedback()) * 100).toFixed(0)
    );
    // console.log(totalFeedback);
    // console.log(percentageFeedback);
    return percentageFeedback > 0 ? percentageFeedback : 0;
  };

  const options = ['good', 'neutral', 'bad'];
  const total = totalFeedback();
  const positivePercentage = positivePercentageFeedback();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
