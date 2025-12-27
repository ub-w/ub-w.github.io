var posts=["2025/12/06/FPGA相关知识点0/","2025/12/10/FPGA相关知识点2/","2025/12/19/FPGA相关知识点4/","2025/12/09/FPGA相关知识点1/","2025/12/11/FPGA相关知识点3/","2025/12/25/FPGA相关知识点5/","2025/12/23/数字IC设计入门1/","2025/12/27/数字IC设计入门2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };