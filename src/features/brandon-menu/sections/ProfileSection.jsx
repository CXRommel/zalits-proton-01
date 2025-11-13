function ProfileSection({ profile, name, lang, languages, handleLangChange }) {
  return (
    <div className=" w-full max-w-2xl mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8 flex flex-col items-center sm:flex-row sm:items-center sm:gap-8 relative">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <select className="w-fit text-sm rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500" value={lang} onChange={handleLangChange}>
          {languages.map((langCode) => (
            <option key={langCode} value={langCode}>
              {langCode.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <img className="w-24 h-24 rounded-full object-cover shadow-lg mb-5 sm:mb-0 flex-shrink-0" src={profile.logo.url} alt={`${name} Logo`}/>

      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-white mb-2">
          {name}
        </h1>
        <h2 className=" text-lg font-medium text-gray-400">
          {profile.slogan[lang]}
        </h2>
      </div>
    </div>
  );
}

export default ProfileSection;
