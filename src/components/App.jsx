import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = option => {
    this.setState(prevState => {
      console.log(option);
      return { [option]: prevState[option] + 1 };
    });
  };

  totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  positivePercentageFeedback = ({ good }) => {
    const percentageFeedback = Number(
      ((good / this.totalFeedback(this.state)) * 100).toFixed(0)
    );
    return percentageFeedback > 0 ? percentageFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      handleClickFeedback,
      totalFeedback,
      positivePercentageFeedback,
    } = this;

    const options = Object.keys(state);
    const total = totalFeedback(state);
    const positivePercentage = positivePercentageFeedback(state);

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
}

export default App;
