// script.js
window.onload = function() {
    // 检查localStorage中是否有“accepted”标记，如果没有，则显示弹窗
    if (localStorage.getItem("accepted") !== "true") {
        document.getElementById('popup').style.display = 'block';
    } else {
        document.getElementById('popup').style.display = 'none';
    }
}

function accept() {
    // 弹框消失后，设置localStorage标记，防止再次出现
    localStorage.setItem("accepted", "true");
    document.getElementById('popup').style.display = 'none';
}

function reject() {
    // 点击放弃时，返回到上一个页面
    window.history.back();
}

/* 图片切换 */
document.addEventListener('DOMContentLoaded', function() {
    var images = [
      '111.png', // 替换为你的图片地址
      '111.webp', // 替换为你的图片地址
      'beijingtu.webp'  // 替换为你的图片地址
    ];
    
    var currentImageIndex = 0;
    var newBackgroundImage = document.querySelector('.new-background-image');
    
    function loadBackgroundImage(index) {
      if (index >= 0 && index < images.length) {
        currentImageIndex = index;
        newBackgroundImage.style.backgroundImage = `url(${images[index]})`;
      }
    }
    
    function nextImage() {
      var nextIndex = (currentImageIndex + 1) % images.length;
      loadBackgroundImage(nextIndex);
    }
    
    // Initial image load
    loadBackgroundImage(currentImageIndex);
    
    // Change image every 5 seconds
    setInterval(nextImage, 5000);
  });