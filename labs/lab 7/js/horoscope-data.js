var zodiacSign = "scorpio";
var birthMonth = "October";
var birthDay = 28;
var luckyNumber = 5;
var hDes = "intense, passionate, and secretive water sign, known for its determination, loyalty, and resourcefulness"
var astrology = false;
var moodRate = 0.2;
var moodRate1 = 0.4;
var moodRate2= 0.3;
var avgMoodRate = (moodRate + moodRate1 + moodRate2) / 3;
var mood = "Today's mood rating for Scorpio is " +  moodRate + " The average mood rating of Scorpio 1, Scorpio 2, and Cancer is:" + avgMoodRate +"";

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySign = signs[10];
var p1 = signs[10]
var p2 = signs[6]
var Zmessages = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
]

var myMSG = "Curtis" + "curtis choose the message " + Zmessages[0];
var p1MSG = "Keeley" + "curtis choose the message " + Zmessages[4];
var p2MSG = "Mathew" + "curtis choose the message " + Zmessages[6];






document.getelementById("zodiac-sign").textContent += zodiacSign;
document.querySelector("h3.birth-day").innerHTML += birthMonth + " " + birthDay;
document.querySelector("h4.lucky-number").innerHTML = luckyNumber;
document.getElementsByTagName('p')[0].textContent = hDes;
document.getElementsByTagName('p')[1].innerHTML = <strong> astrology; </strong>
document.getElementsByTagName('p')[2].innerHTML = mood
document.getElementsByTagName('p')[3].innerHTML = myMSG;
document.getElementsByTagName('p')[4].innerHTML = p1 + ": " + p1MSG;
document.getElementsByTagName('p')[5].innerHTML = p2 + ": " + p2MSG;

