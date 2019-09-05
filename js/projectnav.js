// JavaScript for in-project navigation

// Sets the top and bottom offsets for scrolling

//Get window height
var winY = window.innerHeight;
inView.offset({
    top: winY/1.6,
    bottom: winY/2.5
});

// Page 1
inView('.page-1')
    .on('enter', el => {
        document.getElementById("proj-nav-1").id = "proj-nav-1-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-1-active").id = "proj-nav-1";

    });

// Page 2
inView('.page-2')
    .on('enter', el => {
        document.getElementById("proj-nav-2").id = "proj-nav-2-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-2-active").id = "proj-nav-2";
    });

// Page 3
inView('.page-3')
    .on('enter', el => {
        document.getElementById("proj-nav-3").id = "proj-nav-3-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-3-active").id = "proj-nav-3";
    });


// Page 4
inView('.page-4')
    .on('enter', el => {
        document.getElementById("proj-nav-4").id = "proj-nav-4-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-4-active").id = "proj-nav-4";
    });


// Page 5
inView('.page-5')
    .on('enter', el => {
        document.getElementById("proj-nav-5").id = "proj-nav-5-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-5-active").id = "proj-nav-5";
    });

// Page 6
inView('.page-6')
    .on('enter', el => {
        document.getElementById("proj-nav-6").id = "proj-nav-6-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-6-active").id = "proj-nav-6";
    });

// Page 7
inView('.page-7')
    .on('enter', el => {
        document.getElementById("proj-nav-7").id = "proj-nav-7-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-7-active").id = "proj-nav-7";
    });


// Page 8
inView('.page-8')
    .on('enter', el => {
        document.getElementById("proj-nav-8").id = "proj-nav-8-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-8-active").id = "proj-nav-8";
    });


// Page 9
inView('.page-9')
    .on('enter', el => {
        document.getElementById("proj-nav-9").id = "proj-nav-9-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-9-active").id = "proj-nav-9";
    });

// Page 10
inView('.page-10')
    .on('enter', el => {
        document.getElementById("proj-nav-10").id = "proj-nav-10-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-10-active").id = "proj-nav-10";
    });

// Page 11
inView('.page-11')
    .on('enter', el => {
        document.getElementById("proj-nav-11").id = "proj-nav-11-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-11-active").id = "proj-nav-11";
    });

// Page 12
inView('.page-12')
    .on('enter', el => {
        document.getElementById("proj-nav-12").id = "proj-nav-12-active";
    })
    .on('exit', el => {
        document.getElementById("proj-nav-12-active").id = "proj-nav-12";
    });

