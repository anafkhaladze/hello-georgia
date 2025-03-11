document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
      let answer = q.nextElementSibling;
      let symbol = q.querySelector("span");
  
      let isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      symbol.textContent = isVisible ? "+" : "-";
    });
  });