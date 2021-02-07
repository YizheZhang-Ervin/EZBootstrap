# Bootstrap + Canvas Game + CSS3 Animation  
Templates and knowledges  

## Canvas
ctx = element.getContext  
ctx.drawImage(img,cutX,cutY,cuWw,cutH,x,y,w,h)  
ctx.drawRect(x,y,w,h)  // xy距离左上角  

## CSS3
1. animation  
组合使用多个则动画名字+持续时间必须要，其他可选  

2. animation-name动画名称
重复定义后出现优先级高  

3. animation-duration动画持续时间  

4. animation-iteration-count动画迭代次数  
数字或infinite  

5. animation-direction动画变化方向0%<->100%  
normal/reverse/alternate/alternatate-reverse   

6. animation-delay延迟时间  

7. animation-timing-function速度变化  
ease/ease-in/ease-out/ease-in-out/linear/cubic-bezier()  
steps(步数,start/end)/step-start/step-end  

8. animation-fill-mode填充  
forwards/backwards/both  

9. animation-play-state播放状态  
running/paused  