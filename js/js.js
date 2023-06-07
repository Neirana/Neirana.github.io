//slider

const img = document.querySelectorAll('.png');
const dots = document.querySelectorAll('.c');
// Создадим массив всех изображений
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (currentIndex >= img.length) {
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex < 0) {
        // Получаем последний элемент
        currentIndex = img.length - 1;
    }
    slide(currentIndex);
}

function slide(index) {
    img.forEach(img_c => {
        img_c.className = "png png_hide";
    });
    img[index].className = "png png_active";
    updateDots(index);
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.className = 'c2';
    }
    dots[index].className = 'c1';
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.line');
const btnRight = document.querySelector('.line1');

btnLeft.addEventListener('click', () => {
    nextIndex(-1)
});
btnRight.addEventListener('click', () => {
    nextIndex(1)
});
for (let dot of dots) {
    dot.addEventListener('click', function (event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            if (dot == dots[i]) {
                changeIndex(i);
            }
        }
    });
}

// tabs
document.querySelectorAll(".section4").forEach(tab => {
    tab.querySelectorAll(".tb").forEach(tab_btn => {
        const hide_anim = [
            { opacity: "1" },
            { opacity: "0" },
        ];
        const show_anim = [
            { opacity: "0" },
            { opacity: "1" },
        ];
        const anim_t = 200;
        tab_btn.onclick = function e() {
            tab.querySelectorAll(".tb").forEach(tab_btn2 => {
                tab_btn2.className = "sec4_text_g tb";
            });
            tab_btn.className = "sec4_text tb";
            tab.querySelectorAll(".sec4_block").forEach(tab_p => {

                tab_p.animate(hide_anim, anim_t);
                setTimeout(function e() {
                    tab_p.className = "sec4_block th";
                }, 200);
            });
            setTimeout(function e() {
                tab.querySelectorAll(".sec4_block")[Number(tab_btn.getAttribute("data-slide"))].animate(show_anim, anim_t);
                tab.querySelectorAll(".sec4_block")[Number(tab_btn.getAttribute("data-slide"))].className = "sec4_block";
            }, 200);

        }
    });
});

// category

document.querySelectorAll(".section1").forEach(tab => {
    tab.querySelectorAll(".o_b").forEach(tab_btn => {
        tab_btn.onclick = function e() {
            tab.querySelectorAll(".o_b").forEach(tab_btn2 => {
                tab_btn2.className = "of o_b";
            });
            tab_btn.className = "of1 o_b";
            tab.querySelectorAll(".kar").forEach(tab_p => {
                if (tab_p.getAttribute("data-to-ct") == tab_btn.getAttribute("data-ct") || tab_btn.getAttribute("data-ct") == 1) {
                    tab_p.className = "kar";
                    const hide_anim = [
                        { opacity: "1" },
                        { opacity: "0" },
                    ];
                    const show_anim = [
                        { opacity: "0" },
                        { opacity: "1" },
                    ];
                    const anim_t = 200;
                    tab_p.animate(show_anim, anim_t);
                } else {
                    tab_p.className = "kar th";
                    const hide_anim = [
                        { opacity: "1" },
                        { opacity: "0" },
                    ];
                    const show_anim = [
                        { opacity: "0" },
                        { opacity: "1" },
                    ];
                    const anim_t = 200;
                    tab_p.animate(hide_anim, anim_t);
                }
            });

        }
    });
});

//accordion



document.querySelectorAll(".job").forEach(accordion => {
    accordion.onclick = function e() {
        let ac_ad = accordion.querySelector(".gt");
        ac_ad.classList.toggle('gt_hide');
        if (ac_ad.classList.contains("gt_hide")) {
            let arr = accordion.querySelector(".rta");
            arr.className = "rt rta";
        } else {
            let arr = accordion.querySelector(".rta");
            arr.className = "rtactiv rta";
        }
    }

});

//burger
document.querySelector(".menu").onclick = function e() {
    document.querySelector(".burger").classList.toggle("burger_show");
}

//modal 

document.querySelectorAll(".comm_bt").forEach(btn => {
    btn.onclick = function e() {
        let modal = document.querySelector(".modal_w");
        if (modal.classList.contains("modal_closed")) {
            modal.className = "modal modal_w";
        } else {
            modal.className = "modal_closed modal_w";
        }
    }
});


document.querySelector(".comm_bt_cl").onclick = function e() {
    document.querySelector(".modal_w").className = "modal_closed modal_w";
}