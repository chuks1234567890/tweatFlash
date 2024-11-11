// Select DOM elements
const showModalBtn = document.querySelectorAll(".post-list li .pa button:nth-child(2)");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");
const close_icon=document.querySelector(".ci2")
const open_icon=document.querySelector(".ci1")
const nav_app =document.querySelector(".plus-icon")
const point =document.querySelector(".point")
let fetch_programmer=false;

// Global variables for tracking drag events
let isDragging = false, startY, startHeight ,updateHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
}
function check_height(){
    if (updateHeight>=100){
        return false
    }else if (updateHeight==50){
        return true
    }
}
const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
    // Toggles the fullscreen class to bottomSheet if the height is equal to 100
    bottomSheet.classList.toggle("fullscreen", height === 100);
    check_height(height)
    updateHeight=height
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
    sheetContent.style.height = `0vh`;
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
    updateHeight=newHeight
}

// Determines whether to hide, set to fullscreen, or set to default 
// height based on the current height of the sheet content
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
}

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
close_icon.addEventListener("click",hideBottomSheet)
for(i=0;i<showModalBtn.length;i++)
	showModalBtn[i].onclick=showBottomSheet;


let average_icon
open_icon.addEventListener("click",()=>{
    if (check_height){
        updateSheetHeight(100)
    }else{
        updateSheetHeight(50)
    }
})

const nav = document.querySelector(".navigation"),
    toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
  });

function show_prof(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".profile-page").style.display='block'
    },1500)
    vid.classList.remove('vid')
}
function show_home(){
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".main-posts").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".main-posts").style.display='flex'

    },1500)
    vid.classList.remove('vid')
}
function show_message(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    vid.classList.remove('vid')
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".messages-page").style.display='block'
    },1500)
}
function show_explore(){
    document.querySelector(".main-posts").style.display='none'
    document.querySelector(".profile-page").style.display='none'
    document.querySelector(".messages-page").style.display='none'
    document.querySelector(".explore-page").style.display='none'
    document.querySelector(".section1 .users-nav").style.display='none'
    spinner_page.style.display="flex"
    setTimeout(()=>{
        spinner_page.style.display="none"
        document.querySelector(".explore-page").style.display='block'
    },1500)
    vid.classList.remove('vid')
}
const vid=document.querySelector(".videos-page")
function togvid(){
    vid.classList.toggle('vid')
}
const mnn=document.querySelector(".icon-nav")
const mmn2=document.querySelectorAll(`.icon-nav`)
const preview_img=document.querySelector(".preview-img")
const spinner_page=document.querySelector(".spinner-page")
function closePost(){
    preview_img.classList.remove("prev-show")
}
function openPost(){
    preview_img.classList.add("prev-show")
}
document.querySelector(".hhh").addEventListener("click",(e)=>{
    mnn.classList.toggle('s')
})
const more_Item=document.querySelectorAll('.post-list .elipisis-holder')
for (let i=1; i<more_Item.length; i++){
    more_Item[i].addEventListener("click", ()=>{
        mmn2[i].classList.toggle('s')
    })
}
setTimeout(()=>{
    document.querySelector(".background-loader").style="visibility:hidden; opacity:0;"
},2500)
setTimeout(()=>{
    spinner_page.style.display="none"
    document.querySelector(".main-posts").style.display='flex'
},5000)
