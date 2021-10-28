
let trips = JSON.parse(localStorage.getItem("trips")) || [
  {
    name: " Qassim To: Riyadh",
    Day: "Sunday",
    Date: "Oct 31 , 2021",
    imgFile: "img.jpg",
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
    imgFile: "img.jpg",
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
    imgFile: "img.jpg",
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
    imgFile: "img.jpg",
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
    imgFile: "img.jpg",
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
    imgFile: "img.jpg",
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
  localStorage.setItem("trips", JSON.stringify(trips));
  render();
};

// --------------- Adding to Tickets list -----------
let tickets = [];
const addToTickets = (i) => {
  trips[i].isBuy = !trips[i].isBuy;
  localStorage.setItem("trips", JSON.stringify(trips));
  render();
};

// -------------- Main Function ----------------------

const render = () => {
  $(".Trips").html("");
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
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="${
      !item.isFav ? "far fa-heart" : "fas fa-heart"
    }"></i></button>
</div>


</div>
`);

    if (item.isBuy) {
      $("#buyBTn-" + i).html(`Remove Ticket`);
    }

    // descreption page
    $("#trip" + i).click(() => {
      $(".searchBar").hide();
      $(".cards").hide();
      // $(".Item-des").append(`<h1>hi lama this is magic</h1>`);
      $(".lastPart").hide();
      $(".Item-des").show();
      $(".Item-des").append(`<div class="cont"> <div class="tripDes">
    
     <h1>Trip Summary: </h1>
 <h1 id="tripName"> ${trips[i].name} </h1>
 <h2>Departing On:</h2>  <p>${trips[i].Date}   - ${trips[i].Day}  </p>

 <h2>Stops: </h2>  <p> ${trips[i].Stops}</p>

 <h2>Classes: </h2>

<h2>Economy Class: </h2>   <p>${trips[i].economyClass} - 
<span> ${trips[i].economySeats} </span>  </p>

<h2>Business Class: </h2>    <p>${trips[i].businessClass} -

<span>${trips[i].businessSeats} </span> </p>
<div class="btns"> 
<button class="buy" id='buyBTn-${i}' onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="far fa-heart"></i></button>
</div>
</div>
</div>`);
    });
  });

  favList = trips.filter((item) => item.isFav);
  tickets = trips.filter((item) => item.isBuy);
};

render();

/////// fav function  //////////

const showFav = () => {
  $(".cards").hide();
  $(".Item-des").hide();
  $(".searchBar").hide();
  $(".lastPart").hide();
  $("header").show();
  $(".favPage").show();

  $(".favPage").html("");

  favList.forEach((item, i) => {
    $(".favPage").append(`<div class="container">
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
<button class="buy" id='buyBTn-${i}' onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="${
      item.isFav ? "fas fa-heart" : "far fa-heart"
    }"></i></button>
</div>
</div>`);
  });
};

/////// Basket function ////////
const showBasket = () => {
  $(".cards").hide();
  $(".Item-des").hide();
  $(".searchBar").hide();
  $(".lastPart").hide();
  $("header").show();
  $(".basket").show();

  $(".basket").html("");
  tickets.forEach((item, i) => {
    $(".basket").append(`<div class="container">
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
<button class="buy" id='buyBTn-${i}' onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="far fa-heart"></i></button>
</div>
</div>`);
  });
};

////////////////////////////

$("#searchBtn").click(() => {
  const inputValue = $("#searchBar").val();

  const resultArr = trips.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(inputValue.toLocaleLowerCase());
  });
  $(".Trips").html("");
  $(".Item-des").hide();
  $(".searchResult").hide();
  $(".favPage").hide();
  $(".basket").hide();
  $(".searchResult").show();
  $(".lastPart").hide();
  $(".searchResult").append(`
  <h1> ${inputValue}<h1>
  `);

  /////////////////////////////////////////////////////////
  const rendersearch = () => {
    $(".searchResult").html("");
    resultArr.forEach((item, i) => {
      $(".searchResult").append(`<div class="main">
    <div id="trip${i}">
<img class= "cities" src=${item.imgFile} alt="city">
<h1>${item.name}</h1> 
<button class="buy" id='buyBTn-${i}'onclick="addToTickets(${i})">Buy a Ticket</button>
<button class="fav" id='favBTn-${i}' onclick="addToFavorite(${i})"><i class="${
        !item.isFav ? "far fa-heart" : "fas fa-heart"
      }"></i></button>
</div> </div>`);
    });
  };
  rendersearch();

  ////////////////////////////////////////////////////////////
});
