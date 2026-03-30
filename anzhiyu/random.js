var posts=["2026/03/30/FPGA相关知识点1/","2026/03/30/FPGA相关知识点2/","2026/03/30/FPGA相关知识点3/","2026/03/30/FPGA相关知识点4/","2026/03/30/FPGA相关知识点5/","2026/03/29/SystemVerilog验证/","2025/12/22/数字IC设计入门1/","2026/03/30/数字IC设计入门2/","2026/03/30/FPGA相关知识点0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };