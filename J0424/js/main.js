//함수선언
function chBtn(){
    alert("빨강 변경");
    //id 찾는 방법
    //let color1 = document.getElementById("co1");
    // class  찾는 방법
    /*
    let color2 = document.getElementsByClassName("color2");
    console.log(color2);
    color2[0].style.color = "red";
    color2[0].innerText = "회원수정"; */

    // querySelector - class
    let color4 = document.querySelector(".color3");
    console.log(color3);
    color3.style.color = "red";
    color3.innerText = "회원수정";

    //querySelector - class 1개검색
    //queryselectorall - 복수검색

    let color5 = document.querySelectorAll(".color4")
    console.log(color5);

}

