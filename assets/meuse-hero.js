document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.banner__heading');
  if (!heading) return;

  // Bolds the word "amazon" and adds orange arrow beneath it
  heading.innerHTML = heading.innerHTML.replace(
    /amazon/gi,
    `<strong style="
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-weight: 700;
      font-size: 1.2em;
      display: inline-block;
    ">amazon<svg viewBox="0 0 120 20" style="display:block;width:80%;margin:0 auto -0.3em;" fill="none">
      <path d="M8 10 Q60 22 112 10" stroke="#FF9900" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M100 5 L112 10 L100 15" stroke="#FF9900" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></strong>`
  );
});