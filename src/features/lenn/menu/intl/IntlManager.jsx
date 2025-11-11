export function IntlManager ({supportCurrencies, supportLangs, changeCurrency, changeLang}){
  return (
    <div className="grid grid-cols-2 place-content-between pb-10">
        <select
          name="lang"
          id="lang"
          onChange={(e) => changeLang(e.target.value)}
          className="w-fit text-white"
        >
          {supportLangs.map((lng) => (
            <option
              key={lng}
              value={lng}
              className="text-neutral-950"
            >
              {lng.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          name="currencies"
          id="currencies"
          onChange={(e) => changeCurrency(e.target.value)}
          className="w-fit place-self-end text-white"
        >
          {supportCurrencies.map((curr) => (
            <option key={curr} value={curr} className="text-neutral-950">
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
  )
}
