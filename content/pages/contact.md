Title: Contact Me
Date: 2025-08-11
Save_as: contact.html
URL: contact

<section class="hero work-hero" aria-labelledby="contact-hero-title">
  <div class="hero__inner">
    <div class="contact-content">
      <div class="contact-left">
        <h1 id="contact-hero-title" class="hero__title">Contact Me</h1>
        <p class="hero__subtitle">Drawing from a decade in Computer Vision and Software Engineering, I craft holistic strategies to elevate your business through tech innovation.</p> 
        <p class="hero__subtitle">Reach out to me using the form or mail me at <a href="mailto:khandujasaurabh@gmail.com" style="text-decoration: underline;">khandujasaurabh@gmail.com</a>.</p>
      </div>

      <form action="https://api.staticforms.xyz/submit" method="post" class="contact-form">
        <input type="hidden" name="accessKey" value="4aa5c1d4-54c4-481e-8b60-3cb1e00bb12f">  
        <div>
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Your Name" required autocomplete="name" />
        </div>
        <div>
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
        </div>
        <div>
          <label for="message">Your thoughts</label>
          <textarea id="message" name="message" rows="3" placeholder="Share your thoughts here..." required></textarea>
        </div>
        <input type="hidden" name="replyTo" value="@">
        <input type="hidden" name="redirectTo" value="https://saurabheights.github.io/contact.html">
        <button type="submit" class="submit-btn"><i class="fa-solid fa-paper-plane"></i> Send</button>
      </form>
    </div>
  </div>
</section>
