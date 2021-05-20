let tabsBtn = document.querySelectorAll(".tabs__btn");
let itemContent = document.querySelectorAll(".item__content");
let fon = document.querySelector(".page");
console.log(tabsBtn);
tabsBtn.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let currBtn = btn;
            let currItem = currBtn.getAttribute("data-tab");
            let currTab = document.querySelector(currItem);

            if (currItem == "#tab_1") {
                fon.classList.add('fon__1');
                fon.classList.remove('fon__2');
                fon.classList.remove('fon__3');
            }
            if (currItem == "#tab_2") {
                fon.classList.add('fon__2');
                fon.classList.remove('fon__1');
                fon.classList.remove('fon__3');
            }
            if (currItem == "#tab_3") {
                fon.classList.add('fon__3');
                fon.classList.remove('fon__2');
                fon.classList.remove('fon__1');
            }
            tabsBtn.forEach(function(btn) {
                btn.classList.remove('active');
            });
            itemContent.forEach(function(btn) {
                btn.classList.remove('active');
            });


            currBtn.classList.add('active');
            currTab.classList.add('active');
        })
    }

);
document.querySelector('.tabs__btn').click();