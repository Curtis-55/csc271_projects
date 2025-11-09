//Curtis Palmer   desciption: JavaScript for upgrade decision tree on ModMarket.html witth use of functions
// 11/9/25

document.addEventListener("DOMContentLoaded", () => {
  const nextStep = document.getElementById("nextStep");
  const result = document.getElementById("result");
  const upgradeChoices = document.getElementsByName("upgradeChoice");

  const links = {
    cosmetic: '<a href="appearance.html">Check out our appearance upgrades here</a>',
    performance: '<a href="performance.html">Check out our performance upgrades here</a>',
    ride: '<a href="suspension.html">Check out our suspension upgrades here</a>'
  };

  function clearAll(list) {
    list.forEach(item => item.innerHTML = "");
  }


  function showOptions(box, output, linkList) {
    box.innerHTML = `
      <p>Which type of upgrade are you interested in?</p>
      <label><input type="radio" name="upgradeType" value="cosmetic"> Cosmetic</label><br>
      <label><input type="radio" name="upgradeType" value="performance"> Performance</label><br>
      <label><input type="radio" name="upgradeType" value="ride"> Ride Quality</label>
    `;

    document.querySelectorAll('input[name="upgradeType"]').forEach(btn => {
      btn.addEventListener("change", () => {
        output.innerHTML = linkList[btn.value] || "";
      });
    });
  }

  function handleChoice(value, box, output) {
    clearAll([box, output]);
    if (value === "yes") {
      showOptions(box, output, links);
    } else {
      output.textContent = "You chose not to upgrade your vehicle at this time.";
    }
  }

  upgradeChoices.forEach(btn => {
    btn.addEventListener("change", () => {
      handleChoice(btn.value, nextStep, result);
    });
  });
});

