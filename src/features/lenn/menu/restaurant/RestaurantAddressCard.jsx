export function RestaurantAddressCard({ address }) {
  const { street, city, state, zip, country } = address;
  return (
    <div className="">
      <h1 className="text-lg">
        <p>
          <span>📌</span> {street}, {zip}
        </p>
        <p>
          <span>🌆</span> {city}, {state}
        </p>
        <p>
          <span>🌍</span> {country}
        </p>
      </h1>
    </div>
  );
}
