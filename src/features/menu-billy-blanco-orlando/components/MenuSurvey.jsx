import { text } from "../helpers/text";

export default function MenuSurvey({
  survey,
  language,
  handlerOpenSurvey,
  handlerCloseSurvey,
  handlerSubmitSurvey,
  showSurvey,
  submitted,
}) {
  return (
    <>
      <button onClick={handlerOpenSurvey}>
        {text(survey.title, language)}
      </button>

      {showSurvey && (
        <div className="survey-container">
          <button onClick={handlerCloseSurvey}>Cerrar</button>

          {submitted ? (
            <div className="thank-you">
              <h2>{text(survey.thankYouMessage, language)}</h2>
            </div>
          ) : (
            <>
              <h1>{text(survey.title, language)}</h1>
              <p>{text(survey.description, language)}</p>

              {survey.questions.map((q) => (
                <div key={q.id} className="survey-question">
                  <p>{text(q.question, language)}</p>

                  {q.type === 3 && (
                    <div>
                      {[...Array(q.maxStars)].map((_, idx) => (
                        <span key={idx}>⭐</span>
                      ))}
                    </div>
                  )}

                  {q.type === 2 && (
                    <select>
                      <option value="">--</option>
                      {q.options.map((opt, i) => (
                        <option key={i} value={text(opt, language)}>
                          {text(opt, language)}
                        </option>
                      ))}
                    </select>
                  )}

                  {q.type === 1 && (
                    <textarea
                      placeholder={text(q.placeholder || "", language)}
                    />
                  )}

                  {q.type === 4 && (
                    <textarea
                      rows={q.rows || 3}
                      placeholder={text(q.placeholder || "", language)}
                    />
                  )}
                </div>
              ))}

              <button onClick={handlerSubmitSurvey}>
                {text(survey.submitButton, language)}
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
