data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

window.onload = setChart(data);

function setChart(d){
  var c = document.getElementById("Chart");
  let hv = Math.max(...d.map(o => o.amount))*2 + parseFloat(getComputedStyle(document.documentElement).fontSize)*4.5;
  c.style.minHeight = hv + "px";
  d.forEach((item, i) => {
    let chartEl = document.createElement("div");
    let bar = document.createElement("span");
    let day = document.createElement("span");
    chartEl.className = "chartEl";
    bar.className = "bar";
    day.className = "dmsans fs-0 light-brown";
    day.style.marginTop = ".3rem";
    let height = item.amount;
    bar.style.height = height*2 + "px";
    day.innerHTML = item.day;
    let amount = document.createElement("span");
    amount.innerHTML = "$" + item.amount;
    amount.className = "amount dmsans fs-0";
    chartEl.insertAdjacentElement("afterbegin", bar);
    chartEl.insertAdjacentElement("afterbegin", amount);
    chartEl.insertAdjacentElement("beforeend", day);
    c.insertAdjacentElement("beforeend", chartEl);
    chartEl.addEventListener("click",setActiveDay);
  });
  let line = document.createElement("hr");
  line.className = "separator";
  c.insertAdjacentElement("afterend", line);

}

function setActiveDay(e){
  let el = e.currentTarget;
  let lastActiveEl = document.getElementsByClassName("active")[0];
  if (lastActiveEl === el)
    lastActiveEl.classList.remove("active");
  else {
    if(lastActiveEl != undefined)
      lastActiveEl.classList.remove("active");
    el.classList.add("active");
  }

}
