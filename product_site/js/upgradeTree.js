//Curtis Palmer   desciption: JavaScript for upgrade decision tree on ModMarket.html
// 11/1/25

document.addEventListener("DOMContentLoaded", () => {
  const nextStep = document.getElementById("nextStep");
  const result = document.getElementById("result");

  const upgradeChoices = document.getElementsByName("upgradeChoice");

  for (let i = 0; i < upgradeChoices.length; i++) {
    upgradeChoices[i].addEventListener("change", () => {
      const choice = upgradeChoices[i].value;
      nextStep.innerHTML = "";
      result.innerHTML = "";

      if (choice === "yes") {

        nextStep.innerHTML = `
          <p>Which type of upgrade are you interested in?</p>
          <label><input type="radio" name="upgradeType" value="cosmetic"> Cosmetic Upgrades</label><br>
          <label><input type="radio" name="upgradeType" value="performance"> Performance Upgrades</label><br>
          <label><input type="radio" name="upgradeType" value="ride"> Ride Quality Upgrades</label>
        `;

        const upgradeTypes = document.getElementsByName("upgradeType");
        for (let j = 0; j < upgradeTypes.length; j++) {
          upgradeTypes[j].addEventListener("change", () => {
            const type = upgradeTypes[j].value;
            const links = {
              cosmetic: ' <a href="appearance.html">Check out our appearance upgrades here</a>',
              performance: ' <a href="performance.html">Check out our performance upgrades here</a>',
              ride: ' <a href="suspension.html">Check out our suspension upgrades here</a>'
            };
            result.innerHTML = links[type] || "";
          });
        }

      } else if (choice === "no") {
        result.innerHTML = ' You chose not to upgrade your vehicle at this time.';
      }
    });
  }
});


