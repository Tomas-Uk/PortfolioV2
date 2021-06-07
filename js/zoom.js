$(document).ready(function () {
  eatWellHover();
  eatWellOffHover();
  BlazorRPOnHover();
  BlazorRPOffHover();
  ToDOOnHover();
  ToDOOffHover();
  ImagesOnHover();
  ImagesOffHover();
  RazorUpsertsOnHover();
  RazorUpsertsOffHover();
});

function eatWellHover() {
  $("#eat").hover(function () {
    $("#eat").attr("src", "Images/gifs/EatWell.gif");
    $(this).addClass("zoom");
  });
}
function eatWellOffHover() {
  $("#eat").hover(function () {
    $(this).removeClass("zoom");
    $("#eat").attr("src", "Images/EatWell.png");
  });
}

function BlazorRPOnHover() {
  $("#blazorRPS").hover(function () {
    $("#blazorRPS").attr("src", "Images/gifs/BlazorRPS.gif");
    $(this).addClass("zoom");
  });
}
function BlazorRPOffHover() {
  $("#blazorRPS").hover(function () {
    $(this).removeClass("zoom");
    $("#blazorRPS").attr("src", "Images/BlazorRPS.png");
  });
}

function ToDOOnHover() {
  $("#ToDo").hover(function () {
    $("#ToDo").attr("src", "Images/gifs/ToDO.gif");
    $(this).addClass("zoom");
  });
}
function ToDOOffHover() {
  $("#ToDo").hover(function () {
    $(this).removeClass("zoom");
    $("#ToDo").attr("src", "Images/ToDo.png");
  });
}

function ImagesOnHover() {
  $("#Images").hover(function () {
    $("#Images").attr("src", "Images/gifs/Images.gif");
    $(this).addClass("zoom");
  });
}
function ImagesOffHover() {
  $("#Images").hover(function () {
    $(this).removeClass("zoom");
    $("#Images").attr("src", "Images/Images.png");
  });
}

function RazorUpsertsOnHover() {
  $("#RazorUpsert").hover(function () {
    $("#RazorUpsert").attr("src", "Images/blog.jpg");
    $(this).addClass("zoom");
  });
}
function RazorUpsertsOffHover() {
  $("#RazorUpsert").hover(function () {
    $(this).removeClass("zoom");
    $("#RazorUpsert").attr("src", "Images/blog.jpg");
  });
}
