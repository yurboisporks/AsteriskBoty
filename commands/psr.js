exports.run = (config, client, message, args) => {
	choice = args.join("");
	var int = require('int');
	Bchoice = int();
	Pchoice = int();
	Bchoice = Math.floor(Math.random() * Math.floor(3));
	if(!args){ 
		message.channel.send('Please choose something next time!');
		return;
	}else if(choice === 'paper'){ 
		Pchoice = 0;
	}else if(choice === 'scissors'){ 
		Pchoice = 1;
	}else if(choice === 'rock'){ 
		Pchoice = 2;
	}else{ 
		message.channel.send('You Misspelled!');
		return;
	}
	if(Bchoice == 0){
		message.channel.send('Paper');
	}else if(Bchoice == 1){
		message.channel.send('Scissors');
	}else if(Bchoice == 2){
		message.channel.send('Rock');
	}
	if(Pchoice == Bchoice){
		message.channel.send('Tie!!');
	}else if(Pchoice == 0 && Bchoice == 1){
		message.channel.send('Lose!!');
	}else if(Pchoice == 0 && Bchoice == 2){
		message.channel.send('Win!!');
	}else if(Pchoice == 1 && Bchoice == 0){
		message.channel.send('Win!!');
	}else if(Pchoice == 1 && Bchoice == 2){
		message.channel.send('Lose!!');
	}else if(Pchoice == 2 && Bchoice == 0){
		message.channel.send('Lose!!');
	}else if(Pchoice == 2 && Bchoice == 1){
		message.channel.send('Win!!');
	}
}