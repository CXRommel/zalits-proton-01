import { useState } from "react";
import { SurveyQuestion } from "./SurveyQuestion";

export function SurveyComponent({ survey, lang }) {
  const {
    enabled,
    title,
    description,
    questions,
    submitButton,
    thankYouMessage,
  } = survey;
  const [showModal, setShowModal] = useState(false);

  //if (!enabled) return null;

  return (
    <div>
      <div>
        <button
          className="bg-stone-800 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
          onClick={() => setShowModal(true)}
        >
          <span className="font-bold text-sm uppercase">{title[lang]}</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm transition-opacity">
          <SurveyBody
            description={description}
            questions={questions}
            submitButton={submitButton}
            thankYouMessage={thankYouMessage}
            lang={lang}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </div>
  );
}

function SurveyBody({
  description,
  questions,
  submitButton,
  thankYouMessage,
  lang,
  setShowModal,
}) {
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("form: ", formData);
      setIsSubmitting(false);
      setShowThanksMessage(true);

      setTimeout(() => {
        setShowThanksMessage(false);
        setShowModal(false);
      }, 2000);
    }, 800);
  };

  const handleInputChange = (questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  if (showThanksMessage) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center animate-in fade-in zoom-in duration-300">
        <div className="text-6xl mb-4">
          <svg className="size-16 text-red-600 mx-auto animate-pulse">
            <use href="/lenn/sprites.svg#icon-heart" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-stone-800 mb-2">
          {thankYouMessage[lang]}
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
      <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
        <p className="text-stone-600 font-medium pr-4">{description[lang]}</p>
        <button
          className="text-stone-400 hover:text-stone-600 transition-colors text-3xl"
          type="button"
          onClick={() => setShowModal(false)}
        >
          <svg className="size-6 hover:text-red-600">
            <use href="/lenn/sprites.svg#icon-close-x" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {questions.map((question) => (
            <SurveyQuestion
              key={question.id}
              question={question}
              lang={lang}
              value={formData[question.id]}
              onChange={(value) => handleInputChange(question.id, value)}
            />
          ))}
        </div>

        <div className="pt-6 mt-8 border-t border-stone-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-stone-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-stone-900 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="size-5 text-stone-500 animate-spin">
                  <use href="/lenn/sprites.svg#icon-spinner" />
                </svg>
                Processing...
              </span>
            ) : (
              submitButton[lang]
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
