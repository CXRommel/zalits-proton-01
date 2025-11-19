const selectStyle =
  "w-fit text-sm text-stone-600 bg-white px-3 py-2 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all cursor-pointer font-medium shadow-sm";

export function IntlManager({
  supportCurrencies,
  supportLangs,
  changeCurrency,
  changeLang,
}) {
  return (
    <div className="flex justify-between items-center pb-8 px-2">
      <select
        name="lang"
        id="lang"
        onChange={(e) => changeLang(e.target.value)}
        className={selectStyle}
      >
        {supportLangs.map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
      <select
        name="currencies"
        id="currencies"
        onChange={(e) => changeCurrency(e.target.value)}
        className={selectStyle}
      >
        {supportCurrencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
