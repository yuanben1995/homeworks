//const fs = require('fs');
const filename = './data/fileMails.json';
const path = require('path');
const Storage = require('./storage').Storage;
const storage = new Storage(path.resolve(path.dirname(__filename), filename));
var debug = require('debug')('xxx');

function Mail(event) {
  this.event = event;
  debug('log:' + 'mail: constructor');
  let self = this;
  this.event.on('send-mail', function (username, senduser, title, content, socket) {
    self.sendMail(username, senduser, title, content, socket);
  });
  this.event.on('read-maillist', function (username, socket) {
    self.readMailList(username, socket);
  });
  this.event.on('read-mailcontent', function (username, socket, cho) {
    self.readMailContent(username, socket, cho);
  });
}
Mail.prototype.sendMail = function (username, senduser, title, content, socket) {
  storage.read((error, mails) => {
    if (error) {
      debug('error:' + error.stack);
      return;
    }

    var date = new Date();
    mails.push({
      'user': username,
      'senduser': senduser,
      'title': title,
      'content': content,
      'date': date
    });
    storage.save(mails, (error) => {
      if (error) {
        debug('error:' + error.stack);
        return;
      }
      if (socket !== '') {
        socket.write('您收到一封邮件\n');
      }
    });
  });
};
Mail.prototype.readMailList = function (username, socket) {
  storage.read((error, mail) => {
    if (error) {
      debug('log:' + error.stack);
      return;
    }
    let count = 0;
    for (let i = 0; i < mail.length; i++) {
      if (username === mail[i].user) {
        count++;
        socket.write(count + '.标题：' + mail[i].title + '\t发件人:' + mail[i].senduser + '\t发送时间:' + mail[i].date + '\n');
      }
    }
    socket.write('\n');
  });

};
Mail.prototype.readMailContent = function (username, socket, mailNum) {
  storage.read((error, mail) => {
    if (error) {
      debug('log:' + error.stack);
      return;
    }
    let flag = 0;
    debug('log:' + '我是标志-----------------------');
    for (let i = 0; i < mail.length; i++) {
      if (username === mail[i].user) {
        flag++;
        if (flag === mailNum) {
          socket.write(mailNum + '.标题：' + mail[i].title + '\t发件人:' + mail[i].senduser + '\t发送时间:' + mail[i].date + '\n');
          socket.write(mail[i].content + '\n');
          return;
        }
      }
    }
    socket.write('请输入正确的序号\n');
  });
};
exports.Mail = Mail;