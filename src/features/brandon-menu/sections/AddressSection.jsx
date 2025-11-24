const langAddress = {
  "en": "Address",
  "es": "Dirección"
}

function AddressSection({ address, lang }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        {langAddress[lang]}
      </h2>
      <p className="text-base text-gray-300 leading-relaxed">
        {address.street}, {address.city}, {address.state} {address.zip}, {address.country}
      </p>
    </div>
  );
}

export default AddressSection;
