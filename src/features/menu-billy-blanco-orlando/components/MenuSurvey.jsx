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
      <div className="text-center py-6">
        <button
          onClick={handlerOpenSurvey}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-sm"
        >
          {text(survey.title, language)}
        </button>
      </div>

      {showSurvey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {text(survey.title, language)}
              </h2>
              <button
                onClick={handlerCloseSurvey}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                X
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-orange-600">
                  {text(survey.thankYouMessage, language)}
                </h2>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  {text(survey.description, language)}
                </p>

                <div className="space-y-6">
                  {survey.questions.map((q) => (
                    <div key={q.id} className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-800 mb-3">
                        {text(q.question, language)}
                        {q.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </p>

                      {q.type === 3 && (
                        <div className="flex gap-2">
                          {[...Array(q.maxStars)].map((_, idx) => (
                            <span
                              key={idx}
                              className="text-3xl cursor-pointer hover:scale-110 transition-transform"
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      )}

                      {q.type === 2 && (
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none">
                          <option value="">---</option>
                          {q.options.map((opt, i) => (
                            <option key={i} value={text(opt, language)}>
                              {text(opt, language)}
                            </option>
                          ))}
                        </select>
                      )}

                      {q.type === 1 && (
                        <input
                          type="text"
                          placeholder={text(q.placeholder || {}, language)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      )}

                      {q.type === 4 && (
                        <textarea
                          rows={q.rows || 3}
                          placeholder={text(q.placeholder || {}, language)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handlerSubmitSurvey}
                  className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  {text(survey.submitButton, language)}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
