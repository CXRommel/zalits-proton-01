import { text } from "../helpers/text";

export default function MenuHeader({
  dataMenu,
  language,
  handlerLanguage,
  handlerCurrency,
}) {
  return (
    <header className="bg-white rounded-lg p-6 shadow-sm border border-orange-200">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-4">
          <img
            src={
              "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/263638995_109836721536269_961652445950806142_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=srVUxedC-BcQ7kNvwGoLcpc&_nc_oc=AdknwBERPjEKiNcKjeELa3mCBbk-QZ8JKofCumvtebSLCqkjftl0fCIiBWWCtuG5O7Asgn5HmMfh7wDqkolvQMnR&_nc_zt=23&_nc_ht=scontent.fmex31-1.fna&_nc_gid=JVrg1U7swX-QUVWEyK3GCg&oh=00_Afj1dT2pzEcVov1t_0ZbwTDakXCffbY5dBJCbxZYFWIcIQ&oe=691E497C"
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
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${
              language === "es"
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
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${
              language === "en"
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
      </div>
    </header>
  );
}
