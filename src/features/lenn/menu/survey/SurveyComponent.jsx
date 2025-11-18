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
    <>
      <button
        className="w-full text-center my-10"
        onClick={() => setShowModal(true)}
      >
        {title[lang]}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
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
    </>
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
      }, 1500);
    }, 500);
  };

  const handleInputChange = (questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  if (showThanksMessage) {
    return (
      <div className="bg-white rounded-3xl p-10 w-11/12 sm:w-4/12">
        <div>
          <p>{thankYouMessage.en}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-10 w-11/12 sm:w-4/12">
      <div className="grid grid-cols-2 border-b pb-2 mb-10">
        <p>{description[lang]}</p>
        <button
          className="text-end text-red-500"
          type="button"
          onClick={() => setShowModal(false)}
        >
          {"x"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
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

        <div className="border-t pt-2 mt-10 text-center">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "loading..." : submitButton[lang]}
          </button>
        </div>
      </form>
    </div>
  );
}
