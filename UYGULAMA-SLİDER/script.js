var models = [
{ name:"Bmw 418d",
  image: "img/bmw.jpg",
  link: "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/bmw/4-serisi/sedan/2018/bmw-4-serisi-sedan-2018-111.jpg"  
},

{ name : "Mazda CX-3",
  image : "img/mazda.jpg",
  link : "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/mazda/cx-3/suv/2015/2015-mazda-cx-3-suv-111.jpg"
},
{ name : "Volvo S60",
  image : "img/volvo.jpg",
  link : "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/volvo/s60/sedan/2014/2014-volvo-s60-sedan-111.jpg"
},

{ name : "Skoda Superb",
  image : "img/skoda.jpg",
  link : "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/skoda/superb/sedan/2019/2019-skoda-superb-111.JPG"
},
{ name : "Honda Civic",
  image : "img/honda.jpg",
  link : "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/honda/civic/sedan/2021/honda-civic-2021-111.jpg"
}


]

var index = 1;
var slaytCount = models.length
var settings = {
    duration : "2000",
    random : true
}
var interval;

init(settings);

document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){
    index--;
    console.log(index)
    showSlide(index)
})

document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){
    index++;
    console.log(index)
    showSlide(index)
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval)
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})

function showSlide(i){
    index = i
    if(i<0){
        index = slaytCount - 1
    }

    if(i>=slaytCount){
        index=0
    }
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link)

}

function init(settings){
    interval = setInterval(function(){
        if(settings.random){
            //random index

            index = Math.floor(Math.random() * slaytCount)
        }
        else{

        }
        showSlide(index)
    },settings.duration)
}

