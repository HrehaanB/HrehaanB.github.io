/* ------------------------------
   BOOMBOT WEBSITE JS
--------------------------------*/

// Animate sections when they scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Copy + Mailto buttons
const copyBtn = document.getElementById('copy');
const msg = document.getElementById('message');
const emailLink = document.getElementById('mailto');
const toField = document.getElementById('teacher-email');

// Copy the email text
copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(msg.value);
    copyBtn.textContent = 'Copied! ✅';
    setTimeout(() => copyBtn.textContent = 'Copy Message', 1500);
  } catch (err) {
    copyBtn.textContent = 'Press Ctrl/Cmd+C';
  }
});

// Open default mail app
emailLink?.addEventListener('click', (e) => {
  e.preventDefault();
  const to = encodeURIComponent(toField.value || '');
  const subject = encodeURIComponent('BoomBot — Music × Robotics demo session');
  const body = encodeURIComponent(msg.value);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
