loadAllEmoji();

function loadAllEmoji() {
  var emoji = "";
  for (var i = 128512; i <= 128700; i++) {
    emoji += ` <span onclick="getEmoji(this)">&#${i};</span>`;
  }

  document.getElementById("smiley").innerHTML = emoji;
}

function showEmojiPanel() {
  document.getElementById("smiley").removeAttribute("style");
}

function hideEmojiPanel() {
  document.getElementById("smiley").setAttribute("style", "display:none;");
}

function getEmoji(control) {
  document.getElementById("chat_message").value += control.innerHTML;
}
