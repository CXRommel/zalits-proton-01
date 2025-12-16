import { useState } from "react";

const inputClasses = "w-full px-4 py-2 border border-neutral-300 rounded-lg";
const labelClasses = "block text-sm font-medium text-neutral-900 mb-2";

export const QuestionType = {
  Text: 1,
  ChooseOptions: 2,
  StarRate: 3,
  MultilineText: 4,
};

export function SurveyQuestion({ question, lang, value, onChange }) {
  const { id, question: qText, required, type } = question;

  if (type === QuestionType.Text) {
    const { placeholder } = question;
    return (
      <div>
        <label htmlFor={id} className={labelClasses}>
          {qText[lang]}
        </label>
        <input
          type="text"
          name={id}
          id={id}
          required={required}
          placeholder={placeholder[lang]}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        />
      </div>
    );
  }

  if (type === QuestionType.ChooseOptions) {
    const { options } = question;
    return (
      <div>
        <label htmlFor={id} className={labelClasses}>
          {qText[lang]}
        </label>
        <select
          name={id}
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {options.map((opt, index) => (
            <option key={index} value={opt[lang]}>
              {opt[lang]}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === QuestionType.StarRate) {
    const { maxStars } = question;
    const [rangeValue, setRangeValue] = useState(maxStars);

    return (
      <div>
        <label htmlFor={id} className={labelClasses}>
          {qText[lang]}
        </label>
        <div className="flex items-center gap-4">
          <input
            required={required}
            type="range"
            id={id}
            name={id}
            min="0"
            max={maxStars}
            value={rangeValue}
            onChange={({ target }) => setRangeValue(target.value)}
            className="w-full"
          />
          <span className="text-lg font-semibold text-gray-700 min-w-[3rem] text-center">
            {rangeValue} / {maxStars}
          </span>
        </div>
      </div>
    );
  }

  if (type === QuestionType.MultilineText) {
    const { rows, placeholder } = question;
    return (
      <div>
        <label htmlFor={id} className={labelClasses}>
          {qText[lang]} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          name={id}
          id={id}
          required={required}
          rows={rows || 4}
          placeholder={placeholder[lang]}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </div>
    );
  }

  return null;
}
