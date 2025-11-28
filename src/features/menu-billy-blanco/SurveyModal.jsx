import { useState } from "react";

const SurveyModal = ({
  restaurant,
  feedback,
  setFeedback,
  translation,
  setShowSurvey,
}) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleInputChange = (id, value) => {
    setFeedback((prev) => ({ ...prev, [id]: value }));
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();

    // Validación: todas las preguntas deben tener respuesta
    const unanswered = restaurant.survey.questions.filter(
      (q) => !feedback[q.id] && feedback[q.id] !== 0
    );

    if (unanswered.length > 0) {
      setToastMessage(
        translation(restaurant.survey.fillAllMessage) ||
          "Por favor, responde todas las preguntas."
      );
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    console.log("Respuestas enviadas:", feedback);

    // Muestra el toast de éxito
    setToastMessage(translation(restaurant.survey.thankYouMessage));
    setShowToast(true);

    // Cierra el modal después de 2.5 segundos
    setTimeout(() => {
      setShowToast(false);
      setShowSurvey(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start sm:items-center overflow-y-auto py-10 px-4">
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#121212] text-white rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Botón Cerrar */}
        <button
          type="button"
          onClick={() => setShowSurvey(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 text-2xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-400">
            {translation(restaurant.survey.title)}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 leading-snug">
            {translation(restaurant.survey.description)}
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSurveySubmit}
          className="space-y-6 overflow-y-auto max-h-[70vh] pr-2"
        >
          {restaurant.survey.questions.map((q) => (
            <div key={q.id} className="space-y-2">
              <label className="font-semibold text-orange-300 text-sm sm:text-base">
                {translation(q.question)}
              </label>

              {q.type === 1 && (
                <input
                  type="text"
                  placeholder={translation(q.placeholder)}
                  className="w-full bg-[#1e1e1e] border border-orange-500/40 rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none text-white placeholder-gray-500"
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                />
              )}

              {q.type === 2 && (
                <select
                  className="w-full bg-[#1e1e1e] border border-orange-500/40 rounded-lg p-2 focus:ring-2 focus:ring-orange-200 outline-none text-orange-300"
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                >
                  <option value="">--</option>
                  {q.options.map((opt, i) => (
                    <option
                      key={i}
                      value={translation(opt)}
                      className="text-orange-400"
                    >
                      {translation(opt)}
                    </option>
                  ))}
                </select>
              )}

              {q.type === 3 && (
                <div className="flex gap-2 justify-center text-2xl text-orange-400">
                  {[...Array(q.maxStars)].map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleInputChange(q.id, i + 1)}
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      {feedback[q.id] > i ? "★" : "☆"}
                    </button>
                  ))}
                </div>
              )}

              {q.type === 4 && (
                <textarea
                  rows={q.rows || 3}
                  placeholder={translation(q.placeholder)}
                  className="w-full bg-[#1e1e1e] border border-orange-500/40 rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none text-white placeholder-gray-500"
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                ></textarea>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition transform hover:scale-[1.02]"
          >
            {translation(restaurant.survey.submitButton)}
          </button>
        </form>

        {/* Toast interno */}
        {showToast && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-black font-semibold text-base sm:text-lg px-6 py-3 rounded-2xl shadow-2xl border border-orange-300/60 text-center w-[85%] sm:w-auto">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyModal;
