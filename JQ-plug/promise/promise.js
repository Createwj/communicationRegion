//检测是否支持Promise
// if(typeof(Promise) === "function"){
//     alert("支持Promise");
// }
// else{
//     alert("不支持Promise");
// }


// 等待函数
function wait(duration){
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
// 等待5s以后执行下列函数
wait(5000).then(
				function(){console.log('hello')})
					.then(
						function(){console.log('world')})


 loadImage('img4');
 loadImage('img5');
 loadImage('img6');

Promise.resolve().then(function(){
    return loadImage('img1');
}).then(function(){
    return loadImage('img2');
}).then(function(){
    return findImg();
}).catch(function(err){
	console.log(err)
    //错误处理
})
//加载图片
function findImg(){
	var img=new Image();  
	img.src="http://www.abaonet.com/img.gif";  
    img.onload=function(){console.log("img is loaded")};  
    img.onerror=function(e){console.log(e)}; //图片加失败以后执行的操作 

}
function loadImage(th){
	console.log(th)
}
// // 点击按钮5s以后执行
// var btn = document.getElementsByTagName('button');

// Promise.race(wait(3000), waitFor(btn, click)).then(function(){
//     alert('按钮3s以后执行的结果！')
// })


// function waitFor(element,event,useCapture){
//     return new Promise(function(resolve, reject) {
//         element.addEventListener(event,function listener(event){
//             resolve(event)
//             this.removeEventListener(event, listener, useCapture);
//         },useCapture)
//     })
// }