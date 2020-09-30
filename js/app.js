$(document).ready(function () {
  const bars = document.querySelectorAll(".progress_bar");

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  // Contador

  const counters = document.querySelectorAll(".counter");

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let step = target / 100;

      let countIt = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + step);
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };
      countIt();
    });
  }

  let counterSection = document.querySelector(".counter_section");
  let options = {
    rootMargin: "0px 0px -200px 0px",
  };
  let done = 0;

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done !== 1) {
      done = 1;
      runCounter();
    }
  }, options);

  sectionObserver.observe(counterSection);
});
