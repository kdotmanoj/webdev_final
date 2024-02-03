const likeHeart = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
const unlikeHeart = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
const button = document.querySelector('like1');
button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==likeHeart) {
    button.textContent = unlikeHeart;
  } else {
    button.textContent = likeHeart;
  }
}