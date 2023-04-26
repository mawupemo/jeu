function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] * [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function tourner(){
    roue.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";


    let AC = shuffle([1890, 2250, 2610]);
    let Portable = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Ip = shuffle([1750, 2110, 2470]);
    let Calculator = shuffle([1630, 1990, 2350]);
    let ROG = shuffle([1570, 1930, 2290]);


    let results = shuffle([
        AC[0],
        Portable[0],
        Zonk[0],
        PS[0],
        Ip[0],
        Calculator[0],
        ROG[0],
    ]);


    if(AC.includes(results[0])) SelectedItem = "OBOY";
    if(Portable.includes(results[0])) SelectedItem = "DENISE";
    if(Zonk.includes(results[0])) SelectedItem = "SHYN";
    if(PS.includes(results[0])) SelectedItem = "BIG MJ";
    if(Ip.includes(results[0])) SelectedItem = "DELVIS";
    if(Calculator.includes(results[0])) SelectedItem = "STEPHANIE";
    if(ROG.includes(results[0])) SelectedItem = "NATALY";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Arahabaina!!!!.....',
            html: 'Nahazo pass VIP ianao tamin ny fampisehoana ny ' + SelectedItem ,//+ '<a href="#"> Réessayer </a>',
            //imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }, 5500)

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        //box.style.transform = "rotate(200deg)";
    }, 6000);
}