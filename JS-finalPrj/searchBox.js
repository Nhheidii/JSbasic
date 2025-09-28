const btn1 = document.querySelector(".btn");
const searchDiv = document.querySelector(".search");
const input = document.querySelector(".input");

btn1.addEventListener("click", () => {
    searchDiv.classList.toggle("active");
    input.focus();
})

let imgDivStyle = {
    height: "100px",
    width: "100px",
    margin: "0px 3px",
};
let imgStyle = {
    width: "100%",
    height: "100%",
    border: "solid 2px plum",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "8px",
};

let imgStyle2 = {
    width: "100mw",
    height: "100%",
    border: "solid 2px plum",
    objectFit: "cover",
    margin: "0 auto",
};
let btnStyle = {
    backgroundColor: "pink",
    color: "white",
    width: "50px",
};
let container = document.querySelector("#container");
let display = document.querySelector("#display");
let headerDisplay = document.querySelector("#header");
display.style.flexShrink = "0";
let favList = document.querySelector("#favList");
let pTag = document.querySelector("#pTag");
let searchContent = document.querySelector("#searchContent");
pTag.innerHTML = "contain";

for (let i = 1; i < 12; i++) {
    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    imgDiv.draggable = true;
    imgDiv.style.padding = "0px 5px";
    imgDiv.id = `${i}Div`;
    imgDiv.style.flexShrink = "0";
    let img = document.createElement("img");
    let url = `./2398/img/${i}.jpeg`;
    img.setAttribute("src", url);
    Object.assign(imgDiv.style, imgDivStyle);
    Object.assign(img.style, imgStyle);
    imgDiv.appendChild(img);
    container.appendChild(imgDiv);
    let url2 = `./2398/img/${i}${i}.jpeg`;
    console.log(url2);
    let princeeImg = document.createElement("img");
    princeeImg.style.flexShrink = "0";
    princeeImg.setAttribute("src", url2);
    Object.assign(princeeImg.style, imgStyle2);
    imgDiv.addEventListener("click", function () {
        headerDisplay.style.display = "block";
        let delDiv = document.createElement("div");
        delDiv.style.id = `${i}`;
        let fav = `📚 The ${i} Story`;
        let deledeBtn = document.createElement("button");
        deledeBtn.textContent = "Del";
        delDiv.append(fav, deledeBtn);
        favList.append(delDiv);
        deledeBtn.addEventListener("click", function () {
            favList.removeChild(delDiv);
        });

        currentActive += 1;
        console.log("button clicked");
        steps.forEach((step, index) => {
            if (currentActive > index) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
        if (currentActive > steps.length) {
            next.disabled = true;
            searchContent.textContent =
                "You reached the limit of free trial. Become member to experience more";
            alert(
                "You reached the limit of free trial. Become member to experience more"
            );
        }

        if (!display.firstElementChild) {
            display.appendChild(princeeImg);
            pTag.textContent =
                " Once upon a time in the middle of winter, when the flakes of snow were falling like feathers from the sky, a queen sat at a window sewing, and the frame of the window was made of black ebony. And whilst she was sewing and looking out of the window at the snow, she pricked her finger with the needle, and three drops of blood fell upon the snow. And the red looked pretty upon the white snow, and she thought to herself, would that I had a child as white as snow, as red as blood, and as black as the wood of the window-frame. Soon after that she had a little daughter, who was as white as snow, and as red as blood, and her hair was as black as ebony, and she was therefore called little snow-white. And when the child was born, the queen died. After a year had passed the king took to himself another wife. She was a beautiful woman, but proud and haughty, and she could not bear that anyone else chould surpass her in beauty. She had a wonderful looking-glass, and when she stood in front of it and looked at herself in it, and said, looking-glass, looking-glass, on the wall, who in this land is the fairest of all. The looking-glass answered, thou, o queen, art the fairest of all. Then she was satisfied, for she knew that the looking-glass spoke the truth. But snow-white was growing up, and grew more and more beautiful, and when she was seven years old she was as beautiful as the day, and more beautiful than the queen herself. And once when the queen asked her looking-glass, looking-glass, looking-glass, on the wall, who in this land is the fairest of all. It answered, thou art fairer than all who are here, lady queen. But more beautiful still is snow-white, as I ween. Then the queen was shocked, and turned yellow and green with envy. From that hour, whenever she looked at snow-white, her heart heaved in her breast, she hated the girl so much. And envy and pride grew higher and higher in her heart like a weed, so that she had no peace day or night. She called a huntsman, and said, take the child away into the forest. I will no longer have her in my sight. Kill her, and bring me back her lung and liver as a token. The huntsman obeyed, and took her away but when he had drawn his knife, and was about to pierce snow-white's innocent heart, she began to weep, and said, ah dear huntsman, leave me my life. I will run away into the wild forest, and never come home again. And as she was so beautiful the huntsman had pity on her and said, run away, then, you poor child. The wild beasts will soon have devoured you, thought he, and yet it seemed as if a stone had been rolled from his heart since it was no longer needful for him to kill her. And as a young bear just then came running by he stabbed it, and cut out its lung and liver and took them to the queen as proof that the child was dead. The cook had to salt them, and the wicked queen ate them, and thought she had eaten the lung and liver of snow-white. But now the poor child was all alone in the great forest, and so terrified that she looked at all the leaves on the trees, and did not know what to do. Then she began to run, and ran over sharp stones and through thorns, and the wild beasts ran past her, but did her no harm. She ran as long as her feet would go until it was almost evening, then she saw a little cottage and went into it to rest herself. Everything in the cottage was small, but neater and cleaner than can be told. There was a table on which was a white cover, and seven little plates, and on each plate a little spoon, moreover, there were seven little knives and forks, and seven little mugs. Against the wall stood seven little beds side by side, and covered with snow-white counterpanes. ";
        } else {
            display.removeChild(display.firstElementChild);
            display.appendChild(princeeImg);
            pTag.textContent =
                " Once upon a time in the middle of winter, when the flakes of snow were falling like feathers from the sky, a queen sat at a window sewing, and the frame of the window was made of black ebony. And whilst she was sewing and looking out of the window at the snow, she pricked her finger with the needle, and three drops of blood fell upon the snow. And the red looked pretty upon the white snow, and she thought to herself, would that I had a child as white as snow, as red as blood, and as black as the wood of the window-frame. Soon after that she had a little daughter, who was as white as snow, and as red as blood, and her hair was as black as ebony, and she was therefore called little snow-white. And when the child was born, the queen died. After a year had passed the king took to himself another wife. She was a beautiful woman, but proud and haughty, and she could not bear that anyone else chould surpass her in beauty. She had a wonderful looking-glass, and when she stood in front of it and looked at herself in it, and said, looking-glass, looking-glass, on the wall, who in this land is the fairest of all. The looking-glass answered, thou, o queen, art the fairest of all. Then she was satisfied, for she knew that the looking-glass spoke the truth. But snow-white was growing up, and grew more and more beautiful, and when she was seven years old she was as beautiful as the day, and more beautiful than the queen herself. And once when the queen asked her looking-glass, looking-glass, looking-glass, on the wall, who in this land is the fairest of all. It answered, thou art fairer than all who are here, lady queen. But more beautiful still is snow-white, as I ween. Then the queen was shocked, and turned yellow and green with envy. From that hour, whenever she looked at snow-white, her heart heaved in her breast, she hated the girl so much. And envy and pride grew higher and higher in her heart like a weed, so that she had no peace day or night. She called a huntsman, and said, take the child away into the forest. I will no longer have her in my sight. Kill her, and bring me back her lung and liver as a token. The huntsman obeyed, and took her away but when he had drawn his knife, and was about to pierce snow-white's innocent heart, she began to weep, and said, ah dear huntsman, leave me my life. I will run away into the wild forest, and never come home again. And as she was so beautiful the huntsman had pity on her and said, run away, then, you poor child. The wild beasts will soon have devoured you, thought he, and yet it seemed as if a stone had been rolled from his heart since it was no longer needful for him to kill her. And as a young bear just then came running by he stabbed it, and cut out its lung and liver and took them to the queen as proof that the child was dead. The cook had to salt them, and the wicked queen ate them, and thought she had eaten the lung and liver of snow-white. But now the poor child was all alone in the great forest, and so terrified that she looked at all the leaves on the trees, and did not know what to do. Then she began to run, and ran over sharp stones and through thorns, and the wild beasts ran past her, but did her no harm. She ran as long as her feet would go until it was almost evening, then she saw a little cottage and went into it to rest herself. Everything in the cottage was small, but neater and cleaner than can be told. There was a table on which was a white cover, and seven little plates, and on each plate a little spoon, moreover, there were seven little knives and forks, and seven little mugs. Against the wall stood seven little beds side by side, and covered with snow-white counterpanes. ";
        }
    });
}

const sliderItems = document.querySelectorAll(".imgDiv");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLengh = sliderItems.length;
const containerBigWidth = sliderItems[0].offsetWidth * 11;
const containerBig = document.querySelector("#containerBig");
containerBig.style.width = containerBigWidth;
let i = 1;
let tranf = 0;
let j = 1;

const nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", function () {
    tranf = sliderItemWidth * 1 * i * -1;
    container.style.left = `${tranf}px`;
    i++;
    currentActive += 1;
    console.log("button clicked");
    steps.forEach((step, index) => {
        if (currentActive > index) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
});
prevBtn.addEventListener("click", function () {
    tranf = sliderItemWidth * j;
    console.log(tranf);
    container.style.left = 0;
    j++;
});

function mySetInterval() {
    tranf = sliderItemWidth * i * -1;
    container.style.left = `${tranf}px`;
    i++;
    if (i === 12) {
        i = 0;
    }
}

setInterval(mySetInterval, 2500);
let btn = document.querySelector("#closeBook");
btn.addEventListener("click", function () {
    headerDisplay.style.display = "none";
});

const progress = document.querySelector("#progress");
const active = document.querySelector("#active");
const steps = document.querySelectorAll(".step");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let step = document.querySelector("#step");
let currentActive = 0;

prev.addEventListener("click", function () {
    currentActive -= 1;
    console.log("button clicked");
    steps.forEach((step, index) => {
        if (currentActive > index) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
    if (currentActive > steps.length) {
        next.disabled = true;
    }
});
const searchBook = document.querySelector("#search-book");
console.log(searchBook.value);
const searchBehaviour = document.querySelector("#search");
console.log(searchBehaviour);
searchBehaviour.addEventListener("click", function (e) {
    //Lay toa do cua button so voi VP
    const buttonRect = e.target.getBoundingClientRect();
    //Lay toa do cho click chuot so voi viewPoint
    const bookName = searchBook.value;
    const x = e.clientX;
    const y = e.clientY;
    //Tinh toan toa do click chuot so voi button 
    const xInside = x - buttonRect.left;
    const yInside = y - buttonRect.top;
    //Them span hinh tron de dung circle 
    const circleContainer = document.createElement("span");
    circleContainer.classList.add("circle");
    circleContainer.style.top = yInside + "px";
    circleContainer.style.left = xInside + "px";
    // this.appendChild(circleContainer);
    searchBehaviour.appendChild(circleContainer);
    e.preventDefault();
    if (!(bookName % 1 === 0)) {
        pTag.textContent = "No book found. try again";
        searchContent.textContent = `No ${bookName} story found`;
        searchContent.style.color = "red";
    } else if (bookName >= 1 && bookName <= 12) {
        searchContent.textContent = `Search successfully. Plese click the ${bookName} story below to read more`;
        searchContent.style.color = "Green";
    }
});
let lists = document.getElementsByClassName("imgDiv");
let myFavourite = document.querySelector("#myFavourite");
let source = document.querySelector("#container");

for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        // list.style.height = "50px";
        // list.style.width = "50px";
        let selected = e.target;
        myFavourite.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        myFavourite.addEventListener("drop", function (e) {
            Object.assign(selected.style, imgDivStyle);
            // Object.assign(imgDiv.style, imgDivStyle);
            // Object.assign(img.style, imgStyle);
            myFavourite.appendChild(selected);
            selected = null;
        });
    });
}

const myFavouriteimg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "8px",
}
const myFavouriteDiv = {
    display: "flex",
    float: "left",
}






