var new_books = null;
//service_labels = null;

function Purchase(product, referrer) {
    let writing = "";
    if (referrer.toLowerCase().match(/purchase/gi)) {
      writing = "I will like to get a copy of-book"
    } else if (referrer.match(/start/gi)) {
      writing = "I will like to enroll for-course"
    } else {
      writing = ""
    }
    var phoneNumber = "2348116231143",
    messageText = `${writing.split("-")[0]} *${product}* ${writing.split("-")[1]}`;
    container = null;

    if (writing !== "") {
      //alert(messageText)
      window.location = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText?messageText: ""}`;
    }

  }


window.onload = function() {
  const modalAd = document.querySelector(".modal-ad"),
  modalNav = document.querySelector(".modal-nav");



  function isElementInViewport(el) {

    var rect = el.getBoundingClientRect(); return ((rect.left <= 0 && rect.right > 300) || (rect.right < (window.innerWidth || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) || (rect.left >= 0 && rect.right < (window.innerWidth || document.documentElement.clientWidth)));
  }
  function Load() {
    document.getElementById('loader').className = "active";

  }

  function hideloader() {
    document.getElementById('loader').classList.remove("active");
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function confirm(title, books) {
    let result = [];
    let data = null;
    let material = books;
    for (let i = 0; i < books.length; i++) {

      if (title.toLowerCase() === material[i].title.toLowerCase()) {
        data = [books[i].preview,
          books[i].outline];
        result.push("go ahead")
        //
      } else {
        result.push("don't");
      }
    }
    if (result.indexOf("go ahead") !== -1) {
      if (data[0] !== undefined) {
        return "granted-"+data[0];
      } else if (data[1] !== undefined) {
        let list = "";
        data[1].forEach((e, index)=> {
          list += `<li>${e.info}</li>`
        })
        return "granted-"+list;
      }
    } else {
      return "denied";
    }

  }

  function IsInStorage(title, books) {
    let result = [];
    let pos = 0;
    let material = books;
    for (let i = 0; i < books.length; i++) {

      if (title.toLowerCase() === material[i].title.toLowerCase()) {
        pos = i;
        result.push("go ahead")
        //
      } else {
        result.push("don't");
      }
    }

    if (result.indexOf("go ahead") !== -1) {

      return "granted-"+pos;

    } else {
      return "denied";
    }

  }

  function ReadMore(book) {
    var save;
    var div = book;
    if (div.innerText.length > 250) {
      var c = document.createElement('p');

      c.className = "more";
      c.style.display = "none";
      save = div.innerText.slice(250);
      c.textContent = save
      div.innerText = div.innerText.slice(0, 250)
      div.innerHTML += '<b>...ReadMore</b>'
      div.appendChild(c)
      div.onmouseover = function() {
        this.style.cursor = "pointer";
      }
      div.querySelector('b').onclick = function() {}
      div.onclick = function() {
        if (div.querySelector('.more')) {
          let getMore = div.querySelector('.more').textContent
          div.innerHTML = div.innerHTML.slice(0, div.innerText.length-11)+getMore;

          div.removeChild(div.querySelector('.more'))

        } else {
          var c = document.createElement('p');
          c.className = "more";
          c.style.display = "none";
          save = div.innerText.slice(250);
          c.textContent = save
          div.innerText = div.innerText.slice(0, 250)
          div.innerHTML += "<b>...ReadMore</b>"
          div.appendChild(c)
        }
      };
    }
  }




  //async function LoadResources(){



  ///  slider.  implemented. ///////
  var header = document.querySelector("header");

  // from Js Library //
  newBooks.forEach(content => {

    var r, g, b;
    r = Math.random()*265 + 0;
    g = Math.random()*265 + 0;
    b = Math.random()*265 + 0;
    //profile.style.background="rgb("+r+","+g+","+b+")";
    if (content.imageSrc == "") {
      content.imageSrc = "HTML5_and_CSS3_Responsive_Web_Design_Cookbook.png";
    }
    let book = `<div>
    <div class="drag"><p>&#10095;</p></div>
    <img src="./images/${content.imageSrc}" alt=${content.imageSrc.split(".")[0]} />
    <section>
    <h1 style="text-shadow: 0 0 2px rgb(${r},${g},${b});">${content.title}</h1>
    <p>${content.preview}</p>
    </section>
    </div>`;

    header.innerHTML += book;


  });



  new_books = document.querySelectorAll("header > div");
  var slideInterval;
  let current = 0;
  function updateActiveDot() {
    //var link=document.querySelectorAll('ul li');

    var currentScrollLeft = header.scrollLeft;

    pos = 300;

    var scrollStepSize = pos;
    var currentSlideIndex = Math.round(currentScrollLeft / scrollStepSize);

    //link[current].className="";

    //link[currentSlideIndex].className="active";
    current = currentSlideIndex;


  }
  function slideShow() {
    //alert(current)

    //link[current].className="";

    current = [current+1]%new_books.length;
    header.scrollLeft = current * 300;
    //link[current].className="active";
  }
  /*slideInterval=setInterval(slideShow,2000);

header.onmouseover=()=>{
clearInterval(slideInterval)
}
header.onmouseout=()=>{
slideInterval=setInterval(slideShow,2000);
}*/

  new_books.forEach(e => {
    let drag = e.querySelector(".drag");
    let banner = e.querySelector("img");
    drag.onclick = function() {

      if (drag.style.backgroundImage === "") {
        drag.style.background = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7)),url(${banner.src})`;
        e.classList.add("active");
      } else {
        e.scrollTop = 0;
        drag.style.backgroundImage = "";
        drag.style.background = "";
        e.classList.remove("active");
      }
    };
    let kept = e.querySelector("h1").getAttribute('style');
    e.onscroll = function() {

      if (e.scrollTop >= 150) {
        e.querySelector("h1").style.color = "#fff !important";
        e.querySelector("h1").setAttribute('style', kept+"background: rgba(0,0,0,.9); color: #fff !important;  border: 2px groove var( --light-black);border-top: none; border-radius:0 0 10px 10px; ");
        drag.classList.add("active");
      } else {
        drag.classList.remove("active");
        e.style.boxShadow = "";

      }
      if (e.scrollTop > 250) {} else {
        e.querySelector("h1").style.color = "";
        e.querySelector("h1").setAttribute('style', kept);


      }

    }
  })



  ////// slider.  implementation ended.////

  var book_container = document.querySelector(" .books > .service-group"),
  course_container = document.querySelector(".courses > div");
  // from Js Library //
  for (let j = 0; j <= 3; j++) {

    let content = Library.reverse()[j];
    let html = `<section class="palmflet">

    <img src="./images/${content.imageSrc}" onerror="this.src='./images/eloquentjs.jpg'" >

    <h2>${content.title} </h2>
    <div class="group">
    <button value="preview">Preview</button>
    <button value="purchase">Purchase</button>
    </div>
    </section>`;

    book_container.innerHTML += html;
  }


  for (let k = 0; k <= 3; k++) {
    let content = Courses.reverse()[k];
    let html = `<section class="palmflet">
    <img src="./images/${content.imageSrc}" onerror="this.src='eloquentjs.jpg'">

    <h2>${content.title} </h2>
    <div class="group">
    <button value="more info">More info</button>
    <button value="start">Start</button>
    </div>
    </section>`;

    course_container.innerHTML += html;
  }


  setInterval(()=> {

    let services = document.querySelectorAll("#services .service-group");

    services.forEach(e => {
      let add_more_btn = e.parentElement.querySelector(".more");

      let kids = e.querySelectorAll('section')

      e.onscroll = function() {
        if (isElementInViewport(kids[kids.length-1])) {
          this.classList.add("left");
          add_more_btn.classList.add("left");
        } else {
          this.classList.remove("left");
          add_more_btn.classList.remove("left");
        }

      }

      add_more_btn.onclick = function() {


        AddMore(kids[kids.length-1], e, this)

      }
    });


    async function AddMore(lastElem,
      parent,
      btn) {


      let lastPos = 0;
      Load();
      let storage = null;
      let container = null;
      let btns = [];
      if (lastElem.querySelector('.group').innerText.match(/purchase/gi)) {
        storage = Library;
        btns = ["Preview",
          "Purchase"];
        container = book_container;
      } else {
        storage = Courses
        container = course_container;
        btns = ["More info",
          "Start"];
      }


      let data = await IsInStorage(lastElem.querySelector('h2').innerText, storage);

      if (data.match(/granted/gi)) {

        await waitForMs(1000);
        hideloader();



        lastPos = data.split("-")[1];


        let startpos = parseInt(Number(lastPos)+1);

        //let remains=parseInt(([storage.length-1]-2))

        for (let k = startpos; k <= [startpos+2]; k++) {

          let content = storage.reverse()[k];
          let html = `<section class="palmflet">
          <img src="./images/${content.imageSrc}" onerror="this.src='./images/eloquentjs.jpg'">

          <h2>${content.title} </h2>
          <div class="group">
          <button value="${btns[0]}">${btns[0]}</button>
          <button value="${btns[1]}">${btns[1]}</button>
          </div>
          </section>`;

          container.innerHTML += html;

        }


      } else {
        parent.classList.remove("left");
        btn.classList.remove("left");
        hideloader();

      }


    }



    var service_labels = document.querySelectorAll("#services section");

    service_labels.forEach(label => {
      let modal_desc=modalNav.querySelector("h1");
      label.querySelector('.group').onclick = async function(evt) {
        
        if (evt.target.innerText.toLowerCase() == "preview" || evt.target.innerText.toLowerCase() == "more info") {
          modal_desc.innerText="Preview";

          try {


            Load();
            let response = null;
            let content = null;
            if (evt.target.innerText.toLowerCase() == "preview") {

              response = await confirm(label.querySelector('h2').innerText, Library)
              content = response.split("-")[1]
            } else {
              response = await confirm(label.querySelector('h2').innerText, Courses);
              content = `<p >${ response.split("-")[1]}</p>`
              
              content = `<h5  >Course Outline</h5>
              <ul>${content}</ul>`
            }

            if (response.match(/granted/gi)) {
              await waitForMs(1000);
              hideloader()
              modalNav.classList.add("active");
              modalAd.classList.add("active");

              let doc_content = ` <section class="label" >
              <img class="banner" src="${label.querySelector('img').src}" alt="Mega"/>

              <h2 class="title" style="background-image:url(${label.querySelector('img').src}) ;">${label.querySelector('h2').innerHTML}</h2>
              <div class="content">${content}  </div>
              <button class="btn" value=${label.querySelectorAll('.group button')[1].innerText} onclick="Purchase('${label.querySelector('h2').innerHTML}', '${label.querySelectorAll('.group button')[1].innerText}')" >${label.querySelectorAll('.group button')[1].innerHTML}</button>

              </section>`;
              modalAd.innerHTML += doc_content;

              var back = document.querySelector('.modal-nav .back');
              back.onclick = function(e) {
                modalNav.classList.remove("active");
                modalAd.classList.remove("active");
                let all = document.querySelectorAll('.modal-ad >*')
                modalAd.removeChild(all[1]);


              }

            } else {
              await waitForMs(1000);
              hideloader()
              alert("Not Available now")
            }

          }catch(err) {
            alert(err)}
        } else {

          Purchase(label.querySelector('h2').innerText, evt.target.innerText)

        }

      }

    });


  }, 1000/60)

  //}
  //LoadResources()

  /*
*/






  /*
team_member = document.querySelectorAll("#team .team-label");

team_member.forEach(e=> {
    ReadMore(e.querySelector("p"))
    e.onclick = function() {
        modalAd.appendChild(this.cloneNode(true));
        //modalAd.innerHTML+=this.innerHTML;
        modalAd.classList.add("active");
        modalNav.classList.add("active");
        //modalNav.classList.add("active");


        var back = document.querySelector('.modal-nav .back');
        back.onclick = function(e) {
            modalNav.classList.remove("active");
            modalAd.classList.remove("active");

            modalAd.removeChild(modalAd.querySelector('>div'));
        }

    }
});
*/




}