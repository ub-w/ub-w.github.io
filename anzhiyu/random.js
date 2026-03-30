var posts=["2025/10/01/FPGA相关知识点1/","2025/10/08/FPGA相关知识点3/","2025/10/01/FPGA相关知识点0/","2025/10/03/FPGA相关知识点2/","2025/10/15/FPGA相关知识点5/","2025/10/14/FPGA相关知识点4/","2025/12/22/数字IC设计入门1/","2026/03/29/SystemVerilog验证/","2025/12/23/数字IC设计入门2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };