// click menu
const clickMenu = document.getElementsByClassName("fa-bars");
clickMenu[0].addEventListener('click', openClickMenu);
function openClickMenu(){
    const boxmenu = document.getElementsByClassName("menu_mobile");
    boxmenu[0].classList.toggle('hidden');
    const condition = document.getElementsByClassName("hidden");
    if(condition) {
        boxmenu[0].style.display = "none";
    }
    else {
        boxmenu[0].style.display = "block";
    }
    console.log("menu_mobile==",condition);
}
//click btn menu 
const clickOpenDialog = document.getElementsByClassName("btn_sub_menu");
clickOpenDialog[0].addEventListener("click" , function() {
    const boxDialog = document.getElementsByClassName("dialog_box");
    boxDialog[0].style.right = "0";
    console.log("boxDialog===",boxDialog);
});
//close
const clickCloseDialog = document.getElementById("close_dialog");
clickCloseDialog.addEventListener("click" , function() {
    const boxDialog = document.getElementsByClassName("dialog_box");
    boxDialog[0].style.right = "-320px";
});
// console.log("this===",clickCloseDialog);

/*********loading- page */
$(window).on('load', function(event) {
       $('.box-load').delay(2000).fadeOut('fast');
 });
