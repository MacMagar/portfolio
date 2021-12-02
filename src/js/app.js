import $ from "jquery";
import SplitType from "split-type";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


$(function () {

    let pos = 0;
    $(window).on("scroll", function () {
        const elem = $(document);
        const nav = $(".dynamic-nav")
        
        if(elem.scrollTop() > pos) {
            nav.addClass("triggered")
            pos = elem.scrollTop();
        } else  {
            nav.removeClass("triggered");
            pos = elem.scrollTop();
        }
    })

    function animateMobileMenu() {
        const elem = $(".ham-logo");
        const target = $(".ham-menu")
        const elem1 = $(".ham-menu__close");
        
        elem.on("click", function () {
            target.addClass("expanded");
        })

        elem1.on("click", function () {
            target.removeClass("expanded");
        })
    }

    animateMobileMenu();

    const opts = {
        scrollTrigger: {
            start: 'top 65%',
            end: "top top",
            markers: false
        },
        y: 50,
        duration: .3,
        opacity: 0,
        stagger: .2,
        ease: "circ",

    } //basic option for gsap animation



    function animateHero(config) {
        const elem = $(".hero__text-heading, .hero__text-para, .cta-btn, .hero__img");       
        let mconfig = config;
        // initializing the animation

        gsap.from(elem, mconfig);
    }

    animateHero(opts);



    function animateFeatureHeading(config) {   
        const elem = $(".feature-text__heading");
        let mconfig = config;
        mconfig.scrollTrigger.trigger = elem;

        gsap.from(elem, mconfig);
    }

    animateFeatureHeading(opts);

    function animateFeaturePara(config) {

        const lines = new SplitType(".feature-text__para", {
            types: "lines"
        })
        
        const target = $(".feature-text__para");
        let mconfig = config;
        mconfig.scrollTrigger.start = "center 60%";
        mconfig.scrollTrigger.trigger = target;

        gsap.from(lines.lines, mconfig);

        $(window).on("resize", function () {
            lines.split({
                types: "lines",
                absolute: true
            })
        })

    }

    animateFeaturePara(opts);

    function animateFeatureImg(config) {
        const elem = $(".feature-img");
        let mconfig = config;
        mconfig.scrollTrigger.trigger = elem;
        mconfig.duration = 1.5;
        mconfig.ease = "expo";
        mconfig.stagger = 0.35;
        mconfig.y = 180;
        mconfig.scrollTrigger.start = "top 60%";

        gsap.from(elem, mconfig)
    }

    animateFeatureImg(opts);

    function animateCard1(config) {
        const elem = $(".card1");
        let mconfig = config;
        mconfig.scrollTrigger.trigger = elem;
        mconfig.ease = "elastic";
        mconfig.y = 140;

        gsap.from(elem, mconfig)
    }

    animateCard1(opts);

    function animateCard2(config) {
        const elem = $(".card2");
        let mconfig = config;
        mconfig.scrollTrigger.trigger = elem;
        mconfig.ease = "elastic";
        mconfig.y = 140;

        gsap.from(elem, mconfig)
    }

    animateCard2(opts);

    function animateCard3(config) {
        const elem = $(".card3");
        let mconfig = config;
        mconfig.scrollTrigger.trigger = elem;
        mconfig.ease = "elastic";
        mconfig.y = 115;

        gsap.from(elem, mconfig)
    }

    animateCard3(opts);

    $(".cta-btn").on("click", function () {
        const elem = $(this);
        if(elem.text() === "Contact Me") {
            elem.text("9808626598")
            elem.css({
                "border": "1.4px solid #f6f2f2",
                "background-color": "transparent"
            })
        } else {
            elem.text("Contact Me")
            elem.css({
                "background": "#26df09",
                "border": "none"
            })
        }
    })
})