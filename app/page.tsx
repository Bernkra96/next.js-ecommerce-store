export default function Home() {
  const items = [
    {
      id: 0, // Protuct id
      itemName: 'Nice potuct  01', // LisstingName
      brand: 'Öko cop', // Barnd
      price: 123456789, // Price in Euro Cent 100 Cent = 1 Euro
      stock: 10,
      rating: 2, // of 5
      img: [],
      shortdiscrion: 'Cool öko item ',
    },
    {
      id: 1, // Protuct id
      itemName: 'Collo Dibng', // LisstingName
      brand: 'Erth AG', // Barnd
      price: 841, // Price in Euro Cent 100 Cent = 1 Euro
      rating: 3, // of 5
      stock: 1,
      img: [],
      shortdiscrion: 'Öko prtuct ',
    },
    {
      id: 3, // Protuct id
      itemName: 'Tool ', // LisstingName
      brand: 'ARRRRR inc', // Barnd
      price: 119, // Price in Euro Cent 100 Cent = 1 Euro
      rating: 5, // of 5
      stock: 45, // Stock

      img: [],

      shortdiscrion: 'Cool öko item ',
    },
  ];

  return (
    <main>
      <h1> Bernhard Shop </h1>

      <p> Willkommen in Bernahrd's Shop</p>

      <h2>Unsre Protuckte </h2>

      <ul>
        {items.map((item) => (
          <li key={`item.id ${item.id}`}>
            <h3> {item.itemName} </h3>
            <p> {item.brand} </p>
            <p> {'Rating ' + item.rating + ' / 5'} </p>
            <p> {'price = ' + item.price / 100 + '€'} </p>
            <p> {'Stock : ' + item.stock + ' .stk'} </p>
            <p>{item.shortdiscrion}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
