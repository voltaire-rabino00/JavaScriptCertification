const convertHTML = (str) => {
  const symbols = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }

  return str.replace(/[&<>"']/g, (match) => symbols[match]);
}