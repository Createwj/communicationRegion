<template>
  <div class="digit">
    <div class="iconContent">
      <span class="deg lt"><i></i></span>
      <span class="deg rt"><i></i></span>
      <span class="deg lb"><i></i></span>
      <span class="deg rb"><i></i></span>
      <div class="totalCar">
        <div class="titleTal">
          <p>服务车辆总次数</p>
        </div>
        <div class="carNum" v-html="htmNum">
          <div class="line">
            <span class="icon-0"></span>
          </div>
          <div class="line">
            <span class="icon-0"></span>
          </div>
          <div class="line">
            <span class="icon-0"></span>
          </div>
        </div>
        <div class="totalCar">
          <div class="titleTal">
            <p>停车费用缴纳总金额(元)</p>
          </div>
          <div class="carNum"  v-html="htmCarNum" id="totalMoney">
            <div class="line">
              <span class="icon-0"></span>
            </div>
            <div class="line">
              <span class="icon-d"></span>
            </div>
            <div class="line">
              <span class="icon-0"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        htmNum: '',
        htmCarNum: '',
        datNum: [
          '<div class="line"><span class="icon-0"></span></div>',
          '<div class="line"><span class="icon-1"></span></div>',
          '<div class="line"><span class="icon-2"></span></div>',
          '<div class="line"><span class="icon-3"></span></div>',
          '<div class="line"><span class="icon-4"></span></div>',
          '<div class="line"><span class="icon-5"></span></div>',
          '<div class="line"><span class="icon-6"></span></div>',
          '<div class="line"><span class="icon-7"></span></div>',
          '<div class="line"><span class="icon-8"></span></div>',
          '<div class="line"><span class="icon-9"></span></div>',
          '<div class="line-d"><span class="icon-d"></span></div>',
          '<div class="line-d"><span class="icon-digit"></span></div>'
        ]
      }
    },
    created() {
      setTimeout(() => (
          setInterval(() => (
            this.htmNum = this.setNum((Math.random() * 12000).toFixed(0), false)
          ), 2000)
      ), 20)
      setTimeout(() => (
        setInterval(() => (
          this.htmCarNum = this.setNum((Math.random() * 12000).toFixed(2))
        ), 2000)
      ), 20)
    },
    methods: {
      setNum(item, digit = true) {
        item = item.toString()
        let htm = ''
        if (digit) {                                 // 又显示分号 又显示点
          let items = item.split('.')
          for (let i = 0; i < items[0].length; i++) {
            if ((items[0].length === 4) && (i === 1)) { htm += this.datNum[11] }
            if ((items[0].length === 5) && (i === 2)) { htm += this.datNum[11] }
            if ((items[0].length === 6) && (i === 3)) { htm += this.datNum[11] }
            if ((items[0].length === 7) && ((i === 1) || (i === 4))) { htm += this.datNum[11] }
            if ((items[0].length === 8) && ((i === 2) || (i === 5))) { htm += this.datNum[11] }
            htm += this.datNum[items[0][i]]
          }
          if (items.length > 1) {
            for (let i = 0; i < items[1].length; i++) {
              if (i === 0) { htm += this.datNum[10] }
              htm += this.datNum[items[1][i]]
            }
          }
        } else {
          for (let i = 0; i < item.length; i++) {         // 不显示 分号的点
            if (item[i] === '.') {
              htm += this.datNum[10]
            } else {
              htm += this.datNum[item[i]]
            }
          }
        }
        return htm
      }
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/index"
  *
    padding 0
    margin 0
  .iconContent
    position:relative;
    top:50px;
    left: 50px;
    width:350px;
    height: 300px;
    border:2px solid #001AAD;
    box-shadow: inset 0px 0px 55px #001AAD;
    background :#001347;
  .deg
    position absolute
    width 38px
    height 38px
    background #031F2D
  .lt
    transform: rotate(-45deg) translateX(0px) translateY(-29px);

  .deg>i
    width: 100%;
    border: 1px solid #001AAD;
    position: absolute;
    top: 38px;
    z-index :1;
    box-shadow:  0px  0px 55px #001AAD;
  .rt
    right: 0;
    transform: rotate(45deg) translateX(0px) translateY(-29px);
  .lb
    bottom: 0;
    transform: rotate(45deg) translateX(0px) translateY(27px);
  .lb>i
    top: 0px;
  .rb
    bottom: 0;
    right: 0;
    transform: rotate(-45deg) translateX(-1px) translateY(28px);
  .rb>i
    top: 0px;
  .line
    display: inline-block;
    width: 30px;
    height: 45px;
    margin 0 3px
    line-height: 45px;
    color: yellow;
    font-size: 30px;
    text-align :center;
    background: linear-gradient(#414356, #1F1C27);
    border-radius: 4px;
    border: 1px solid #666;
  .line-d
    display: inline-block;
    width: 20px;
    height: 45px;
    font-size: 30px;
    line-height: 45px;
    color: yellow;
    text-align :center;
  .titleTal
    color: #ddd;
    font-weight :700;
    font-size: 21px;
    text-align: center;
    margin-top: 23px;
  .carNum
    min-height 50px
    text-align: center;
    margin-top :22px;
</style>
