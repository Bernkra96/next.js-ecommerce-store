import 'server-only';

const items = [
  {
    id: 0, // Protuct id
    itemName: 'Nice potuct  01', // LisstingName
    brand: 'Öko cop', // Barnd
    price: 123456789, // Price in Euro Cent 100 Cent = 1 Euro
    stock: 10,
    rating: 2, // of 5
    img: 'https://www.nasa.gov/sites/default/files/styles/946xvariable_height/public/images/481614main_rpd_soyuz_full.jpg?itok=anG3ZOmW',
    shortdiscrion: 'Cool öko item ',
  },
  {
    id: 1, // Protuct id
    itemName: 'Collo Dibng', // LisstingName
    brand: 'Erth AG', // Barnd
    price: 841, // Price in Euro Cent 100 Cent = 1 Euro
    rating: 3, // of 5
    stock: 1,
    img: 'https://www.nasa.gov/sites/default/files/styles/430x323/public/images/482069main_rh_Explorer_full.jpg?itok=iy7seLsU',
    shortdiscrion: 'Öko prtuct ',
  },
  {
    id: 3, // Protuct id
    itemName: 'Tool ', // LisstingName
    brand: 'ARRRRR inc', // Barnd
    price: 119, // Price in Euro Cent 100 Cent = 1 Euro
    rating: 5, // of 5
    stock: 45, // Stock
    img: 'https://www.nasa.gov/sites/default/files/styles/946xvariable_height/public/images/481483main_rpd_shuttle_full.jpg?itok=dXTAtOEy',
    shortdiscrion: 'Cool öko item ',
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((item) => item.id === id);
}
