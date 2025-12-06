var posts=["2025/11/28/hello-world/","2025/12/06/FPGA相关知识点0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };