var posts=["2025/11/01/FPGA相关知识点0/","2025/11/01/FPGA相关知识点1/","2025/11/03/FPGA相关知识点2/","2025/11/08/FPGA相关知识点3/","2025/11/15/FPGA相关知识点5/","2025/11/14/FPGA相关知识点4/","2026/04/01/SystemVerilog 显示输出函数/","2026/03/29/SystemVerilog验证/","2026/03/30/Verilator/","2025/12/22/数字IC设计入门1/","2025/12/23/数字IC设计入门2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };