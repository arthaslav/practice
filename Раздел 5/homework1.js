function getMailWhiteList(blackListMails, allMails) {
  let whiteListMails = [];
  for (let i = 0; i < allMails.length; i++) {
    if (!blackListMails.includes(allMails[i])) {
      whiteListMails.push(allMails[i]);
    }
  }
  return whiteListMails;
}

let allMails = ['a@mail.com', 'b@mail.com', 'c@mail.com'];
let blackListMails = ['b@mail.com'];

console.log(getMailWhiteList(blackListMails, allMails));