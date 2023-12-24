document.addEventListener("DOMContentLoaded", function () {
    const snowfall = document.querySelector(".snowfall");
  
    for (let i = 0; i < 30; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 2 + 3 + "s";
      snowfall.appendChild(snowflake);
    }
  });
  