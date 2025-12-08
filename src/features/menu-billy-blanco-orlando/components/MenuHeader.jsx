import { text } from "../helpers/text";
import { getScheduleStatus } from "../helpers/schedule";

export default function MenuHeader({
  dataMenu,
  language,
  handlerLanguage,
  handlerCurrency,
}) {

  const scheduleStatus = getScheduleStatus(dataMenu.schedule, language);

  return (
    <header className="bg-white rounded-lg p-6 shadow-sm border border-orange-200">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-4">
          <img
            src={
              "https://zalits-hermes-bucket.sfo2.cdn.digitaloceanspaces.com/iris/p/019a5cd9-f468-7e4f-99e4-a3d1058c2fc2.jpg"
            }
            alt="Restaurant Logo"
            className="w-20 h-20 rounded-full object-cover border-2 border-orange-300"
          />
          <div>
            <h1 className="text-3xl font-bold text-orange-600">
              {dataMenu.name}
            </h1>
            <p className="text-sm text-gray-600">
              {text(dataMenu.profile.slogan, language)}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              handlerLanguage("es");
              handlerCurrency("mxn");
            }}
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${language === "es"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            ES
          </button>
          <button
            onClick={() => {
              handlerLanguage("en");
              handlerCurrency("usd");
            }}
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${language === "en"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-orange-600 mb-1">Dirección</p>
          <p>{dataMenu.address.street}</p>
          <p>
            {dataMenu.address.city}, {dataMenu.address.state}{" "}
            {dataMenu.address.zip}
          </p>
          <p>{dataMenu.address.country}</p>
        </div>

        <div className="text-sm text-gray-700">
          <p className="font-semibold text-orange-600 mb-1">Contacto</p>
          <p>{dataMenu.contact.phone}</p>
          <p>{dataMenu.contact.email}</p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200">
          <p
            className={`font-semibold text-sm ${scheduleStatus.isOpen ? "text-green-600" : "text-red-600"
              }`}
          >
            {scheduleStatus.text}
          </p>
        </div>
      </div>
    </header>
  );
}
