import { useState, useEffect } from 'react'; // useEffect'i de ekledik ki sayfa yenilense de hafıza korunsun
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  // Hafıza (localStorage) destekli state yönetimimiz
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // Sayılar değiştikçe tarayıcı hafızasını günceller
  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // İŞTE YENİ FONKSİYONUMUZ: Her şeyi sıfıra çeker 🧹
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div
      style={{
        padding: '40px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0',
      }}
    >
      <Description />

      <Options
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
