const chart = (function () {
  const chartBars = document.querySelector(".chart__bars");
  const today = new Date().toLocaleDateString("en-us", { weekday: "long" }).toLowerCase();

  function isToday(dayText) {
    return today.includes(dayText);
  }

  function buildBar({ day, amount }) {
    //build elements
    const container = document.createElement("div");
    const bar = document.createElement("div");
    const popup = document.createElement("div");
    const dayLabel = document.createElement("span");

    //add classes
    container.classList.add("chart__day");
    bar.classList.add("chart__bar");
    popup.classList.add("chart__popup");
    dayLabel.classList.add("chart__text");

    //style the bar that matches the current day
    if (isToday(day)) {
      bar.classList.add("chart__bar--today");
    }

    //set the height of each bar

    bar.style.height = `${amount * 2.5}px`;

    //add text
    popup.innerText = `$${amount}`;
    dayLabel.innerText = day;

    //make bars focusable for keyboard navigators
    bar.tabIndex = 0;

    //construct bar markup
    container.append(bar);
    container.append(popup);
    container.append(dayLabel);

    return container;
  }

  function buildBars(chartData) {
    return chartData.map((day) => {
      return buildBar(day);
    });
  }

  function renderBars(barElements) {
    barElements.forEach((bar) => {
      chartBars.append(bar);
    });
  }

  function init(chartData) {
    const barElements = buildBars(chartData);
    renderBars(barElements);
  }

  return { init };
})();

chart.init([
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
]);
