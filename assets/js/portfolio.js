(function () {
  var root = document.documentElement;
  var themeButton = document.querySelector("[data-theme-toggle]");
  var menuButton = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-site-nav]");
  var agentLine = document.querySelector("[data-agent-line]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {}

    if (themeButton) {
      var icon = themeButton.querySelector(".icon");
      if (icon) {
        icon.className = theme === "dark" ? "icon moon-icon" : "icon sun-icon";
      }
      themeButton.setAttribute("aria-label", theme === "dark" ? "Use light theme" : "Use dark theme");
      themeButton.setAttribute("title", theme === "dark" ? "Use light theme" : "Use dark theme");
    }
  }

  function getInitialTheme() {
    try {
      var savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
    } catch (error) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  setTheme(getInitialTheme());

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      var icon = menuButton.querySelector(".icon");
      if (icon) {
        icon.className = open ? "icon close-icon" : "icon menu-icon";
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        var icon = menuButton.querySelector(".icon");
        if (icon) {
          icon.className = "icon menu-icon";
        }
      }
    });
  }

  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !reducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    reveals.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (agentLine && !reducedMotion) {
    var lines = [
      "context in, tools ready",
      "reading local state before acting",
      "make the loop inspectable",
      "ship the next useful thing"
    ];
    var index = 0;
    window.setInterval(function () {
      index = (index + 1) % lines.length;
      agentLine.textContent = lines[index];
    }, 2600);
  }
})();
