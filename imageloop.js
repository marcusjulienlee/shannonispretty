var ImageLoop = function () {
  var s = void 0;

  return {
    settings: function settings() {
      return {
        image: document.querySelectorAll('.team__img'),
        link: document.querySelectorAll('.team__link'),
        intervalTime: 500
      };
    },
    init: function init() {
      s = this.settings();
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      this.hideImg();
      this.hoverImg();
    },
    hideImg: function hideImg() {
      [].forEach.call(s.image, function (img) {
        [].forEach.call(img.children, function (moreImg, idx) {
          if (idx !== 0) {
            moreImg.style.display = 'none';
          }
        });
      });
    },
    hoverImg: function hoverImg() {
      [].forEach.call(s.link, function (link) {
        var interval = void 0;
        var count = 0;

        link.addEventListener('mouseenter', function (e) {
          var target = e.target.children[0];
          // Idx 1 because of the span tag/preloader
          var img = target.children[1].children;
          var length = img.length;

          interval = setInterval(function () {
            img[count].style.display = 'none';

            if (count === length - 1) {
              count = 0;
            } else {
              count++;
            }

            img[count].style.display = 'block';
          }, s.intervalTime);
        });

        link.addEventListener('mouseleave', function () {
          clearInterval(interval);
        });
      });
    }
  };
}();

ImageLoop.init();
