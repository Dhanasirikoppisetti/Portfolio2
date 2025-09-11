// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});
document.querySelectorAll(".cert-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-cert");
    document.getElementById("certImage").src = imgSrc;
    document.getElementById("certModal").style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("certModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.id === "certModal") {
    document.getElementById("certModal").style.display = "none";
  }
});


 const form = document.getElementById('contactForm');
        const statusEl = document.getElementById('status');

        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            const data = new FormData(form);
            
            // Show loading state and make status visible
            statusEl.innerHTML = 'Sending...';
            statusEl.className = ''; // Reset classes
            statusEl.style.display = 'block';

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusEl.innerHTML = "Thanks for your message! I'll get back to you soon.";
                    statusEl.classList.add('success');
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.hasOwn(responseData, 'errors')) {
                        statusEl.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        statusEl.innerHTML = "Oops! There was a problem submitting your form.";
                    }
                    statusEl.classList.add('error');
                }
            } catch (error) {
                // This handles network errors
                statusEl.innerHTML = "Oops! There was a problem submitting your form.";
                statusEl.classList.add('error');
            }
        });

        const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Close sidebar when clicking on overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('open');
});
