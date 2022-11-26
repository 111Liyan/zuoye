<template>
  <div class="home">
    <div class="top">
      <div class="tops">
           <img src="imgs.png" alt="">
            <button class="bth">To-Do List</button>
        </div>
        <h4>~Today I need to~</h4>
        <div class="inp">
            <input class="input" type="text" placeholder="Add new todo" >
            <button class="but input">Submit</button>
        </div>
        <ul class="ul">
            <li class="list">
               <p>
                    <input type="checkbox" class="boxs">
                    <span>1111</span>
               </p>
                <p>x</p>
            </li>
        </ul>
        <div class="fool">
            <p>1 item left</p>
            <div class="ap">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <p>Clear completed</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
    body{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-image:linear-gradient(90deg,#ffafbd,#ffc3a0);
        
    }
    .top{
        width: 440px;
        height: 449px;
        background-color: #f2f2f2;
        margin: 100px auto;
        border-radius: 20px;
        padding: 30px 30px;
        box-sizing: border-box;
        position: relative;
    }
    .tops{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 80px;
        height: 80px;
        
    }
    .bth{
        width: 100px;
        height: 44px;
        background-color: #ea7953;
        color: #fff;
        font-size: 17px;
        border: none;
        margin-left: 10px;
        border-radius: 5% 20% 20% 5%;
        transform: rotate(3deg);
    }
    h4{
        text-align: center;
    }
    .inp{
        margin-top: 10px;
    }
    .input{
        width: 270px;
        border: none;
        border-bottom: #ea7953 2px dashed;
        background: transparent;
    }
    .but{
        width: 70px;
        height: 35px;
        margin-left: 10px;
        border: 2px solid #000;
        background-color: #fff;
        border-radius: 5px;
        transform: rotate(3deg);
    }
    ul{
        list-style: none;
        padding: 0;
    }
     .list{
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   .boxs{
    border: 2px solid #000;
    background-color: #f2f2f2;
   }
    .fool{
        position: absolute;
        bottom: 30px;
        display: flex;
        font-size: 12px;
        width: 85%;
        justify-content: space-between;
    }
.ap{
    display: flex;
    width: 130px;
    justify-content: space-between;
}
</style>
