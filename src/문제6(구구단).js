let i, j;
for(i = 2; 1 <= 9; i++) {
  document.write("<table>");
  document.write("<tr><th>" + i + "단</th></tr>");
  for(let j = 1; j <= 9; j++) {
    document.write("<tr><td>" + i + "X" + j + " = " + (i*j) + "</td><tr>");
  }
  document.write("</table>")
}