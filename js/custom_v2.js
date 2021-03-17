
var _domain = location.host;
var url = window.location.href;

function addBodyBottom(t) {
    const get_body = document.getElementsByTagName('body');
    get_body[0].insertAdjacentHTML('beforeEnd', `${t}`);
}

// Refer url
// const rurl = `
    // <script>
    var refer = window.location.href;
    var first_url = window.location.href;
    // console.log(first_url);
    // var ref = document.referrer;
    //set cookies
    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = "expires=" + d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }
    // //get cookies    
    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // //Tách chuỗi link
    // function locurl(url) {
    //     var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    //     var result = parse_url.exec(url);
    //     var res = result[3].replace(/www./gi, '');
    //     return res;
    // }
    // if(ref.length){
    //     var ref_host = locurl(ref);
    //     var landing_url =  document.URL;
    //     var home_url = locurl(landing_url);
    //     if(ref_host != home_url){
    //         var first_url = landing_url;
    //         var refer = ref;
    //         setCookie('ref', refer, 30);
    //         setCookie('first_url', first_url, 30);
    //     }else{
    //         var refer = getCookie('ref');
    //         var first_url = getCookie('first_url');
    //     }
    //     console.log(refer);
    //     console.log(first_url);
    //     console.log('refer');
       
    // }
    // </script>
// `;
// addBodyBottom(rurl);

// if ((url.indexOf('/khuyen-mai/dien-mao-moi-tang-phau-thuat-tham-my-mien-phi/') > -1)
//     || (url.indexOf('/khuyen-mai/dien-mao-moi-tang-21-ty-da-dep/') > -1)
//     || (url.indexOf('/giam-beo/hut-mo-vaser-giam-50/') > -1)
//     || (url.indexOf('/khuyen-mai/ngay-hoi-pttm-han-quoc-tai-nghe-an/') > -1)
//     || (url.indexOf('/khuyen-mai/ngay-hoi-pttm-han-quoc-tai-can-tho/') > -1)
//     || (url.indexOf('/khuyen-mai/ngay-hoi-pttm-han-quoc-tai-hai-phong/') > -1)
//     || (url.indexOf('/khuyen-mai/ngay-hoi-pttm-han-quoc-tai-da-nang/') > -1)
//     || (url.indexOf('/tham-my-mat/uu-dai-35/') > -1)
//     || (url.indexOf('/khuyen-mai/hoi-thao-pttm-ra-mat-nhan-dien-moi-dong-a-tai-ho-chi-minh/') > -1)) {
//     console.log('ok');
// } else {
//     // Subiz chat    
//     !function(s,u,b,i,z){var r,m;s[i]||(s._sbzaccid=z,s[i]=function(){s[i].q.push(arguments)},s[i].q=[],s[i]("setAccount",z),r=function(e){return e<=6?5:r(e-1)+r(e-3)},(m=function(e){var t,n,c;5<e||s._subiz_init_2094850928430||(t="https://",t+=0===e?"widget."+i+".xyz":1===e?"storage.googleapis.com":"sbz-"+r(10+e)+".com",t+="/sbz/app.js?accid="+z,n=u.createElement(b),c=u.getElementsByTagName(b)[0],n.async=1,n.src=t,c.parentNode.insertBefore(n,c),setTimeout(m,2e3,e+1))})(0))}(window,document,"script","subiz","acqqzkazkvdclskkpucf");
    
// }

// Chat Call Footer
// const chat_call_ft = `
//     <div class="regist_call">
//         <a class="btncallme ClickCall btndahl">
//             <img src="https://benhvienthammydonga.vn/css/images/icon-call.png" alt="call BVTM DA">
//         </a>
//     </div>
//     <style>
//         .regist_call{
//             display:none;
//             position:fixed;
//             left:10px;
//             bottom:10px;
//             background:#015552;
//             padding:8px 20px 5px;
//             border-radius:12px;
//             z-index: 10;
//         }
//         .regist_ft_1_0_0,.regft{
//             display:none!important;
//         }
//         @media (max-width:414px){
//             .regist_call{
//                 display:block;
//             }
//         }
//     </style>
// `;
// addBodyBottom(chat_call_ft);



let click_call = document.getElementsByClassName('ClickCall');
for (let item of click_call) {
    item.addEventListener('click', () => {
        gtag("event", "Touch", { event_category: "Mobile_FT_Call" });
        console.log('ok call');
    });
}

let btnkn1tv = document.getElementsByClassName('btnkn1tv');
for (let item of btnkn1tv) {
    item.addEventListener('click', () => {
        gtag("event", "Touch", { event_category: "Mobile_FT_DatHen" });
        console.log('ok dat hen');
    });
}

// Custom css ft
const custom_css_ft = `
<style>
    #FTMNG .ft_col3 table:nth-child(2) tr:nth-child(1){
        display: none;
    }
    .local:nth-child(4) p:nth-child(1){
        display:none!important;
    }
</style>
`;
addBodyBottom(custom_css_ft);


