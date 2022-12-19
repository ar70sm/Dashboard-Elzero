// Yearly Targets
let currentVar
// addEventListener("load",current)
addEventListener("scroll",current)

//Tickets Statistics
let ticketVar
addEventListener("load",ticket)
addEventListener("scroll",ticket)


// Latest Tasks

let lt =[...document.querySelectorAll(".tasks .boxes .box i")]
lt.forEach(ele=>{
  ele.addEventListener("click",()=>{
    let parent=ele.parentElement.classList
    if(parent.contains("delete"))parent.remove("delete")
    else parent.add("delete")
  })
})

//Last Project Progress

let lpp =[...document.querySelectorAll(".project .box p span")]
lpp.forEach((ele,i)=>{
  ele.addEventListener("click",()=>{
      lpp.forEach((element,j)=>{
        if(j<i){
          element.parentElement.classList.add("done")
          element.parentElement.classList.remove("doing")
        }
        else if(j==i){
          element.parentElement.classList.remove("done")
          element.parentElement.classList.add("doing")
        }
        else{
          element.parentElement.classList.remove("done")
          element.parentElement.classList.remove("doing")
        }
      })
  })
})


//------------------------------------------------------
// FUNCTIONS \\

function current(){
  if(document.querySelector(".targets").getBoundingClientRect().y<(window.innerHeight-200)){
    let elements = [...document.querySelectorAll(".targets > div .info .current div")]
    elements.forEach(ele=> {
      if (ele.style.width==0){
        ele.style.width=ele.getAttribute("present")
        attrPresent(0,parseInt(ele.getAttribute("present")),1500,100,currentVar,ele,"afterVar")
      }
    })
  }
  }

  function ticket(){
    if(document.querySelector(".ticket").getBoundingClientRect().y<(window.innerHeight-300)){
      let elements =[...document.querySelectorAll(".ticket h4")]
      elements.forEach(ele=>{
        if(ele.innerHTML==0){
          htmlNum(0,ele.getAttribute("val"),1500,200,ticketVar,ele)
        }
      })
    }
  }


  function attrPresent(start,end,time,steps,interval,element,attr){
    let step = (end-start)/steps
    let j=0
      interval=setInterval(()=>{
        j++
        element.setAttribute(attr,`${Math.floor(start+(step*j))}%`)
        if(j> steps){
          clearInterval(interval)
          element.setAttribute(attr,`${end}%`)
        }
      },time/steps)
    
    }
  function htmlNum(start,end,time,steps,interval,element){
    let step = (end-start)/steps
    let j=0
      interval=setInterval(()=>{
        j++
        element.innerHTML =`${Math.floor(start+(step*j))}`
        if(j== steps){
          clearInterval(interval)
          element.innerHTML=end
        }
      },Math.floor(time/steps))
    
    }

