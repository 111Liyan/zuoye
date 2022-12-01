<template>
  <div class="home">
    <div class="box">
      <div class="top">
        <img class="img" src="imgs.png" alt="" />
        <button class="bth">To-Do List</button>
      </div>
    <div class="con">
        <h3>~Today l need to~</h3>
        <div class="aop">
           <div class="cont">
               <input type="text" placeholder="Add new todo..." class="inp" />
               <button type="submit" class="btn">
                 <span class="add">Submit</span>
               </button>
             </div>
        </div>
    </div>
    <!-- <ul class="ul">
        <li>
            <p>
               <span class="check"></span>
                <span>111</span>
            </p>
            <p>x</p>
        </li>
    </ul> -->
     <div class="fool">
        <div class="boot">
            <img class="imgs" src="img.png" alt="">
            <span class="span">Congrat you have no more tasks to do</span>
        </div>
        <div class="bths">
            <p><span>0</span>item left</p>
            <div class="ths">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <p>Clear completed</p>
        </div>
     </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style>
   .home{
    padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  background-repeat: no-repeat;
  box-sizing: border-box;
   }
   
    .box {
      padding: 20px 40px;
      text-align: center;
      width: 440px;
      max-width: 100%;
      margin: 0 auto;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      background: #f2f2f2;
      box-sizing: border-box;
    }
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }
    .bth {
      width: 100px;
      height: 50px;
      transform: rotate(3deg);
      font-size: 17px;
      background-color: #fe7345;
      color: #fff;
      border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
      border: none;
    }
    .con{
        margin-top: 25px;
        /* height: 120px; */
    }
    h3 {
      text-align: center;
      margin: 10px;
    }
   
    .cont {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .inp {
      width: 236.5px;
      height: 29px;
      border: 0;
      border-bottom: 3px dashed #fe7345;
      padding: 5px 0 3px;
      font-size: 18px;
      background: transparent;
      outline: none;
      height: 35px;
    }
    .btn {
      width: 80.24px;
      position: relative;
      transform: rotate(4deg);
      border-radius: 6px;
      transition: transform 0.25s;
      outline: none;
      border: none;
    
    }
    .add {
     width: 47px;
      position: relative;
      display: block;
      font-size: 16.5px;
      margin-left: -5px;
      padding: 0.34em 0.84em;
      border: 2px solid #494a4b;
      border-radius: inherit;
      background-color: #fff;
    }
    .btn::before {
      width: 85.24px;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      transform: scaleY(1.1);
      border: 1px solid #494a4b;
      border-radius: inherit;
      transform-origin: top;
      background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
      background-color: #fe7345;
      transition: transform 0.25s;
    }
.ul{
    list-style: none;
    margin-top: 20px;
}
.ul li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.check{
    padding: 5px;
    display: inline-block;
    border: 2px solid #000;
}
.boot{
    display: flex;
    justify-content: center;
}
.imgs{
    width: 16px;
    height: 22px;
}
.span{
    color: #b6b7b7;
    font-size: 14px;
}
@keyframes btn{
    0%{
        transform: rotate(3deg);
    }
}
.btn:active{
    animation: btn 0.6s;
    height: 30px;
    transform: rotate(0deg);
    box-shadow: 0px 0px 0px #000;
}
.bths{
    display: flex;
    align-items: center;
        justify-content: space-between;
        margin-top: 100px;
        font-size: 12px;
        white-space: nowrap;
        display: none;
}
.ths{
    width: 150px;
    display: flex;
    justify-content: space-between;

}
</style>
