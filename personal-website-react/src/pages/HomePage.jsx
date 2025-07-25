function HomePage() {
  return (
    <div>
        <header>
            <div class="header-content">
                <h1>Kevin Coalwell</h1>
                <h2>Designer</h2>
            </div>
            <nav>
                <p class="nav-item">Case Studies</p>
                <p class="nav-item">About</p>
                <p class="nav-item">Contact</p>
            </nav>
        </header>
        <main>
            <div id="main-content-wrapper">
                <div class="contact-info-container">
                    <p id="about-me-blurb">
                        Versatile designer specializing in translating complex technical concepts into compelling visual
                        experiences through strategic brand design and content creation, with proven experience engaging
                        large-scale digital audiences. A unique blend of hands-on technical ability and attentive design
                        sensibilities enable me to bridge the gap between engineering teams and broader markets.
                    </p>
                    <p>503.862.9695</p>
                    <p>My Linkedin</p>
                    <p>My Email</p>
                </div>

                <div id="main-content-container">
                    <p>This is where the main content will go.</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default HomePage;