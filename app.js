let GuestName = prompt("Lütfen Adınızı Giriniz!");

let mesaj = document.querySelector(".card-text");
let footer= document.querySelector(".card-footer");



    var zaman = new Date();


    var yil = zaman.getFullYear();
    var ay = zaman.getMonth();
    var gun = zaman.getDate();
    var saat = zaman.getHours();
    var dakika = zaman.getMinutes();
    var saniye = zaman.getSeconds();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    



mesaj.innerHTML = `Merhaba <strong>${GuestName}</strong> Saat : ${saat +":"+ dakika +":"+ saniye} `

footer.innerHTML = `${gun +" "+ aylar[zaman.getMonth()] +" "+ gunler[zaman.getDay()] +" "+yil} `

