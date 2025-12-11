var posts=["2025/11/28/hello-world/","2025/12/06/FPGA相关知识点0/","2025/12/09/FPGA相关知识点1-generate语法/","2025/12/10/FPGA相关知识点2/","2025/12/11/FPGA相关知识点3---寄存器引入带来的延迟/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };