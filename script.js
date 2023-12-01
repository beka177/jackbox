function fun1() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttl=document.getElementById('ttl');
    var ttr=document.getElementById('ttr');
    var tbr=document.getElementById('tbr');
    var tbl=document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px ' +rbl+'px ';
}
body{margin: 0;}
.page1{
    background-image: url(WhatsApp\ Image\ 2023-11-20\ at\ 08.28.54.jpeg) ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: rgb(26, 26, 26);
    display: flex;
    justify-content: center ;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.menu {
    color: white;
    font-family:Arial black;
    text-align: center;
    margin-top: 15%;
    margin-bottom: 5%;
    background-color: rgba(60, 193, 255, 0.354);
    padding-left: 20%;
    padding-right: 18% ;
    
}



.pizza {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 1600px;
    width: 1300px;
    justify-content: center;
}

img{
    border-radius:15% ;
    padding-top: 2%;
}
.o{
    
    margin-top: 10px;
    border-image: 10% ;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-right: 10px   ;
    flex-direction: column;
    display: flex;
    justify-content: center;
    background-color: #fff;
    height: 500px;
    width: 400px;
    border-radius: 10%;
    border-width: 0px;
}
h4{
    color: rgba(0, 0, 0, 0.2);
}

h3{
    color: rgba(251, 0, 0, 0.2);
}

h1{
    color: #fff;
}

p{
    color: rgb(255, 0, 0);
    font-size: 5vh ;
}


.words{
    height: 50vh;
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.zac{

    text-align: left;
}

.hero{

    text-align: left;
}

.page2{
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    background-image: url(3.jpeg);
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}

.s{
    background-color: #fff;
    width: 300px;
    height: 300px;
    text-align: center;
    border-radius:20% ;
}

.a{
    margin-left: 1%;
    margin-right    : 1%;
}