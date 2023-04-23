const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery');
const galleryEl = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = "400" height = "auto"></li>`;
const galleryMarkup = images.map(galleryEl).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


// const gallery = document.querySelector('.gallery');
// const renderGallery = (arr) => {
//   return arr.map(({ url, alt }) => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = alt;
//     img.width = 450;
//     li.append(img);
//     return li;
//   });
// };
// const galleryMarkup = renderGallery(images);
// console.log(galleryMarkup);
// gallery.append(...galleryMarkup);