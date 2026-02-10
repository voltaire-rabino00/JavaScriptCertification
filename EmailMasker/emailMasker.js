function maskEmail(email) {
  let emailParts = email.indexOf("@");
  let username = email.slice(0, emailParts);
  let domain = email.slice(emailParts);
  let maskedEmail = `${username[0]}${"*".repeat(username.length - 2 )}${username[username.length - 1]}${domain}`;
  return maskedEmail;
}

let email = "myEmail@email.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
