// JavaScript Document

     var d = new Date();
var main = function() {
  $(".NewTask").click(function() {
    //If statements for 
    if(document.getElementById("TaskDiv1").style.display === "none") {
     document.getElementById("TaskDiv1").style.display = "block";
     
     var  dayStarted1 =  d.getDate();
     var  monthStarted1 = d.getMonth();
    } else if(document.getElementById("TaskDiv2").style.display === "none") {
     document.getElementById("TaskDiv2").style.display = "block";
     
     var  dayStarted2 =  d.getDate();
     var  monthStarted2 = d.getMonth();
    } else if(document.getElementById("TaskDiv3").style.display === "none") {
     document.getElementById("TaskDiv3").style.display = "block";
     
     var  dayStarted3 =  d.getDate();
     var  monthStarted3 = d.getMonth();
    }else if(document.getElementById("TaskDiv4").style.display === "none") {
     document.getElementById("TaskDiv4").style.display = "block";
     
     var  dayStarted4 =  d.getDate();
     var  monthStarted4 = d.getMonth();
    }else if(document.getElementById("TaskDiv5").style.display === "none") {
     document.getElementById("TaskDiv5").style.display = "block";
     
     var  dayStarted5 =  d.getDate();
     var  monthStarted5 = d.getMonth();
    }else if(document.getElementById("TaskDiv6").style.display === "none") {
     document.getElementById("TaskDiv6").style.display = "block";
     
     var  dayStarted6 =  d.getDate();
     var  monthStarted6 = d.getMonth();
    }else if(document.getElementById("TaskDiv7").style.display === "none") {
     document.getElementById("TaskDiv7").style.display = "block";
     
     var  dayStarted7 =  d.getDate();
     var  monthStarted7 = d.getMonth();
    }else if(document.getElementById("TaskDiv8").style.display === "none") {
     document.getElementById("TaskDiv8").style.display = "block";
     
     var  dayStarted8 =  d.getDate();
     var  monthStarted8 = d.getMonth();
    }else if(document.getElementById("TaskDiv9").style.display === "none") {
     document.getElementById("TaskDiv9").style.display = "block";
     
     var  dayStarted9 =  d.getDate();
     var  monthStarted9 = d.getMonth();
    }else if(document.getElementById("TaskDiv10").style.display === "none") {
     document.getElementById("TaskDiv10").style.display = "block";
     
     var  dayStarted10 =  d.getDate();
     var  monthStarted10 = d.getMonth();
    }else if(document.getElementById("TaskDiv11").style.display === "none") {
     document.getElementById("TaskDiv11").style.display = "block";
     
     var  dayStarted11 =  d.getDate();
     var  monthStarted11 = d.getMonth();
    }else if(document.getElementById("TaskDiv12").style.display === "none") {
     document.getElementById("TaskDiv12").style.display = "block";
     
     var  dayStarted12 =  d.getDate();
     var  monthStarted12 = d.getMonth();
    }else if(document.getElementById("TaskDiv13").style.display === "none") {
     document.getElementById("TaskDiv13").style.display = "block";
     
     var  dayStarted13 =  d.getDate();
     var  monthStarted13 = d.getMonth();
    }else if(document.getElementById("TaskDiv14").style.display === "none") {
     document.getElementById("TaskDiv14").style.display = "block";
     
     var  dayStarted14 =  d.getDate();
     var  monthStarted14 = d.getMonth();
    }else if(document.getElementById("TaskDiv15").style.display === "none") {
     document.getElementById("TaskDiv15").style.display = "block";
     
     var  dayStarted15 =  d.getDate();
     var  monthStarted15 = d.getMonth();
    }else {
      console.log("You have reached the max amount of tasks");
    }
    if((d.getMonth() -  monthStarted1) < 0) {
   var monthDifference =  monthStarted1 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted1;
    } if(d.getMonth() ===  monthStarted1) {
     var taskdaysleft1 = "var taskdaysleft1".value - (d.getDate() -  dayStarted1);
    } else if(monthDifference % 2 === 0) {
       taskdaysleft1 = monthDifference / 2 * 61 +  dayStarted1 - d.getDate();
    } else if( monthStarted1 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted1 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted2) < 0) {
    monthDifference =  monthStarted2 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted2;}
    if(d.getMonth() ===  monthStarted1) {
     var taskdaysleft2 = "var taskdaysleft2".value - (d.getDate() -  dayStarted2);
    } else if(monthDifference % 2 === 0) {
       taskdaysleft2 = monthDifference / 2 * 61 +  dayStarted2 - d.getDate();
    } else if( monthStarted2 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted2 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted3) < 0) {
   MonthDifference =  monthStarted3 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted3;
    }
    if(d.getMonth() ===  monthStarted3) {
    var taskdaysleft3 = "var taskdaysleft3".value - (d.getDate() -  dayStarted3);
    } else if(monthDifference % 2 === 0) {
       taskdaysleft3 = monthDifference / 2 * 61 +  dayStarted3 - d.getDate();
    } else if( monthStarted3 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted3 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted4) < 0) {
   MonthDifference =  monthStarted4 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted4;
    }
    if(d.getMonth() ===  monthStarted4) {
    var taskdaysleft4 = "var taskdaysleft4".value - (d.getDate() -  dayStarted4);
    } else if(monthDifference % 2 === 0) {
       taskdaysleft4 = monthDifference / 2 * 61 +  dayStarted4 - d.getDate();
    } else if( monthStarted4 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted4 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted5) < 0) {
   MonthDifference =  monthStarted5 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted5;
    }
    if(d.getMonth() ===  monthStarted5) {
    var taskdaysleft5 = "var taskdaysleft5".value - (d.getDate() -  dayStarted5);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft5 = monthDifference / 2 * 61 +  dayStarted5 - d.getDate();
    } else if( monthStarted5 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted5 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted6) < 0) {
   MonthDifference =  monthStarted6 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted6;
    }
    if(d.getMonth() ===  monthStarted6) {
    var taskdaysleft6 = "var taskdaysleft6".value - (d.getDate() -  dayStarted6);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft6 = monthDifference / 2 * 61 +  dayStarted6 - d.getDate();
    } else if( monthStarted6 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted6 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted7) < 0) {
   MonthDifference =  monthStarted7 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted7;
    }
    if(d.getMonth() ===  monthStarted7) {
    var taskdaysleft7 = "var taskdaysleft7".value - (d.getDate() -  dayStarted7);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft7 = monthDifference / 2 * 61 +  dayStarted7 - d.getDate();
    } else if( monthStarted7 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted7 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted8) < 0) {
   MonthDifference =  monthStarted8 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted8;
    }
    if(d.getMonth() ===  monthStarted8) {
    var taskdaysleft8 = "var taskdaysleft8".value - (d.getDate() -  dayStarted8);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft8 = monthDifference / 2 * 61 +  dayStarted8 - d.getDate();
    } else if( monthStarted8 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted8 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted9) < 0) {
   MonthDifference =  monthStarted9 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted9;
    }
    if(d.getMonth() ===  monthStarted9) {
    var taskdaysleft9 = "var taskdaysleft9".value - (d.getDate() -  dayStarted9);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft9 = monthDifference / 2 * 61 +  dayStarted9 - d.getDate();
    } else if( monthStarted9 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted9 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted10) < 0) {
   MonthDifference =  monthStarted10 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted10;
    }
    if(d.getMonth() ===  monthStarted1) {
    var taskdaysleft10 = "var taskdaysleft10".value - (d.getDate() -  dayStarted10);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft10 = monthDifference / 2 * 61 +  dayStarted10 - d.getDate();
    } else if( monthStarted10 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted10 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted11) < 0) {
   MonthDifference =  monthStarted11 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted11;
    }
    if(d.getMonth() ===  monthStarted11) {
    var taskdaysleft11 = "var taskdaysleft11".value - (d.getDate() -  dayStarted11);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft11 = monthDifference / 2 * 61 +  dayStarted11 - d.getDate();
    } else if( monthStarted11 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted11 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted12) < 0) {
   MonthDifference =  monthStarted12 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted12;
    }
    if(d.getMonth() ===  monthStarted12) {
    var taskdaysleft12 = "var taskdaysleft12".value - (d.getDate() -  dayStarted12);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft12 = monthDifference / 2 * 61 +  dayStarted12 - d.getDate();
    } else if( monthStarted12 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted12 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted13) < 0) {
   MonthDifference =  monthStarted13 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted13;
    }
    if(d.getMonth() ===  monthStarted13) {
    var taskdaysleft13 = "var taskdaysleft1".value - (d.getDate() -  dayStarted1);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft13 = monthDifference / 2 * 61 +  dayStarted13 - d.getDate();
    } else if( monthStarted13 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted13 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted14) < 0) {
   MonthDifference =  monthStarted14 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted4;
    }
    if(d.getMonth() ===  monthStarted1) {
    var taskdaysleft14 = "var taskdaysleft14".value - (d.getDate() -  dayStarted14);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft14 = monthDifference / 2 * 61 +  dayStarted14 - d.getDate();
    } else if( monthStarted14 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted14 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   if((d.getMonth() -  monthStarted15) < 0) {
   MonthDifference =  monthStarted15 - d.getMonth();
    } else {
      monthDifference = d.getMonth() -  monthStarted15;
    }
    if(d.getMonth() ===  monthStarted15) {
    var taskdaysleft15 = "var taskdaysleft15".value - (d.getDate() -  dayStarted15);
    } else if(monthDifference % 2 === 0) {
      taskdaysleft15 = monthDifference / 2 * 61 +  dayStarted15 - d.getDate();
    } else if( monthStarted15 % 2 === 0 && monthDifference % 2 !== 0) {
      Math.floor(monthDifference * 30.5);
    } else if( monthStarted15 % 2 !== 0 && monthDifference % 2 !==0) {
      Math.floor(monthDifference * 30.5 + 0.5);
    }
   
  });
  $("#donebutton").click(function() {
    if(".donebutton1".clicked === true) {
      ".div1".display = none;
    } else if("#donebutton2".clicked === true) {
      ".div2".display = none;
    } else if("#donebutton3".clicked === true) {
      ".div3".display = none;
    } else if("#donebutton4".clicked === true) {
      ".div4".display = none;
    } else if("#donebutton5".clicked === true) {
      ".div5".display = none;
    } else if("#donebutton6".clicked === true) {
      ".div6".display = none;
    } else if("#donebutton7".clicked === true) {
      ".div7".display = none;
    } else if("#donebutton8".clicked === true) {
      ".div8".display = none;
      }else if("#donebutton9".clicked === true) {
      ".div9".display = none;
     }else if("#donebutton10".clicked === true) {
    ".div10".display = none;
    }else if("#donebutton11".clicked === true) {
      ".div11".display = none;
    } else if("#donebutton12".clicked === true) {
      ".div12".display = none;
    } else if("#donebutton13".clicked === true) {
      ".div13".display = none;
    } else if("#donebutton14".clicked === true) {
      ".div14".display = none;
    } else if("#donebutton15".clicked === true) {
      ".div15".display = none;
    }
  });
  };
$(document).ready(main);