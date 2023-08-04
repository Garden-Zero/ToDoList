const imgArr = ["0.jpg","1.jpg","2.jpg"];
const chooseImg = imgArr[Math.floor(Math.random()*imgArr.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chooseImg}`;
bgImg.id = "bgImg";
document.body.appendChild(bgImg);