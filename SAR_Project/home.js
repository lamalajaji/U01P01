console.log("hello");
// JSON.parse(localStorage.getItem("arr")) || 
let trips = [
  {
    name: " Qassim To: Riyadh",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "15:30",
    economyClass: "105 SAR",
    economySeats: "70 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "110 Seats Left",
    Stops: "1 Stop",
    isFav: false,
    isBuy: false,
  },
  {
    name: " Riyadh To: Qassim ",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "17:30",
    economyClass: "105 SAR",
    economySeats: "30 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "90 Seats Left",
    Stops: "1 Stop",
    isFav: false,
    isBuy: false,
  },
  {
    name: " Qassim To: Hail ",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "13:15",
    economyClass: "105 SAR",
    economySeats: "60 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "200 Seats Left",
    Stops: "2 Stops",
    isFav: false,
    isBuy: false,
  },
  {
    name: " Hail To: Jauf ",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "17:30",
    economyClass: "105 SAR",
    economySeats: "90 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "110 Seats Left",
    Stops: "2 Stop",
    isFav: false,
    isBuy: false,
  },
  {
    name: " Dammam To: Riyadh",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "15:15",
    economyClass: "105 SAR",
    economySeats: "20 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "80 Seats Left",
    Stops: "1 Stop",
    isFav: false,
    isBuy: false,
  },
  {
    name: " Riyadh To: Dammam ",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "addrrress.jpg",
    Time: "18:30",
    economyClass: "105 SAR",
    economySeats: "40 Seats Left",
    businessClass: "205 SAR",
    businessSeats: "110 Seats Left",
    Stops: "1 Stop",
    isFav: false,
    isBuy: false,
  },
];

// --------------- Adding to favorite list -----------
let favList = [];
const addToFavorite = (i) => {
  
  trips[i].isFav = !trips[i].isFav;
  // localStorage.setItem("arr", JSON.stringify(trips));
  render();
  favList.push[trips[i]]
 
};



// --------------- Adding to Tickets list -----------
let tickets = [];
const addToTickets = (i) => {
  trips[i].isBuy = !trips[i].isBuy;
  // localStorage.setItem("arr", JSON.stringify(trips));
  render();
  tickets.push(trips[i]);
  
};


// -------------- Main Function ----------------------

const render = () => {
  $(".Trips").html("")
  $(".Item-des").hide();
  $(".searchResult").hide();
  $(".favPage").hide();
  $(".basket").hide();
 
  trips.forEach((item, i) => {
    $(".Trips").append(`<div class="main">
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
<button class="buy" id='buyBTn-${i}'onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="far fa-heart"></i></button>
</div>


</div>
`);

   
if(item.isFav){
  $("#favBTn-"+i).html(`<i class="fas fa-heart"></i>`);
} else if (item.isBuy){
  $("#buyBTn-"+i).html(`Remove Ticket`)
}
    // descreption page
    $("#trip" + i).click(() => {
      $(".searchBar").hide();
      $(".cards").hide();
       $(".lastPart").hide();
      $(".Item-des").append(` <div class="tripDes">
   
    <h1>Trip Summary: </h1>
 <h1 id="tripName"> ${trips[i].name} </h1>


 <h2>Departing On:</h2>  <p>${trips[i].Date}   - ${trips[i].Day}  </p>

 <h2>Stops: </h2>   <p>${trips[i].Stops}  </p>

 <h2>Classes: </h2>

<h2>Economy Class: </h2>   <p>${trips[i].economyClass} - 
${trips[i].economySeats}  </p>

<h2>Business Class: </h2>    <p>${trips[i].businessClass} -

${trips[i].businessSeats}  </p>
<div class="btns"> 
<button class="buy" id='buyBTn-${i}' onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="far fa-heart"></i></button>
</div>
</div>`);
    });
     
    
    
    
  });
};

render();



// Search Bar function ///








/////// fav function  //////////


const showFav =()=>{
   
  $(".cards").hide();
  $(".Item-des").hide();
  $(".searchBar").hide();
  $(".lastPart").hide();
  $("header").show();
  $(".favPage").show();
  
  const myFav  = trips.filter((item)=>{
    return item.isFav === true
  })
  console.log(myFav);
  $(".favPage").html("");
  myFav.forEach((item, i) => {
    $(".favPage").append(`<div class="container">
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
</div>`);
  });
}
 

/////// Basket function ////////
const showBasket =()=>{
  
  $(".cards").hide();
  $(".Item-des").hide();
  $(".searchBar").hide();
  $(".lastPart").hide();
  $("header").show();
  $(".basket").show();
  const myTickets = trips.filter((item)=>{
    return item.isBuy === true
})
$(".basket").html("");
myTickets.forEach((item, i) => {
  $(".basket").append(`<div>
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
</div>`);
});


}
