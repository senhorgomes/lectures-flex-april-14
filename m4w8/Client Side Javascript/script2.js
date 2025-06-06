$(document).ready(()=> {
    $("#div1").on("click", (event)=> {
        event.stopPropagation();
        console.log("Div 1 Clicked!")
    })
    $("#div2").on("click", (event)=> {
        event.stopPropagation();
        console.log("Div 2 Clicked!")
    })
    $("#div3").on("click", (event)=> {
        // event.stopImmediatePropagation();
        event.stopPropagation();

        console.log("Div 3 Clicked!")
    })
    $("#form").on("submit", (event)=> {
        // $("#text").value();
        event.preventDefault();
        console.log("Form has been submitted!")
    })
})