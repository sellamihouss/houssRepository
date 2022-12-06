// $("button").click(function () {
// $("img").toggle()
// })

// $(".description").show()

// $("#button1").click(function () {
// $("img").toggle()
// })

function CreateAnimal(src,name,breed,age){
	var animals={}
	// animals.id =id
	animals.src=src
	animals.name=name
	animals.breed=breed
	animals.age=age
	animals.seeInfo=see
	// animals.adopt=adopt
	return animals
}
var see=function(){
$(`.${this.name}`).textContent=this.name
$(`.${this.breed}`).textContent=this.breed
$(`.${this.age}`).textContent=this.age
}

// var 



var animal1=CreateAnimal("cats/cat1.jpg","lizy","persan","11 months")
var animal2=CreateAnimal("dogs/berger.jpg","dolph","german-shephard","9 months")
var animal3=CreateAnimal("dogs/labrador.jpg","arc","labrador"," 18 months")
var animal4=CreateAnimal("otheranimals/monkey.jpg","pisiron","spider-monkey","6 months")
var animal5=CreateAnimal("dogs/rottweiler.jpg","max","rottweiler","4 months")
var animal6=CreateAnimal("otheranimals/rabbit.jpg","ipsi","domestic rabbit","60 days")
var animal7=CreateAnimal("cats/cat2.jpg","mimi","turkish","15 months")
var animal9=CreateAnimal("cats/cat3.jpg","brag","scottish-fold","18 months")
var animal8=CreateAnimal("otheranimals/canari.jpg","zakzouk","african canari","90 days")


var myAnimals=[animal1,animal2,animal3,animal4,animal5,animal6,animal7,animal8,animal9]



// console.log(myAnimals)

function create(){
myAnimals.map(function(x, i){
var div=$("<div class='animal'></div>")
var img=$(`<img src=${x.src} />`)

var button1=$(`<button >isn't it cute? click here to adopt</button>`)
div.attr('id', i)
var p1=$(`<p class="p1">name: ${x.name}</p>`)
var p2=$(`<p class="p1">breed: ${x.breed}</p>`)
var p3=$(`<p class="p1">age: ${x.age}</p>`)
var p4=$(`<p class="p1">owner <a href="file:///C:/Users/sella/Desktop/personal%20project/owner.html"> informations</p>`)
// p1.attr("class", i)
// p2.attr("class",i)
// p3.attr("class",i)

// $("button1").click(function{
// 	x.seeInfo
// })
// $("button2").onclick(function{
// 	"please contact the owner"
// })
$(div).append(img,button1,p1,p2,p3,p4)
p1.hide()
p2.hide()
p3.hide()
p4.hide()


$("#div1").append(div)


})
for (var i=0;i<myAnimals.length;i++){
	$("#"+i+" button").click(function(event){
var index=event.target.parentElement.id*1
console.log($("#"+index))

$("#"+index +" p").toggle(999)
	})
}

}

create()

