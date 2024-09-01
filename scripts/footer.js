var html = `
        <div>
            <div class="col">
                    <h1>OTC</h1>
                    <p>
                        We are expert im self growth, Counselling and we provide
                        solutions to help you grow in tech. Trust us to guide you toward a
                        brighter future.</p>
                <div class="contact">
                    <a href="" ><i>d</i> instagram</a>
                    <a href="https://twitter.com/OOU_Tech" ><i>t</i> twitter</a>
                    <a href="https://www.linkedin.com/company/oou-tech-community/?viewAsMember=true"><i>in</i> linkedin</a>
                </div>

            </div>
            <div class="col">
                <h2>Our Services</h2>
                <p>
                    Software Development
                </p>
                <p>
                    Data Science & Analysis
                </p>
                <p>
                    Embedded Systems
                </p>
                <p>
                    Cyber Security
                </p>
            </div>
            <div class="col">
                <h2>Explore More</h2>
                <p><a href="#" title="App">
                    About us</a></p>
                    <p></a href="#" title="App">
                        <p><a href="#" title="Developer">
                    Blog
                </a></p>
                <p><a href="zikr.html" href="#" title="Islamic Blog">
                    Site map
                </a></p>
                <p><a href="#" title="Integration">
                    Privacy
                </a></p>
            </div>
            <div class="col">
                <h2>Contact Details</h2>
                <p><a href="mailto:afolabimubarak18@gmail.com">afolabimubarak18@gmail.com</a></p>
            </p><a href="tel:+2348106244890">+234 810 624 4890</a></p>
            </div>
        </div>
        </div>
        <div class="foot-note">
            <small>AFO-WEBDEV 2023 © All rights reserved</small>
            <small>Terms & Conditions</small>
            <small>Privacy Policy</small>
        </div>`


window.addEventListener("load", function() {
    var main=document.querySelector("main"),
        body =document.body || document.documentElement,
        footer=document.querySelector("footer");
        footer.innerHTML=html;

})