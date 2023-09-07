$(document).ready(function(){
    // data slide
    var data_slide = [       
        {
            'image' : 'laptop.jpg',
            'title' : 'Laptop',
        },
        {
            'image' : 'desktop.jpg',
            'title' : 'DESKTOP',
        },
        {
            'image' : 'hardware.jpg',
            'title' : 'PC Hardware',
        },
        {
            'image' : 'peripharals.jpg',
            'title' : 'PERIPHARALS',
        },
        
    ];
    function getData_slide(){
        data_slide.map((slide)=>{
            const data_slide =`
                <div class="swiper-slide">
                    <div class="slide-box box">
                        <img src="image/slide/${slide.image}" alt="">
                        <button class="title">
                            <p>${slide.title}</p>
                        </button>
                    </div>
                </div>
            `;
            $('.swiper-wrapper').append(data_slide);
        });
    }
    getData_slide();
    //data new product 
     
    //heart
    var i =true;
    $('.fa-heart').click(function(){
        // $(this).css('color','orangered');
        if(i){
            $(this).css('color','orangered');
        }else{
            $(this).css('color','black');
        }

        i=!i;
    });

    //box detail
    var dark = '<div class="dark"></div>';
    $('.eye').click(function(){
        var image =$(this).parents('.box-new').children('.image-product').find('img').attr('src');
        var title =$(this).parents('.box-new').children('.title-product').text();
        var  modelcode=$(this).parents('.box-new').children('.model-code').text();
        var  cpu=$(this).parents('.box-new').children('.cpu').text();
        var  ram=$(this).parents('.box-new').children('.ram').text();
        var  storage=$(this).parents('.box-new').children('.storage').text();
        var  graphic=$(this).parents('.box-new').children('.graphic').text();
        var  display=$(this).parents('.box-new').children('.display').text();
        var  camera=$(this).parents('.box-new').children('.camera').text();
        var  os=$(this).parents('.box-new').children('.os').text();
        var  keyboard=$(this).parents('.box-new').children('.keyboard').text();
        var  battery=$(this).parents('.box-new').children('.battery').text();
        var  weight=$(this).parents('.box-new').children('.weight').text();
        var  hdd =$(this).parents('.box-new').children('.hdd').text();
        var  gpu =$(this).parents('.box-new').children('.gpu').text();
        var  wireless =$(this).parents('.box-new').children('.wireless').text();
        var  warranty =$(this).parents('.box-new').children('.warranty').text();
        var price =$(this).parents('.box-new').children('.price').text();
        $('.box-detail').show();
        $('body').append(dark);
        $('.box-detail .img').attr('src', image);
        $('.box-detail .right').children('.title').text(title);
        $('.box-detail .right').children('.model-code').find('p').text(modelcode);
        $('.box-detail .right').children('.cpu').find('p').text(cpu);
        $('.box-detail .right').children('.ram').find('p').text(ram);
        $('.box-detail .right').children('.storage').find('p').text(storage);
        $('.box-detail .right').children('.graphic').find('p').text(graphic);
        $('.box-detail .right').children('.display').find('p').text(display);
        $('.box-detail .right').children('.camera').find('p').text(camera);
        $('.box-detail .right').children('.os').find('p').text(os);
        $('.box-detail .right').children('.keyboard').find('p').text(keyboard);
        $('.box-detail .right').children('.battery').find('p').text(battery);
        $('.box-detail .right').children('.weight').find('p').text(weight);
        $('.box-detail .right').children('.price-product').text(price);
        $('.box-detail .right').children('.hdd').find('p').text(hdd);
        $('.box-detail .right').children('.gpu').find('p').text(gpu);
        $('.box-detail .right').children('.wireless').find('p').text(wireless);
        $('.box-detail .right').children('.warranty').find('p').text(warranty);
    });
    $('.eye-p').click(function(){
        var image =$(this).parents('.box-new').children('.image-product').find('img').attr('src');
        var title =$(this).parents('.box-new').children('.title-product').text();
        var price =$(this).parents('.box-new').children('.price').text();
        var descpition_peripharals = $(this).parents('.box-new').children('.descpition-peripharals').text();
        $('.box-peripharals').show();
        $('body').append(dark);
        $('.box-peripharals .img').attr('src', image);
        $('.box-peripharals .right').children('.title').text(title);
        $('.box-peripharals .right').children('.price-product').text(price);
        $('.box-peripharals .right').children('.descpition-peripharals').text(descpition_peripharals);
    });
    $('.close-boxdetail').click(function(){
        $('.dark').remove();
        $('.box-detail').hide();
        $('.box-peripharals').hide();

    });
    $('body').on('click','.dark',function(){
        $(this).remove();
        $('.box-detail').hide();
        $('.box-peripharals').hide();

    });
    // end box detail
    $('.cart-shop').click(function(){

        var image_cart = $(this).parents('.box-new').children('.image-product').find('img').attr('src');

        $('.cart').children('img').attr('src',image_cart);
    });
    
    // menu for mobile
    $('.bar-mobile').click(function(){
        $('.menu-right').css('right','0px');
    });
    $('#close').click(function(){
        $('.menu-right').css('right','-500px');
    });
    // end menu for mobile
    //wish description
    $('.wish-icon').hover(function(){
        $(this).parent().find('span').toggle();
    });
    //login
    $('.register-link').click(function(){
        $('.wrapper').css('height','520px');
        $('.login').css('transform','translateX(-400px)');
        $('.register').css('transform','translateX(0px)');
    });
    $('.login-link').click(function(){
        $('.wrapper').css('height','440px');
        $('.login').css('transform','translateX(0px)');
        $('.register').css('transform','translateX(500px)');
    });
    $('.fa-user').click(function(){
        if(i){
            $('.wrapper').show(200);
        }else{
            $('.wrapper').hide(200);
        }
        i=!i;
    });
    $('.close-login').click(function(){
        $('.wrapper').hide(200);
    });

    // search bar
    $('.search-icon').click(function(){
        $('.search-bar').slideDown(300);
        
    });
    $('.close-search').click(function(){
        $('.search-bar').slideUp(300);
    });
    
});



