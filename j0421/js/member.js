

                   
        function emailChange(){
            console.log(document.querySelector("#email-sel").value);
            document.querySelector("#email2").value = document.querySelector("#email-sel").value;
        }

                    
//------------------
        //비밀번호 확인
        function pwConfirm(){
            console.log(document.querySelector("#pw").value);
            console.log(document.querySelector("#pw2").value);
            let Pw = document.querySelector("#pw").value;
            let Pw2 = document.querySelector("#pw2").value;
            document.querySelector("#pwCheck").innerText ="비밀번호 불일치";
            document.querySelector("#pwCheck").style.color = "red";
            if(Pw2 == Pw){document.querySelector("#pwCheck").innerText ="비밀번호 일치";
            document.querySelector("#pwCheck").style.color = "blue";}
        }
        if(pw2 == ""){document.querySelector("#pwCheck").innerText ="비밀번호 입력";
        document.querySelector("#pwCheck").style.color = "black";}

    //-----------------------
        //다음주소 함수
        function zipCodeBtn(){
            // alert("다음주소 api호출");
            //다음주소 api호출
            new daum.Postcode({
                oncomplete: function(data) {
                    document.querySelector("#postZip").value = data.zonecode;
                    document.querySelector("#addr1").value = data.address;
                    document.querySelector("#addr2").focus();
                }
            }).open();
        }