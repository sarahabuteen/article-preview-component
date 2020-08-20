function openSharePopup() {
  let popup = document.getElementById("sharePopup");
  let shareButton = document.getElementById("share-button");
  let arrow = document.getElementById("arrow");
  let detailContact = document.getElementById("card-footer");
  arrow.classList.toggle("arrow-down");
  shareButton.classList.toggle("share-dark");
  popup.classList.toggle("share-popup");
  detailContact.classList.toggle("card-footer-dark");
}
