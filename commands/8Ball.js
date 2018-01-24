exports.run = (config, client, message, args) => {
	var int = require('int');
	var Ball = int();
	if(args != 0){
		Ball = Math.floor(Math.random() * Math.floor(9));
		if(Ball == 1) {
			message.channel.send('Yes');
		} else if(Ball == 2) {
			message.channel.send('No');
		} else if(Ball == 3) {
			message.channel.send('Maybe');
		} else if(Ball == 4) {
			message.channel.send('Ask Again Later');
		} else if(Ball == 5) {
			message.channel.send('Hell no');
		} else if(Ball == 6) {
			message.channel.send('Hell yes');
		} else if(Ball == 7) {
			message.channel.send('Probably');
		} else if(Ball == 8) {
			message.channel.send('Probably not');
		}
	} else {
		message.channel.send('You need to ask me something!');
	}
}