//jquery선언
$(function(){
    $("#dataOpen3").click(function(){
        $.ajax({
           url:"https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=ruwVCuzH6Hb%2BHsHo2jaHHeCRYmkMCoQE6Qk8XU1jISb7sRpPbqUEqHcQVNOaLsedXU53zWKVEvFH50O09Xp8Jw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json",
           type:"get",
           data:{},
           dataType:"json",
           success:function(data){
            // alert("성공");
            console.log(data.response.body.items.item[0].galWebImageUrl);
            $("#txt").text();

            let imgData = data.response.body.items.item[0].galWebImageUrl;
            let hdata = `<img id="img" src="${imgData}">`;
            $("txt").html(hdata)
            

           },
           error:function(){
            alert("실패");
           } 
        });
    });
})