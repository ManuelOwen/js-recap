// const printHappiness = ()=>{
//     for( let i =0; i<=100; i++)
//         {
//             // return "happiness";
//         console.log ("happiness");
//     }
   
// }
// printHappiness();
// function printHappiness(){
//     for(let i = 0; i <=100; i++){
//         console.log("happy for today")
//     }
// }
// printHappiness();
document.getElementById("btn").addEventListener("click", function() {
    try {
        // Assuming you are checking the value of an input field with id "inputField"
        let fill = document.getElementById("fill").value;

        if (fill === "") {
            alert("Cannot submit empty form");
        } else {
            alert("Submitted successfully");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
