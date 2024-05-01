//document.getElementById("count")
var h1 = document.getElementById("count");
h1.style.textAlign = "center";
h1.style.marginTop = "300px";
document.body.style.backgroundImage = "url(coupon.jpg)";
h1.style.fontSize = "80px"
h1.style.color = "white"
h1.style.backgroundSize = "100% auto"
document.body.append(h1);

let timer = setTimeout(() => {
    h1.innerText = 10;
    let timer = setTimeout(() => {
        h1.innerText = 9;
        let timer = setTimeout(() => {
            h1.innerText = 8;
            let timer = setTimeout(() => {
                h1.innerText = 7;
                let timer = setTimeout(() => {
                    h1.innerText = 6;
                    let timer = setTimeout(() => {
                        h1.innerText = 5;
                        let timer = setTimeout(() => {
                            h1.innerText = 4;
                            let timer = setTimeout(() => {
                                h1.innerText = 3;
                                let timer = setTimeout(() => {
                                    h1.innerText = 2;
                                    let timer = setTimeout(() => {
                                        h1.innerText = 1;
                                        let timer = setTimeout(() => {
                                            h1.innerText = "Happy Independence Day";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)