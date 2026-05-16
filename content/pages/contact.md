Title: Contact Me
Date: 2025-08-11
Save_as: contact.html
URL: contact

<section class="ed-contact" aria-labelledby="contact-title">
  <p class="ed-contact__crumb">
    <span>Contact</span>
    <span>PixelPerception</span>
  </p>

  <div class="ed-contact__layout">
    <h1 id="contact-title">
      <span>Bring a</span>
      <span>perception</span>
      <span>problem.</span>
    </h1>
    <div class="ed-contact__hero-copy">
      <p>
        I help teams reason about computer vision systems — model behaviour, data quality, and the software that carries models from notebook to production.
      </p>
      <p>
        Use the form, or write directly to me. Most letters get a reply within two working days.
      </p>
    </div>
    <div class="ed-contact__rule" aria-hidden="true"></div>
    <form class="ed-form" action="https://api.staticforms.xyz/submit" method="post">
      <input type="hidden" name="accessKey" value="4aa5c1d4-54c4-481e-8b60-3cb1e00bb12f">

      <div class="ed-form__eyebrow">
        <span>The form · four short fields</span>
        <span>№ 01 / 04</span>
      </div>

      <div class="ed-field">
        <span class="ed-field__num">01</span>
        <label class="ed-field__label" for="ed-name">Full name</label>
        <input id="ed-name" name="name" type="text" placeholder="As you'd like to be addressed" required autocomplete="name">
        <span class="ed-field__status"></span>
        <span class="ed-field__error"></span>
      </div>

      <div class="ed-field">
        <span class="ed-field__num">02</span>
        <label class="ed-field__label" for="ed-email">Email address</label>
        <input id="ed-email" name="email" type="email" placeholder="where the reply should land" required autocomplete="email">
        <span class="ed-field__status"></span>
        <span class="ed-field__error"></span>
      </div>

      <div class="ed-field ed-field--filled">
        <span class="ed-field__num">03</span>
        <label class="ed-field__label">Subject <span class="opt">— optional, pick any</span></label>
        <div class="ed-topics" aria-label="Subject suggestions">
          <button type="button" class="ed-topic">Hiring</button>
          <button type="button" class="ed-topic">Speaking</button>
          <button type="button" class="ed-topic">Open source</button>
          <button type="button" class="ed-topic">Computer Vision</button>
          <button type="button" class="ed-topic">Multi camera multi object</button>
          <button type="button" class="ed-topic">Just saying hi</button>
        </div>
        <span class="ed-field__status"></span>
      </div>

      <div class="ed-field">
        <span class="ed-field__num">04</span>
        <label class="ed-field__label" for="ed-msg">Your thoughts</label>
        <textarea id="ed-msg" name="message" rows="6" placeholder="Tell me your perception problem, hiring opportunity, speaking pitch, or vision idea. Links welcome." required></textarea>
        <span class="ed-field__status"></span>
        <span class="ed-field__error"></span>
      </div>

      <div class="ed-submit-row">
        <span class="ed-submit-row__glyph" aria-hidden="true">↳</span>
        <p class="ed-consent">
          By sending this form you let me reply to the address above. No newsletter, no tracking — read the <a href="#">privacy note</a> if you'd like the boring details.
        </p>
        <button class="ed-send" type="submit">
          <span>Send</span>
          <span>the letter</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <input type="hidden" name="replyTo" value="@">
      <input type="hidden" name="redirectTo" value="https://saurabheights.github.io/contact.html">
    </form>

    <aside class="ed-side" aria-label="Direct contact">
      <div class="ed-direct">
        <span>Direct</span>
        <a href="mailto:khandujasaurabh@gmail.com" aria-label="Email Saurabh at khandujasaurabh@gmail.com">
          <span>khanduja</span>
          <span class="ed-direct__accent">saurabh</span>
          <span>@gmail.com</span>
        </a>
        <button type="button" aria-label="Copy email address">&#x29C9; Copy</button>
      </div>
    </aside>
  </div>  <!-- /.ed-contact__layout -->

  <p class="ed-contact__sign">
    <span>Berlin · 2026-05-14</span>
    <span>— Saurabh</span>
  </p>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Copy button functionality
  const copyButton = document.querySelector('[aria-label="Copy email address"]');
  if (copyButton) {
    copyButton.addEventListener('click', function() {
      const emailLink = document.querySelector('.ed-direct a');
      if (emailLink) {
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(function() {
          copyButton.textContent = '✓ Copied';
          setTimeout(function() {
            copyButton.innerHTML = '&#x29C9; Copy';
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy email:', err);
        });
      }
    });
  }

  // Form field tracking and progress indicator
  const nameField = document.getElementById('ed-name');
  const emailField = document.getElementById('ed-email');
  const msgField = document.getElementById('ed-msg');
  const topicsButtons = document.querySelectorAll('.ed-topics .ed-topic');
  const counter = document.querySelector('.ed-form__eyebrow span:last-child');
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function updateProgress() {
    let filledCount = 0;
    
    // Check name field
    if (nameField.value.trim()) {
      nameField.parentElement.querySelector('.ed-field__status').classList.add('is-filled');
      filledCount++;
    } else {
      nameField.parentElement.querySelector('.ed-field__status').classList.remove('is-filled');
    }
    
    // Check email field (validate email format)
    if (isValidEmail(emailField.value.trim())) {
      emailField.parentElement.querySelector('.ed-field__status').classList.add('is-filled');
      filledCount++;
    } else {
      emailField.parentElement.querySelector('.ed-field__status').classList.remove('is-filled');
    }
    
    // Check subject selection
    const selectedTopic = document.querySelector('.ed-topics .ed-topic.is-on');
    const subjectContainer = document.querySelector('.ed-field.ed-field--filled');
    if (selectedTopic) {
      subjectContainer.querySelector('.ed-field__status').classList.add('is-filled');
      filledCount++;
    } else {
      subjectContainer.querySelector('.ed-field__status').classList.remove('is-filled');
    }
    
    // Check message field
    if (msgField.value.trim()) {
      msgField.parentElement.querySelector('.ed-field__status').classList.add('is-filled');
      filledCount++;
    } else {
      msgField.parentElement.querySelector('.ed-field__status').classList.remove('is-filled');
    }
    
    // Update counter
    counter.textContent = '№ ' + String(filledCount).padStart(2, '0') + ' / 04';
  }
  
  // Add listeners to input fields
  nameField.addEventListener('input', updateProgress);
  emailField.addEventListener('input', updateProgress);
  msgField.addEventListener('input', updateProgress);
  
  // Handle subject button clicks
  topicsButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      topicsButtons.forEach(btn => btn.classList.remove('is-on'));
      this.classList.add('is-on');
      updateProgress();
    });
  });
  
  // Initial progress update
  updateProgress();
  
  // Custom validation messages
  const form = document.querySelector('.ed-form');
  const fields = [nameField, emailField, msgField];
  
  function showValidationError(field, message) {
    const errorSpan = field.parentElement.querySelector('.ed-field__error');
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add('is-visible');
    }
  }
  
  function hideValidationError(field) {
    const errorSpan = field.parentElement.querySelector('.ed-field__error');
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.classList.remove('is-visible');
    }
  }
  
  fields.forEach(field => {
    field.addEventListener('invalid', function(e) {
      e.preventDefault();
      let message = 'Please fill out this field';
      if (field.id === 'ed-email') {
        if (!field.value.trim()) {
          message = 'Please fill out this field';
        } else {
          message = 'Please enter a valid email address';
        }
      }
      showValidationError(field, message);
    });
    
    field.addEventListener('input', function() {
      // Clear error on input
      hideValidationError(field);
      updateProgress();
    });
    
    // For email field, validate on blur (when user leaves the field)
    if (field.id === 'ed-email') {
      field.addEventListener('blur', function() {
        if (field.value.trim() && !isValidEmail(field.value.trim())) {
          showValidationError(field, 'Please enter a valid email address');
        }
      });
    }
  });
});
</script>

<style>
.ed-field__error {
  display: none;
  grid-column: 1 / -1;
  font-style: italic;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  margin-top: 0.35rem;
  background-color: var(--ed-accent);
  color: white;
  border-radius: 0.25rem;
  font-family: "Newsreader", Georgia, serif;
  animation: slideIn 0.2s ease-out;
}

.ed-field__error.is-visible {
  display: block;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
