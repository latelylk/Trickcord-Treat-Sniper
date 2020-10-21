const Eris = require('eris');
const config = require('./config.js');

// Give bot the token and disable certain events
const bot = new Eris.Client(config.token, {
	disableEvents: config.disabledEvents,
});

// Asynchronous spam function. Choose a random channel, chooses a message to send from config, then decides whether to deletes it.
const spammer = async (channelList) => {
	while(config.spam) {
		// Generate delay between minSpamDelay and maxSpamDelay
		const spamDelay = (Math.random() * (config.maxSpamDelay - config.minSpamDelay) + config.minSpamDelay);
		// Wait for setTimeout of spamDelay
		await new Promise(resolve => setTimeout(resolve, spamDelay));
		// Generate message from possible messages specified in config
		const spamMsg = config.toSpam[Math.floor(Math.random() * config.toSpam.length)];
		bot.createMessage(channelList[Math.floor(Math.random() * channelList.length)], spamMsg)
			.then(msg => {
				// If delete enabled, deleted the message 1 second after sending
				if(config.deleteSpam) {
					msg.delete(1000);
				}
			});
	};
};

// If config spam is true, enable spam
if(config.spam) {
	console.log('Will spam the server.');

	bot.once('connect', async () => {
		// If channels are specified, only spam in those.
		if(config.specChannel) {
			spammer(config.channelIds);
		}
		// If channels are not specified, find out which channels to spam in.
		else if(config.specServer) {
			// Wait 5 seconds to make sure channels are initialized, then find all channels in server
			// that the user has permission to send in.
			// This is dumb, but has to be done because of how Eris handles selfbots
			setTimeout(function() {
				for(let i = 0; i < config.serverIds.length; i++) {
					const guild = bot.guilds.get(config.serverIds[i]);
					guild.channels.forEach(function(channel) {
						if(channel.permissionsOf(bot.user.id).json['sendMessages'] && channel.type == 0) {
							config.channelIds.push(channel.id);
						}
					});
				}
				spammer(config.channelIds);
			}, 5000);
		}
		// This block is redundant and should be caught by config.js
		else {
			console.error('Cannot spam server without a server id or channel id.');
			process.exit(1);
		}
	});
}

bot.once('connect', () => {
	console.log('Bot started.');
});

// When a message is created
bot.on('messageCreate', (msg) => {
	// If message not sent by Trick'cord Treat bot, abort.
	if(msg.author.id != '755580145078632508') {
		return;
	}

	// If server specified, check to see that message is coming from that server.
	// If not, abort
	if(config.specServer && (!(config.serverIds.indexOf(msg.channel.guild.id) > -1))) {
		return;
	}

	// Check the embed to determine which command is needed
	// Then send the command {$waitSet} seconds after message is received
	const claimDelay = (Math.random() * (config.maxClaimDelay - config.minClaimDelay) + config.minClaimDelay);

	// Check the title of embed to see if this is a trick or treat message
	if(msg.embeds[0].title === "A trick-or-treater has stopped by!") {
		// Determine whether to use h!trick or h!treat
		if(msg.embeds[0].description.includes('treat')) {
			setTimeout(function() {
				bot.createMessage(msg.channel.id, config.treat);
			}, claimDelay);
		}
		else if(msg.embeds[0].description.includes('trick')) {
			setTimeout(function() {
				bot.createMessage(msg.channel.id, config.trick);
			}, claimDelay);
		}
	}
});

// Get the bot to connect to Discord
bot.connect();