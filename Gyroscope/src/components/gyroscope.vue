<template>
    <div id="box">
      <div id="face"></div>
      <div id="eyeLeft" ref="eyeLeft"></div>
      <div id="eyeRight" ref="eyeRight"></div>
      <div id="glass"></div>
      <div id="log"></div>
    </div>
</template>

<script>
export default {
  name: 'gyroscope',
  data() {
    return {
      eyeLeftPosition : {
        start: [70, 78],
        end: [100, 110]
      },
      eyeRightPosition : {
        start: [150, 78],
        end: [190, 110]
      },
      eyeLeftCenterPosition : {
        x: (this.eyeLeftPosition.end[0] - this.eyeLeftPosition.start[0]) / 2 + this.eyeLeftPosition.start[0],
        y: (this.eyeLeftPosition.end[1] - this.eyeLeftPosition.start[1]) / 2 + this.eyeLeftPosition.start[1]
      },
      eyeRightCenterPosition : {
        x: (this.eyeRightPosition.end[0] - this.eyeRightPosition.start[0]) / 2 + this.eyeRightPosition.start[0],
        y: (this.eyeRightPosition.end[1] - this.eyeRightPosition.start[1]) / 2 + this.eyeRightPosition.start[1]
      },
      r : 20
    }
  },
  created() {
    this._init()
  },
  computed: {

  },
  methods: {
    _init: {
//      this.$refs.suggest
      let eyeLeft = this.$refs.eyeLeft
      let eyeRight = this.$refs.eyeRight
//      window.DeviceOrientationEvent

      window.addEventListener('deviceorientation', function (event) {

      let {alpha, beta, gamma} = event

      eyeLeft.style.left = eyeLeftCenterPosition.x + gamma / 90 * r + 'px'
      eyeRight.style.left = eyeRightCenterPosition.x + gamma / 90 * r + 'px'
      eyeLeft.style.top = eyeRight.style.top
        = eyeLeftCenterPosition.y + beta / 180 * r + 'px'

      eyeRight.style.transform = eyeLeft.style.transform
        = eyeRight.style.WebkitTransform
        = eyeLeft.style.WebkitTransform
        = 'rotate(' + beta + 'deg)'
    }, false)
//if () {}
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #box
    position: relative;
    width: 300px;
    margin: 0 auto;
    #face
      background-image: url('../assets/face.png');
      background-size: cover;
      width: 300px;
      height: 300px;
      position: absolute;
    #eyeLeft
      background-image: url('../assets/eye.png');
      background-size: cover;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 90px;
      left: 100px;
    #eyeRight
      background-image: url('../assets/eye.png');
      background-size: cover;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 90px;
      left: 190px;
    #glass
      background-image: url('../assets/glass.png');
      background-size: cover;
      width: 300px;
      height: 300px;
      position: absolute;

</style>
