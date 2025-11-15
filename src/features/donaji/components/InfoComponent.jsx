import React, { useState, useEffect } from "react";

function InfoRestaurantComponent({ menuData, lang }) {
  const [openSurvey, setOpenSurvey] = useState(false);
  const daysMap = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const englishDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatSchedule = () => {
    return menuData.schedule
      .map((entry) => {
        const dayNames = entry.days
          .map((d) => (lang === "en" ? englishDays[d] : daysMap[d]))
          .join(", ");
        return `${dayNames}: ${entry.open} AM`;
      })
      .join(" - ");
  };

  const isSurveyEnabled =
    menuData.survey?.enabled &&
    menuData.survey?.questions &&
    menuData.survey.questions.length > 0;

  return (
    <div className="w-full bg-orange-900 p-4 rounded-xl flex flex-col gap-4 max-w-[450px]">
      <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/50/clock.png"
          alt="Horario"
          className="w-7 h-7 opacity-80"
        />

        <div>
          <h3 className="text-orange-950 font-semibold text-lg">
            {lang === "en" ? "Schedule" : "Horario"}
          </h3>
          <p className="text-orange-950 text-sm leading-tight">
            {formatSchedule()}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/50/marker.png"
          alt="Dirección"
          className="w-7 h-7 opacity-80"
        />

        <div>
          <h3 className="text-orange-950 font-semibold text-lg">
            {lang === "en" ? "Address" : "Dirección"}
          </h3>
          <p className="text-orange-950 text-sm leading-tight">
            {menuData.address.street}
            <br />
            {menuData.address.city}, {menuData.address.state},{" "}
            {menuData.address.zip} - {menuData.address.country}
          </p>
        </div>
      </div>

      {isSurveyEnabled && (
        <div>
          <button
            onClick={() => setOpenSurvey(true)}
            className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 transition w-full"
          >
            {lang === "en" ? "Answer Survey" : "Contestar Encuesta"}
          </button>
          {openSurvey && (
            <SurveyModal
              onClose={() => setOpenSurvey(false)}
              lang={lang}
              survey={menuData.survey}
            />
          )}
        </div>
      )}
    </div>
  );
}

function SurveyModal({ onClose, lang, survey }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Respuestas:", answers);

    alert("¡Gracias por compartir tu opinión!");
    onClose();
  };

  if (!survey.questions || survey.questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4">
        <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-xl">
          <button
            className="text-gray-500 float-right text-xl"
            onClick={onClose}
          >
            ✕
          </button>
          <p className="text-center text-gray-600">
            {lang === "en"
              ? "No survey available at the moment."
              : "No hay encuesta disponible en este momento."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-xl">
        <button className="text-gray-500 float-right text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
          {survey.title?.[lang] || (lang === "en" ? "Survey" : "Encuesta")}
        </h2>

        <p className="text-center text-gray-600 mb-4">
          {survey.description?.[lang] || ""}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {survey.questions.map((q) => (
            <div
              key={q.id}
              className="bg-gray-100 border border-gray-300 p-4 rounded-lg"
            >
              <label className="block text-gray-900 font-semibold mb-2">
                {q.question?.[lang] || `Question ${q.id}`}
                {q.required && <span className="text-red-500"> *</span>}
              </label>

              {q.type === 1 && (
                <textarea
                  required={q.required}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300"
                  placeholder={q.placeholder?.[lang] || ""}
                />
              )}

              {q.type === 2 && (
                <select
                  required={q.required}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300"
                >
                  <option value="">
                    {lang === "en"
                      ? "Select an option"
                      : "Selecciona una opción"}
                  </option>

                  {q.options?.map((op, i) => (
                    <option key={i} value={op[lang]}>
                      {op[lang]}
                    </option>
                  ))}
                </select>
              )}

              {q.type === 3 && (
                <div className="flex gap-1">
                  {[...Array(q.maxStars || 5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <span
                        key={index}
                        onClick={() => handleChange(q.id, starValue)}
                        className={`cursor-pointer text-2xl ${
                          answers[q.id] >= starValue
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              )}

              {q.type === 4 && (
                <textarea
                  required={q.required}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300"
                  placeholder={q.placeholder?.[lang] || ""}
                  rows={q.rows || 4}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
          >
            {survey.submitButton?.[lang] ||
              (lang === "en" ? "Submit" : "Enviar respuestas")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InfoRestaurantComponent;
