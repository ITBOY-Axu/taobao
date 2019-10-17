require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        (function () {
            var leftLocal = $('.leftLocal');
            var localAll = $('.localAll');
            var itembig = $('.itembig');
            var leader = $('.leader-under');
            var leadermain = $('.leader-main');
            let yonghu = $.cookie('youxiang');
            const login=$('.login');
            const delet=$('.delet');
            console.log(yonghu);

             // 显示登入的用户邮箱  
            if(yonghu!=''){
                login.html(yonghu);
                delet.show();
                delet.on('click',function(){
                    login.html('亲，请登入');
                    delet.hide();
                    $.cookie('youxiang','',{expires: -1});
                })
            }


            // console.log(leftLocal);
            // console.log(localAll);
            // console.log(itembig);
            // console.log(leader);

            leftLocal.hover(function () {

                localAll.show();
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.20/secondStudy/taobao/taobao/php/location.php',
                    async: true,
                    dataType: 'json',
                }).done(function (data) {

                    // console.log(data[0].item);
                    let str = '';
                    $.each(data, function (index, value) {
                        str = `<li class="localAllActive">${value.local}</li>`
                        localAll.append(str);
                    })
                    // console.log(str);



                })
            },
                function () {
                    localAll.hide();
                })

            itembig.hover(function () {
                leader.show();
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.20/secondStudy/taobao/taobao/php/location.php',
                    async: true,
                    dataType: 'json',
                }).done(function (data) {
                    console.log(data);
                    let item = '';
                    $.each(data, function (index, value) {
                        item = `<li class="localAllActive">${value.item}</li>`
                        leadermain.append(item);
                    })

                })



            },
                function () {
                    leader.hide();
                })





           


        })()
    })
})