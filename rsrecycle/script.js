function openQuotePopup() {
  document.getElementById("quotePopup").style.display = "block";
}

function closeQuotePopup() {
  document.getElementById("quotePopup").style.display = "none";
}

function openPickupPopup() {
  document.getElementById("pickupPopup").style.display = "block";
}

function closePickupPopup() {
  document.getElementById("pickupPopup").style.display = "none";
}

function showThankYou(event) {
  event.preventDefault(); // Prevent form from refreshing page
  alert("Thank you! We will contact you soon.");
  closeQuotePopup();
  closePickupPopup();
}
