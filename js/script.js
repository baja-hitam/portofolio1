var btt = document.querySelector("button");

btt.addEventListener("click", () =>{
    fetchFile("https://th.bing.com/th/id/R.601314c4ee5017f94494bb7f41ea232a?rik=KJYsAYuPLDSiXg&riu=http%3a%2f%2fbetanews.com%2fwp-content%2fuploads%2f2015%2f09%2fPDF.jpg&ehk=TANUm2HOCnVjgkxWD3%2b%2bbGCz4Z1mEEzmxNAAthEp0pQ%3d&risl=&pid=ImgRaw&r=0");
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        console.log(file);
    })
}