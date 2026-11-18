// script.js: lapas interaktivitāte (mobilā izvēlne un attēlu karuselis)
//
// Koda stils līdzīgs PEP-8: 4 atstarpju atkāpe, pilni nosaukumi
// (snake_case mainīgajiem un funkcijām, UPPER_CASE konstantēm),
// rindas līdz 79 simboliem un divas tukšas rindas starp funkcijām.

"use strict";


// ===== 1. MOBILĀ IZVĒLNE =====

const menu_button = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");
const navigation_links = navigation.querySelectorAll("a");


function toggle_navigation() {
    // Atver vai aizver izvēlni telefonā
    const is_navigation_open = navigation.classList.toggle(
        "navigation--open"
    );
    menu_button.setAttribute("aria-expanded", is_navigation_open);
}


function close_navigation() {
    // Pēc saites izvēles izvēlne pati aizveras
    navigation.classList.remove("navigation--open");
    menu_button.setAttribute("aria-expanded", false);
}


menu_button.addEventListener("click", toggle_navigation);

for (const navigation_link of navigation_links) {
    navigation_link.addEventListener("click", close_navigation);
}


// ===== 2. ATTĒLU KARUSELIS =====

const AUTOPLAY_DELAY_IN_MILLISECONDS = 5000;
const ACTIVE_SLIDE_CLASS = "carousel__slide--active";
const PAUSED_BUTTON_CLASS = "carousel__button--paused";

const carousel_slides = document.querySelectorAll(".carousel__slide");
const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");
const pause_button = document.getElementById("pause-button");
const carousel_counter = document.getElementById("carousel-counter");

let current_slide_index = 0;
let autoplay_timer = null;
let is_autoplay_running = false;


function show_slide(new_slide_index) {
    // Pēc pēdējā attēla atkal rāda pirmo, pirms pirmā rāda pēdējo
    if (new_slide_index >= carousel_slides.length) {
        new_slide_index = 0;
    }
    if (new_slide_index < 0) {
        new_slide_index = carousel_slides.length - 1;
    }

    current_slide_index = new_slide_index;

    // Aktīvo klasi saņem tikai izvēlētais slaids
    carousel_slides.forEach(function (slide, slide_index) {
        const is_current_slide = slide_index === current_slide_index;
        slide.classList.toggle(ACTIVE_SLIDE_CLASS, is_current_slide);
    });

    carousel_counter.textContent =
        (current_slide_index + 1) + " / " + carousel_slides.length;
}


function show_next_slide() {
    show_slide(current_slide_index + 1);
}


function show_previous_slide() {
    show_slide(current_slide_index - 1);
}


function start_autoplay() {
    // setInterval izsauc funkciju show_next_slide ik pēc 5 sekundēm
    autoplay_timer = setInterval(
        show_next_slide,
        AUTOPLAY_DELAY_IN_MILLISECONDS
    );
    is_autoplay_running = true;
    pause_button.textContent = "❚❚ Apturēt";
    pause_button.classList.remove(PAUSED_BUTTON_CLASS);
}


function stop_autoplay() {
    clearInterval(autoplay_timer);
    is_autoplay_running = false;
    pause_button.textContent = "▶ Atsākt";
    pause_button.classList.add(PAUSED_BUTTON_CLASS);
}


function toggle_autoplay() {
    if (is_autoplay_running) {
        stop_autoplay();
    } else {
        start_autoplay();
    }
}


function restart_autoplay() {
    // Pēc manuālas pārslēgšanas taimeris sāk skaitīt no jauna,
    // lai nākamais attēls neparādītos uzreiz
    if (is_autoplay_running) {
        clearInterval(autoplay_timer);
        start_autoplay();
    }
}


previous_button.addEventListener("click", function () {
    show_previous_slide();
    restart_autoplay();
});

next_button.addEventListener("click", function () {
    show_next_slide();
    restart_autoplay();
});

pause_button.addEventListener("click", toggle_autoplay);

show_slide(0);
start_autoplay();


// ===== 3. KĀJENE =====

// Autortiesību gads vienmēr ir pašreizējais gads
const current_year_element = document.getElementById("current-year");
current_year_element.textContent = new Date().getFullYear();
