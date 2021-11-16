// GET ELEMENTS FUNCTION - element = THE ELEMENT I WANT TO CALL
// All = WILL IT CALL ALL THE CONTAINERS OR JUST ONE?
function $( element, All = false ){
        
    // IF All IS SET TO TRUE, THEN:
    if ( All === true ) {
        // GET ALL THE ELEMENTS WITH THIS CLASS/LIST/ELEMENT NAME
        return  document.querySelectorAll(element);
    } else {
        // GET JUST ONE ELEMENT WITH THIS CLASS/LIST/ELEMENT NAME
        return  document.querySelector(element);
    }

}

// ----------------------------------------------------
// TOGGLE THEME

// VARIABLES
const toggleTheme = $(".change-theme"); // GET THE TOGGLE THEME CLASS
const body = $("body"); // GET BODY ELEMENT

let lightTheme = true; // SET LIGHT THEME TO TRUE/FALSE

// IF CLICK ON THE TOGGLE THEME BUTTON:
toggleTheme.addEventListener('click', function(){

    // GET MOON AND SUN SVG CONTAINERS
    const moon = $(".moon");
    const sun = $(".sun");
    
    // TOGGLE DARK CLASS ON BODY ELEMENT
    body.classList.toggle("dark");
    
    // IF LIGHT THEME IS TRUE THEN:
    if( lightTheme ){
        
        // MAKE MOON VISIBLE AND SUN INVISIBLE
        moon.style = "display: block;";
        sun.style = "display: none;";
        
        // SET LIGHT ELEMENT TO FALSE/ DARK MODE ENABLE
        lightTheme = false;

    }else{
        
        // MAKE SUN VISIBLE AND MOON INVISIBLE
        moon.style = "display: none;";
        sun.style = "display: block;";

        // SET LIGHT MODE BACK TO TRUE / LIGHT MODE ENABLE
        lightTheme = true;

    }

});

// ----------------------------------------------------
// TASK ADD


const goTop = $(".go-top");// CALL GO TOP BUTTON
const header = $("header");// CALL HEADER ELEMENT
const headerHeight = header.scrollHeight;// GET HEADER HEIGHT


// WHILE THE USER IS SCROLLING THE PAGE:
window.onscroll = () => {
    // IF SCROOLY IS GRATER THEN HEADER:
    if( window.scrollY > headerHeight ){
        // MAKE GO TOP BUTTON VISIBLE
        goTop.style = "right: 0;"
    }else{
        // GO TOP BUTTON COME BACK TO NOWHERE
        goTop.style = "right: -100px;"
    }

}

// GO TOP BUTTON CLICK:
goTop.addEventListener('click', () => {
    // GO TO TOP OF THE PAGE
    window.scrollTo( 0, 0 );
});

const ulElement = $(".task-list");// <ul class=".task-list">
const addButton = $(".add-btn");// <button class=".add-btn">
const inputElement = $("#add-task")// <input type="text" id="add-task"

// IF A KEY IS DOWN:
inputElement.addEventListener('keydown', function(e){
    
    // IF THE KEY IS ENTER:
    if( e.key === 'Enter' ) {        
        // CREATE TASK CONTAINER
        createTask();
    }

});

// IF CLICK ON THE + BUTTON
addButton.onclick = () => {        

    // CREATE TASK CONTAINER
    createTask();

}


// CREATE <li> TASK
function createTask(){

    // IF INPUT IS NOT EMPTY:
    if( inputElement.value ){

        // IF THE TEXT ADDED BE:
        if( inputElement.value  === "GIASFCLFUBREHBER" ){

            // SET THIS SONG FROM UNDERTALE
            let audio = new Audio("snd_dumbvictory.wav");
            audio.play();// PLAY THE SONG
        
        }


        // CREATE ELEMENTS
        const liElement = document.createElement("li") // <li>
        const spanElement = document.createElement("span") // <span>
        const pElement = document.createElement("p") // <p>
        const btnElement = document.createElement("button") // <button>
        const divElement = document.createElement("div"); // <div></div>
        const checkBtn = document.createElement("input"); // <input></input>

        // GIVE THINGS FOR THE CREATED ELEMENTS

        // <p>
        pElement.innerHTML = inputElement.value;// GIVE TEXT INPUT TO <p>
        // APPEND TRASH SVG TO THE BUTTON
        btnElement.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>`;

        // <input> CHECKBOX
        checkBtn.setAttribute("id", "check-task");// GIVE #check-task ID TO <input>
        checkBtn.type = "checkbox";// SET <input> TYPE TO CHECKBOX
        
        // <div> CONTAINER
        divElement.appendChild(checkBtn);// APPEND CHECKBOX TO <div>
        divElement.appendChild(pElement);// APPEND <p> TASK TEXT TO <div>
        divElement.setAttribute("class", "text-task");// SET .text-task CLASS TO <div>

        // <span> CONTAINER
        spanElement.appendChild(divElement);// APPEND <div> CONTAINER TO <span>
        spanElement.appendChild(btnElement);// APPED <button> TRASH TO <span>
        
        // <li>
        liElement.appendChild(spanElement);// APPEND <span> TO <li>

        // <ul>
        ulElement.appendChild(liElement);// APPEND <li> TASK CONTAINER TO <ul> MAIN CONTAINER TASK

        // IF FOR SOME REASON THE TEXT HAS MORE THAN 100 CHARACTERS:
        if( inputElement.value.length > 100 ){

            document.title = "HOW?? - TODO";// HOW????

        }

        // IF FOR MORE WEIRD REASONS THE TEXT HAS MORE THAN 300 CHARACTERS:
        if( inputElement.value.length > 300 ){

            document.title = "YOU BROKE IT FOR NOTHING! - TODO";// WTF?

        }


        // CLEAR TEXT INPUT, MAKE IT EMPTY
        inputElement.value = "";

        // IF CLICK ON THE TRASH CAN, REMOVE THE <li>
        btnElement.onclick = function(){
            
            // REMOVE LI ELEMENT FROM UL ELEMENT
            ulElement.removeChild(liElement);


        }

        // CLICK ON CHECKBOX
        checkBtn.onclick = () => {
            
            // TOGGLE "LINE-THOUGH" EFFECT ON TEXT TASK
            pElement.classList.toggle("cut-word");
            
            // MAKE THE CONTAINER HALF VISIBLE
            liElement.classList.toggle("cut-word");

        }

    }

}