let productImg = document.getElementById("productImg");
let btns = document.getElementsByClassName("btn");

    btns[0].onclick = function(){
        productImg.src = "Assets/img.jpg";
        setActiveButton(btns[0]);
    }
     console.log(productImg);

    btns[1].onclick = function(){
        productImg.src = "Assets/img1.jpg";
        setActiveButton(btns[1]);
        console.log('2');
    }

    btns[2].onclick = function(){
        productImg.src = "Assets/img2.jpg";
        setActiveButton(btns[2]);
    }

    btns[3].onclick = function(){
        productImg.src = "Assets/img3.jpg";
        setActiveButton(btns[3]);
    }

    function setActiveButton(activeBtn) {
        for (let btn of btns) {
            btn.classList.remove('active');
        }
        activeBtn.classList.add('active');
    }