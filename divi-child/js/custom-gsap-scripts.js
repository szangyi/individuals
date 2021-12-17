
if (window.location.href.indexOf("services") > -1) {
    // console.log("services page")


    document.getElementsByClassName("services-section")[0].setAttribute("data-color", "#22354A")
    document.getElementsByClassName("services-section")[1].setAttribute("data-color", "#22354A")
    document.getElementsByClassName("services-section")[2].setAttribute("data-color", "white")


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".services-section").forEach(function (elem) {
        // console.log("whatsup");

        var color = elem.getAttribute('data-color');

        ScrollTrigger.create({
            trigger: elem,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => gsap.to('#main-content', { backgroundColor: color }),
            onLeave: () => gsap.to('#main-content', { backgroundColor: 'white' }),
            onLeaveBack: () => gsap.to('#main-content', { backgroundColor: 'white' }),
            onEnterBack: () => gsap.to('#main-content', { backgroundColor: color }),
            // markers: true
        });

    });

}


else if (window.location.href.indexOf("insights") > -1) {
    // console.log("insights")
}

else {
    // console.log("homepage")


    document.getElementsByClassName("homepage-section")[0].setAttribute("data-color", "#white")
    document.getElementsByClassName("homepage-section")[1].setAttribute("data-color", "#white")
    document.getElementsByClassName("homepage-section")[2].setAttribute("data-color", "#white")
    document.getElementsByClassName("homepage-section")[3].setAttribute("data-color", "#white")
    document.getElementsByClassName("homepage-section")[4].setAttribute("data-color", "#white")

    document.getElementsByClassName("homepage-section")[5].setAttribute("data-color", "#22354A")


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".homepage-section").forEach(function (elem) {
        // console.log("whatsuppppppp");

        var color = elem.getAttribute('data-color');

        ScrollTrigger.create({
            trigger: elem,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => gsap.to('#main-content', { backgroundColor: color }),
            onLeave: () => gsap.to('#main-content', { backgroundColor: 'white' }),
            onLeaveBack: () => gsap.to('#main-content', { backgroundColor: 'white' }),
            onEnterBack: () => gsap.to('#main-content', { backgroundColor: color }),
            // markers: true
        });

    });

}




