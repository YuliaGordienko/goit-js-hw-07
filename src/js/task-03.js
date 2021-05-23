const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const mainList = document.querySelector('#gallery');
mainList.classList.add('lists')

for (const image of images) {
    const li = document.createElement('li');
    const imgTag = document.createElement('img');
  li.appendChild(imgTag);
  imgTag.classList.add('styles-for-img')
    imgTag.src = image.url;
  imgTag.alt = image.alt;
   mainList.appendChild(li);
  console.log(li)
   
}