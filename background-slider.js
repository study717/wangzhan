document.addEventListener('DOMContentLoaded', function() {
  var images = [
    'beijingtu.webp',  // 替换为你的图片地址
    '8.webp', // 替换为你的图片地址
    '111.webp', // 替换为你的图片地址
    
  ];

  var cultureContents = [
    '归德投资是一家新兴的基于中长期视角、基本面驱动策略、研究和投资于全球主要市场的证券投资基金，团队成员具有丰富的国内、香港和美国的公开市场投研经验，拥有清晰的投资理念和独特的方法论，致力于构建和投资确信的投资工具。',
    '这里是第二张图片对应的企业文化描述。',
    '这里是第三张图片对应的企业文化描述。'
  ];

  var currentImageIndex = 0;
  var background = document.querySelector('.background-image');
  // 移除文化内容的元素，因为我们不再需要它
  // var cultureContent = document.getElementById('culture-content');

  function changeImage(dot) {
    var index = dot.getAttribute('data-index');
    currentImageIndex = parseInt(index);
    background.style.backgroundImage = `url(${images[currentImageIndex]})`;
    // 移除更新文化内容的代码
    // cultureContent.innerHTML = cultureContents[currentImageIndex];
    updateDots();
  }

  function updateDots() {
    var dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentImageIndex].classList.add('active');
  }

  function nextImage() {
    var nextIndex = (currentImageIndex + 1) % images.length;
    changeImage(document.querySelectorAll('.dot')[nextIndex]);
  }

  // Initial image load
  changeImage(document.querySelectorAll('.dot')[0]);

  // Change image every 5 seconds
  setInterval(nextImage, 5000);

  // 为每个小圆点添加点击事件监听器
  var dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      changeImage(this);
    });
  });
});