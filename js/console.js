 var now1 = new Date();
 
 function createtime1() {
     var grt = new Date("06/27/2024 00:00:00"); //此处修改你的建站时间或者网站上线时间
     now1.setTime(now1.getTime() + 250);
     var days = (now1 - grt) / 1000 / 60 / 60 / 24;
     var dnum = Math.floor(days);
 
     var ascll = [
         `欢迎来到 Bai ManMan的小家!`,
         `You have a gentle soul。 🍭🍭🍭`,
         `
 
         
██████  ███████ ██████      ██████  ███████  █████  ███    ██ 
██   ██ ██      ██   ██     ██   ██ ██      ██   ██ ████   ██ 
██████  █████   ██   ██     ██████  █████   ███████ ██ ██  ██ 
██   ██ ██      ██   ██     ██   ██ ██      ██   ██ ██  ██ ██ 
██   ██ ███████ ██████      ██████  ███████ ██   ██ ██   ████ 
                                                                       
                                                                       
                                                                                            
 `,
         "破站已经苟活",
         dnum,
         "天啦!",
         "©2024 By Bai ManMan",
     ];
 
     setTimeout(
         console.log.bind(
             console,
             `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
             "color:#39c5bb",
             "",
             "color:#39c5bb",
             "color:#39c5bb",
             "",
             "color:#39c5bb",
             ""
         )
     );
 }
 
 createtime1();
 
 function createtime2() {
 
     setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，陌生人", "color:white; background-color:#23c682", ""));
 
 
     setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台，请遵守GPL协议", "color:white; background-color:#4f90d9", ""));
     setTimeout(
         console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
     );
 }
 createtime2();
 
 // 重写console方法
 console.log = function () { };
 console.error = function () { };
 console.warn = function () { };