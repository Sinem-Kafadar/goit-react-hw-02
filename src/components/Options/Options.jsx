import css from "./Options.module.css";

// Prop'lar arasına onReset ve totalFeedback değerlerini ekledik
function Options({ onLeaveFeedback, totalFeedback, onReset }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>

      {/* SİHİRLİ KISIM: Eğer toplam tıklama 0'dan büyükse Reset butonunu Bad'den sonra göster */}
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;