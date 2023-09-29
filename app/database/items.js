import 'server-only';

const items = [
  {
    id: 0, // Protuct id
    itemName: 'Nice potuct  01', // LisstingName
    brand: 'Öko cop', // Barnd
    price: 123456789, // Price in Euro Cent 100 Cent = 1 Euro
    stock: 10,
    rating: 2, // of 5
    img: 'https://images-assets.nasa.gov/image/sts119-s-005/sts119-s-005~thumb.jpg',
    shortdiscrion: 'Cool öko item ',
  },
  {
    id: 1, // Protuct id
    itemName: 'Rocket', // LisstingName
    brand: 'Space AG', // Barnd
    price: 841, // Price in Euro Cent 100 Cent = 1 Euro
    rating: 3, // of 5
    stock: 1,
    img: 'https://images-assets.nasa.gov/image/KSC-20230518-PH-RKL01_0002/KSC-20230518-PH-RKL01_0002~medium.jpg',
    shortdiscrion: 'Öko prtuct ',
  },
  {
    id: 3, // Protuct id
    itemName: 'Tool ', // LisstingName
    brand: 'ARRRRR inc', // Barnd
    price: 119, // Price in Euro Cent 100 Cent = 1 Euro
    rating: 5, // of 5
    stock: 45, // Stock
    img: 'https://images-assets.nasa.gov/image/KSC-20220614-PH-CSH01_0044/KSC-20220614-PH-CSH01_0044~large.jpg',
    shortdiscrion: 'Cool öko item ',
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((item) => item.id === id);
}
