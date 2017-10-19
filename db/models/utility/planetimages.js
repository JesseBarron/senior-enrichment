const chalk = require('chalk');

/*
  this will hold an array of image 
  and export a function that will generate a random link
  to give to our database...
*/

const planetImages = [
  'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small-800x533.jpg',
  'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2010/03/mg20527531.500-2_800.jpg',
  'https://i.imgur.com/xCmzTIx.jpg',
  'https://apod.nasa.gov/apod/image/9911/venus2_mag_big.gif',
  'https://media.npr.org/assets/img/2011/01/10/kepler-rocky-planet_wide-978a4c79a8aa222dbde9aba55ffd6d0637f79bb9.jpg?s=1400',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2013/03/saturn525.jpg?itok=K8aNMP_F',
  'http://ichef.bbci.co.uk/images/ic/976xn/p043q8fj.jpg',
  'https://www.nasa.gov/sites/default/files/mercury_1.jpg',
  'https://solarsystem.nasa.gov/images/slideshow/192016main_100907_835.jpg',
  'https://exoplanets.nasa.gov/internal_resources/497/',
  'https://images.csmonitor.com/csm/2012/11/1108-super-earth-Kepler-22b.jpg?alias=standard_900x600',
  'https://cdn-images-1.medium.com/max/960/1*H8RNg_7CZZhwwVfnF9nCQQ.jpeg',
  'http://cdn.sci-news.com/images/2017/05/image_4865f-KELT-11b.jpg',
  'http://www.widewallpapershd.info/file/6276/728x408/16:9/sun-behind-earth-satellite_596690459.jpg',
  'https://space-facts.com/wp-content/uploads/mars.jpg',
];

const imageGenerator = () =>{
  let max = planetImages.length - 1;
  let ranIdx = Math.floor(Math.random() * (max - 0 + 1) + 0);
  // console.log(chalk.white(planetImages[ranIdx]), chalk.blue('Random index', ranIdx));
  return planetImages[ranIdx];
};

module.exports = imageGenerator;