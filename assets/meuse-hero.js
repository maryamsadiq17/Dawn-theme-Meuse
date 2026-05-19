/**
 * meuse-hero.js
 * Replaces Dawn's single-line heading with the
 * 3-line Meuse Figma heading:
 *   Visit our        ← serif light
 *   amazon           ← bold + orange arrow
 *   Store            ← serif light
 *
 * Place in: assets/meuse-hero.js
 * Link in layout/theme.liquid before </body>:
 * {{ 'meuse-hero.js' | asset_url | script_tag }}
 */

(function () {
  function buildMeuseHeading() {
    const banner = document.querySelector('.banner');
    if (!banner) return;

    const originalHeading = banner.querySelector('.banner__heading');
    if (!originalHeading) return;

    // Build the new heading element
    const wrapper = document.createElement('div');
    wrapper.className = 'meuse-hero-heading';

    wrapper.innerHTML = `
      <span class="line-top">Visit our</span>

      <div class="line-amazon-wrap">
        <span class="line-amazon-word">amazon</span>
        <svg
          class="line-amazon-arrow"
          viewBox="0 0 140 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 12 Q70 26 134 12"
            stroke="#FF9900"
            stroke-width="4"
            stroke-linecap="round"
            fill="none"
          />
          <path
            d="M120 6 L134 12 L120 18"
            stroke="#FF9900"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <span class="line-store">Store</span>
    `;

    // Insert before the original heading, then hide it
    originalHeading.parentNode.insertBefore(wrapper, originalHeading);
    originalHeading.style.display = 'none';
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMeuseHeading);
  } else {
    buildMeuseHeading();
  }
})();