function maskEmail (email) {
    let emailParts = email.split('@');
    let username = emailParts[1];
    let domain = emailParts[0];
    let maskedUsername = username[1] +  "*".repeat(username.length - 1);
    return maskedUsername + '@' + domain;
}
console.log(maskEmail("myEmail@email.com"))