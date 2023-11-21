
  
  var script = document.createElement("script");
  script.src = "//cdn.jsdelivr.net/npm/sweetalert2@11";
  //script.onload = function() {VuongVietAnhAudio();};
  document.head.appendChild(script);
  var style = document.createElement("style");
  var player = document.getElementById('player');
  var videoSources = [
      "https://video1.x10.mx/api.php",
      "https://vctzz.ddns.us/api.php",
  ];
  var currentVideoIndex = Math.floor(Math.random() * videoSources.length);
  var isPlaying = true;
  var videoPlayer = document.getElementById('video-player');
  
  videoPlayer.addEventListener('mouseover', function(e) {
    // Ngăn chặn hoa anh đào xuất hiện bên trong phần khung video
    e.target.style.overflow = 'hidden';
  });
  
  function toggleVideo() {
    if (isPlaying) {
      player.pause();
      isPlaying = false;
    } else {
      player.play();
      isPlaying = true;
  
      // Hiển thị thông báo
      toastr.success("Đã phát video", "Thông báo");
    }
  }
  
  function playRandomVideo() {
    var randomIndex = Math.floor(Math.random() * videoSources.length);
    while (randomIndex === currentVideoIndex) {
      randomIndex = Math.floor(Math.random() * videoSources.length);
    }
    currentVideoIndex = randomIndex;
    var randomSource = videoSources[randomIndex];
    player.src = randomSource;
    player.load();
    player.play();
  
    // Hiển thị thông báo
    toastr.success("Đã phát video ngẫu nhiên", "Thông báo");
  }
  
  player.addEventListener('play', function() {
    isPlaying = true;
  });
  
  player.addEventListener('pause', function() {
    isPlaying = false;
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    player.play();
  });
  
  function goHome() {
    player.src = videoSources[currentVideoIndex];
    player.load();
    player.play();
  }
  
  