const langAddress = {
  "en": "Address",
  "es": "Dirección"
}

function AddressSection({ address, lang }) {
  return (
    <div className="w-full flex flex-col">
      <h2>{langAddress[lang]}</h2>
      <p>
        {address.street}, {address.city}, {address.state} {address.zip}, {address.country}
      </p>
    </div>
  );
}

export default AddressSection;
