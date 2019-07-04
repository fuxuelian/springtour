<template>
<div>
   
<div class="t-user">
            <div class="user-icon">
              <i class="iconfont icon-icon--"></i> 
            </div>
                <a class="user-portrait" href="">
                    <img>
                </a>
                <a class="user-name">游客</a>
                <a  class="vip-user "><i class=""></i>超级会员</a>
                <a id="mywallet" href="/m/wallet/open" style="display: block;">
                <em class="user-wallet">开通钱包<i class="iconfont icon-xiangyou"></i></em></a>
                <em class="user-integral" id="integral">积分：0</em>
        </div>


</div>

</template>
<script>
export default {
    name:"myhead"
}
</script>


<style scoped>
/* 头部开始 */
      .t-user{ min-height: 2.5rem;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/top-bg.png) no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;}



    .t-user .user-portrait {
    position: absolute;
    top: .49rem;
    left: .7rem;
    }

.user-icon>i{
    display: block;
    /* width: 1rem;
    height: 1rem; */
    font-size: .5rem;
    position: absolute;
    top: .2rem;
    right: .1rem;
    color:#fff;
}
/* 头像 */
.user-portrait {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/portrait.png) no-repeat 0 0;
    background-size: 100% 100%;
}


/* username */
.t-user .user-name {
    position: absolute;
    top: .8rem;
    left: 2rem;
    text-shadow: 0 0 5px rgba(0,0,0,.1);
    line-height: 1;
    font-size: .4rem;
    color: #fff;
}

.t-user .user-wallet {
    background-color: #fee489;
    bottom: .6rem;
    color: #52492b;
     position: absolute;
    right: .6rem;
    bottom: 1rem;
    line-height: .5rem;
    border-radius: .4rem;
    padding: 0 .2rem;
    font-size:.25rem;

}
.t-user .user-wallet>i{
    font-size: .25rem;
}
.t-user .user-integral {
    position: absolute;
    right: .5rem;
    bottom: .4rem;
    line-height: .5rem;
    border-radius: .4rem;
    padding: 0 .2rem;
    background-color: rgba(12,78,90,.65);
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    color: #fff;
    font-size: .3rem;
}


.vip-user{
    position:absolute;
    right: .6rem;
    bottom:1rem; 
}


</style>
