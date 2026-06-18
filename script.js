//JS script to make the "Book Now!" button on the about page sparkle after you click it
const button = document.querySelector('.store-btn');

if (button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // This will create a burst of 15 sparkles per click
    const particleCount = 15;
    const redirectUrl = button.href || 'contact.html';

    for (let i = 0; i < particleCount; i++) {
      createSparkle(e.clientX, e.clientY);
    }

    button.classList.add('store-btn--clicked');
    button.style.pointerEvents = 'none';

    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 850);
  });
}

function createSparkle(clickX, clickY) {
  const particle = document.createElement('span');
  particle.classList.add('sparkle-particle');

  // This will get the button bounding box to compute local relative coordinates
  const rect = button.getBoundingClientRect();
  const localX = clickX - rect.left;
  const localY = clickY - rect.top;

  // This will set the particle size randomly between 4px and 10px
  const size = Math.random() * 6 + 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // This will start the particle precisely where the cursor clicked
  particle.style.left = `${localX}px`;
  particle.style.top = `${localY}px`;

  // This will generate a randomized scattering distance and direction angles
  const destinationX = (Math.random() - 0.5) * 150; // Fly left or right up to 75px
  const destinationY = (Math.random() - 0.5) * 150; // Fly up or down up to 75px

  // This passes coordinates safely into the CSS variables
  particle.style.setProperty('--x', `${destinationX}px`);
  particle.style.setProperty('--y', `${destinationY}px`);

  // Append the sparkle to the button
  button.appendChild(particle);

  // This will clean up the DOM element after the 800ms animation ends to avoid memory leaks
  setTimeout(() => {
    particle.remove();
  }, 800);
}
