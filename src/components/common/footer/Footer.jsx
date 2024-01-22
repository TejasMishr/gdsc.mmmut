import './Footer.css'
export default function Footer() {
    return <footer>
        <div className="wrapper">
            
            <div id='footerLogo'>
                <img src="/Logo.svg" alt="logo" />
            </div>
            <div className='footerLinks'>
                <p>Quick Links</p>
                <ul>
                    <a href='/chapters'><li><i class="fa-solid fa-chevron-right"></i>Chapters</li></a>
                    <a href='/events'><li><i class="fa-solid fa-chevron-right"></i>Upcoming Events</li></a>
                    <a href='/about'><li><i class="fa-solid fa-chevron-right"></i>About GDSC</li></a>
                    <a href='/leads'><li><i class="fa-solid fa-chevron-right"></i>Leads</li></a>
                    <a href='/privacy'><li><i class="fa-solid fa-chevron-right"></i>Privacy</li></a>
                </ul>
            </div>
            <div className='socials'>
                <p>Follow us on</p>
                <div className='socialIconsContainer'>
                    <a href="/">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
               
            </div>
            
        </div>
        
        <div className="footerLine">
          
        </div>
        <div className='copy'>
            <span>&copy; 2023 GDSC MMMUT</span>
        </div>
    </footer>
}