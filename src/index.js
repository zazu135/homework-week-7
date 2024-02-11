function handlesearchsubmit (event) {
    event.preventDefault();
    let searchinput = document.queryselector("#search-form-input");
    let cityelement = document.queryselector("city");
    cityelement.innerHTML = searchinput.value;

}


let searchformelement = document.querySelector("search-form");
searchformelement.addEventListener("submit", handlesearchsubmit)