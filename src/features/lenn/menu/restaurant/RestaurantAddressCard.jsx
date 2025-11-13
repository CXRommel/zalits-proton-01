export function RestaurantAddressCard({ address, ...props }) {
  const { street, city, state, zip, country } = address;
  return (
    <div {...props}>
      <h1 className="leading-relaxed">
        <p className="mb-2 flex items-center gap-2">
          <span className="text-xl">📌</span>
          <span className="text-stone-800 font-medium">
            {street}, {zip}
          </span>
        </p>
        <p className="mb-2 flex items-center gap-2">
          <span className="text-xl">🌆</span>
          <span className="text-stone-800 font-medium">
            {city}, {state}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl">🌍</span>
          <span className="text-stone-800 font-medium">{country}</span>
        </p>
      </h1>
    </div>
  );
}
