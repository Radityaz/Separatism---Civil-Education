let title = [
    "ACEH","PAPUA","TIMOR LESTE"
];

let subtitle = [
    "GERAKAN ACEH MERDEKA","ORGANISASI PAPUA MERDEKA","PEMBERONTAKAN TIMOR LESTE"
];

let content = [
    "Gerakan Aceh Merdeka, atau GAM adalah bekas sebuah gerakan separatisme bersenjata yang memiliki tujuan supaya Aceh lepas dari Indonesia. Konflik antara pemerintah RI dan GAM yang diakibatkan perbedaan keinginan ini telah berlangsung sejak tahun 1976-2005 dan menyebabkan jatuhnya hampir sekitar 15.000 jiwa.",
    "Organisasi Papua Merdeka merupakan organisasi yang didirikan pada tahun 1965 untuk mengakhiri pemerintahan provinsi Papua dan Papua Barat yang saat ini di Indonesia, yang sebelumnya dikenal sebagai Irian Jaya dan untuk memisahkan diri dari Indonesia. Gerakan ini dilarang di Indonesia, dan memicu untuk terjadinya kemerdekaan bagi provinsi tersebut yang berakibat tuduhan pengkhianatan.  Sejak awal, OPM telah menempuh jalur dialog diplomatik, melakukan upacara pengibaran bendera Bintang Kejora, dan dilakukan aksi militan sebagai bagian dari konflik Papua. Pendukung secara rutin menampilkan bendera Bintang Kejora dan simbol lain dari kesatuan Papua, seperti lagu kebangsaan 'Hai Tanahku Papua' dan lambang negara, yang telah diadopsi pada periode 1961 sampai pemerintahan Indonesia dimulai pada Mei 1963 di bawah Perjanjian New York.",
    "Banyak sekali pemberontakan-pemberontakan yang terjadi antara penduduk Timor Timur dengan penduduk daerah lain yang juga berada dibawah kekuasaan Indonesia. Pemberontakan tersebut membuat penduduk yang tinggal di daerah Timor Timur merasa bahwa mereka harus segera melepaskan diri dari Indonesia. Pertumpahan darah semakin membeludak, ratusan penduduk menjadi korban akibat pemberontakan tersebut. Kerugian fisik, finansial, bahkan jiwa pun sudah sangat melampaui batas kewajaran. Akhirnya Timor Timur dan negara Indonesia sepakat untuk mengadakan referendum. Pada tanggal 30 Agustus 1999 hasil referendum pun keluar, hampir sebanyak 80% penduduk Timor Timur memilih untuk melepaskan diri dari Indonesia. PBB juga telah mendukung adanya referendum tersebut yang berarti segala pemberontakan dan pertumpah darahan antara Timor Timur dan negara Indonesia telah usai. Kemudian setelah melepaskan diri dan memproklamasikan kemerdekaannya, Timor Timur merubah namanya menjadi negara Timor Leste. Itulah sedikit uraian mengenai salah satu contoh gerakan separatisme yang pernah kita temui di sepanjang sejarah Indonesia."
];

let image = [
    "assets/aceh.png",
    "assets/papua.png",
    "assets/timorleste.png",
]

let index = 0;
refresh()

function indexup() {
    if (index > 1) {
        index = -1;
    }
    index++;
    refresh()
    
}

function indexdown() {
    if (index < 1) {
        index = 3;
    }
    index--;
    refresh()
    
}


function refresh() {
    document.getElementById('title').textContent = title[index]
    document.getElementById('subtitle').textContent = subtitle[index]
    document.getElementById('p').textContent = content[index]
    document.getElementById('display').style.background = "url(" + image[index] + ")"
    document.getElementById('display').style.backgroundPosition = "center"
    document.getElementById('display').style.backgroundSize = "contain"
    document.getElementById('display').style.backgroundRepeat = "no-repeat"
    console.log(index)
}