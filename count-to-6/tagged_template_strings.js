console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html (parts, ...arguments){
  var html = parts[0];
  for (var i = 0; i < arguments.length; i++) {
    html += escape(arguments[i]) + parts[i + 1];
  }
  return html;
}

function escape (str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39")
            .replace(/'/g, "&quot");
};
