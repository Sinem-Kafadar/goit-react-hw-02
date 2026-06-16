import css from "./Feedback.module.css";

function Feedback({ feedback: { good, neutral, bad }, total, positive }) {
  return (
    <div className={css.feedbackList}>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neutral: {neutral}</p>
      <p className={css.feedbackItem}>Bad: {bad}</p>
      <p className={css.feedbackItem}>Total: {total}</p>
      <p className={css.feedbackItem}>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;