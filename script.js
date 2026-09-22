// ==========================================================
// Sumit Kumar - Modern Dynamic Portfolio Client Script
// Dynamic Tab Switching • Zero-DB Form Dispatch • Project Filter
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Tab / Panel Switcher
  const allTabTriggers = document.querySelectorAll('[data-tab]');
  const allPanels = document.querySelectorAll('.tab-panel');
  const navTabs = document.querySelectorAll('.nav-tab');
  const pillBtns = document.querySelectorAll('.pill-btn');
  const navPills = document.querySelectorAll('.nav-pill');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  function switchTab(targetTabId) {
    if (!targetTabId) return;

    // Check if target panel exists
    const targetPanel = document.getElementById(`tab-${targetTabId}`);
    if (!targetPanel) return;

    // Deactivate all panels
    allPanels.forEach((panel) => {
      panel.classList.remove('active');
    });

    // Activate target panel with animation
    targetPanel.classList.add('active');

    // Update nav pills (floating pill dock)
    navPills.forEach((btn) => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update nav buttons
    navTabs.forEach((btn) => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update pill dock buttons
    pillBtns.forEach((btn) => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }

    // Smooth scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Update URL hash without jumping
    if (history.pushState) {
      history.pushState(null, null, `#${targetTabId}`);
    } else {
      location.hash = `#${targetTabId}`;
    }
  }

  // Attach click listeners to all tab buttons and links
  allTabTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const tabName = trigger.getAttribute('data-tab');
      if (tabName) {
        e.preventDefault();
        switchTab(tabName);
      }
    });
  });

  // Handle URL hash on initial load (e.g. #projects or #experience)
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`tab-${initialHash}`)) {
    switchTab(initialHash);
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (document.getElementById(`tab-${hash}`)) {
      switchTab(hash);
    }
  });

  // 2. Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // 3. Typewriter Animation (Software Engineer & Data Science Roles)
  const typewriterElement = document.getElementById('typewriter');
  const roles = [
    'Software Engineer & Data Science',
    'B.Tech Computer Engineering (CE)',
    'AICTE & IBM SkillsBuild Intern',
    'Full-Stack Web Developer',
    'Data Science & Analytics',
    'LeetCode Problem Solver'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }

  // 4. Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. One-Click Copy Email Feature
  const copyBtn = document.getElementById('copy-email-btn');
  const emailValue = document.getElementById('email-value');
  const copyStatus = document.getElementById('copy-status');

  if (copyBtn && emailValue && copyStatus) {
    copyBtn.addEventListener('click', async () => {
      const email = emailValue.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = 'Copied!';
        copyBtn.style.color = '#34d399';
        copyBtn.style.borderColor = '#34d399';

        setTimeout(() => {
          copyStatus.textContent = 'Copy';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyStatus.textContent = 'Copied!';
        setTimeout(() => {
          copyStatus.textContent = 'Copy';
        }, 2200);
      }
    });
  }

  // 7. Direct Contact Form (Zero Database • Dispatches to sumitkeshri.1237373@gmail.com)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  // Reset form handler
  if (resetFormBtn && contactForm) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status-box';
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      btnText.style.display = 'none';
      btnSpinner.style.display = 'inline-block';
      submitBtn.disabled = true;
      formStatus.style.display = 'none';
      formStatus.className = 'form-status-box';

      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        _subject: document.getElementById('subject').value.trim() || 'New Portfolio Contact',
        message: document.getElementById('message').value.trim(),
        _captcha: 'false',
        _template: 'table'
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/sumitkeshri.1237373@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        // Check if FormSubmit actually accepted and dispatched
        if (data.success === 'true' || data.success === true) {
          formStatus.className = 'form-status-box success';
          formStatus.innerHTML = `
            <div class="status-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="status-title">Message Sent Successfully!</div>
            <p>Thank you, <strong>${formData.name}</strong>. Your message has reached Sumit's personal inbox (<code>sumitkeshri.1237373@gmail.com</code>). I will reply to you soon.</p>
            <div class="status-action">
              <button type="button" class="btn btn-sm btn-secondary" id="send-another-btn">
                <i class="fa-solid fa-rotate-left"></i> Send Another Message
              </button>
            </div>
          `;
          formStatus.style.display = 'block';
          contactForm.reset();

          const sendAnotherBtn = document.getElementById('send-another-btn');
          if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
              formStatus.style.display = 'none';
              document.getElementById('name').focus();
            });
          }
        } else if (data.message && data.message.toLowerCase().includes('activation')) {
          // FormSubmit 1-time activation requirement
          formStatus.className = 'form-status-box warning';
          formStatus.innerHTML = `
            <div class="status-icon"><i class="fa-solid fa-envelope-open-text"></i></div>
            <div class="status-title">1-Time Email Activation Required</div>
            <p style="margin-bottom: 0.5rem;">FormSubmit has sent an <strong>'Activate Form'</strong> verification link to <strong>sumitkeshri.1237373@gmail.com</strong>.</p>
            <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 0.75rem;">
              👉 Please check your Gmail (Inbox or Spam) and click <em>'Activate Form'</em>. Once activated, every message from this website will deliver instantly!
            </p>
            <div class="status-action">
              <a href="https://mail.google.com" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
                <i class="fa-solid fa-envelope-open"></i> Open Gmail to Activate
              </a>
              <button type="button" class="btn btn-sm btn-secondary" id="send-another-btn">
                <i class="fa-solid fa-rotate-left"></i> Reset Form
              </button>
            </div>
          `;
          formStatus.style.display = 'block';

          const sendAnotherBtn = document.getElementById('send-another-btn');
          if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
              formStatus.style.display = 'none';
              contactForm.reset();
            });
          }
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (error) {
        formStatus.className = 'form-status-box error';
        formStatus.innerHTML = `
          <div class="status-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div class="status-title">Direct Dispatch Notice</div>
          <p style="margin-bottom: 0.5rem;">Network submission had an issue or is waiting for email activation.</p>
          <div class="status-action">
            <a href="mailto:sumitkeshri.1237373@gmail.com?subject=${encodeURIComponent(formData._subject)}&body=${encodeURIComponent('Hi Sumit,\n\n' + formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}" class="btn btn-sm btn-primary">
              <i class="fa-solid fa-envelope"></i> Send Directly via Gmail / Mail App
            </a>
            <button type="button" class="btn btn-sm btn-secondary" id="send-another-btn">
              <i class="fa-solid fa-rotate-left"></i> Reset Form
            </button>
          </div>
        `;
        formStatus.style.display = 'block';

        const sendAnotherBtn = document.getElementById('send-another-btn');
        if (sendAnotherBtn) {
          sendAnotherBtn.addEventListener('click', () => {
            formStatus.style.display = 'none';
            contactForm.reset();
          });
        }
      } finally {
        btnText.style.display = 'inline-block';
        btnSpinner.style.display = 'none';
        submitBtn.disabled = false;
      }
    });
  }

  // 8. Auto-update Current Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 9. Live Clock in Footer (Rajkot, India IST)
  function updateLiveTime() {
    const liveTimeEl = document.getElementById('live-time');
    if (!liveTimeEl) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      liveTimeEl.textContent = now.toLocaleTimeString('en-US', options);
    } catch (e) {
      const now = new Date();
      liveTimeEl.textContent = now.toLocaleTimeString();
    }
  }
  updateLiveTime();
  setInterval(updateLiveTime, 1000);

  // 10. Footer Copy Email Button
  const footerCopyBtn = document.getElementById('footer-copy-btn');
  const footerCopyText = document.getElementById('footer-copy-text');
  if (footerCopyBtn) {
    footerCopyBtn.addEventListener('click', async () => {
      const email = 'sumitkeshri.1237373@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      if (footerCopyText) {
        footerCopyText.textContent = 'Copied!';
        footerCopyBtn.style.color = '#34d399';
        footerCopyBtn.style.borderColor = '#34d399';
        setTimeout(() => {
          footerCopyText.textContent = 'Copy Email';
          footerCopyBtn.style.color = '';
          footerCopyBtn.style.borderColor = '';
        }, 2200);
      }
    });
  }
});
