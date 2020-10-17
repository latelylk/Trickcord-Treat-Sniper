# Trickcord-Treat-Sniper
In the spirit of Halloween, here's something to make you a monster.

A discord selfbot that automatically responds to `Trick'cord Treat#1944`

![Trick'cord Treat Bot](https://miro.medium.com/max/700/1*znYs3T_o7yLyBwY4rPHSvQ.png)

## Get started
1. Clone this repository
2. Edit the config file (options explained in [#options](#options))
3. On first install, run `npm install`
4. Run `node HalloweenSniper.js`

## Features

### Spam

When enabled, the selfbot will send a message every {$spamInterval} seconds. Doing this can lead to the `Trick'cord Treat#1944` bot showing up more often.

### Sabotage

When enabled, this will cause the selfbot to respond to the `Trick'cord Treat#1944` bot with the wrong phrase, causing it to leave and award no points to anyone.

## Options

### token
Input your user token.

Example: `token: '123_Discord_tokeN_456'`

### serverIds
Input the IDs of the servers you want to respond to `Trick'cord Treat#1944` in.

Example: `serverIds: ['123456789', '987654321']`

### channelIds
Input the IDs of the channels you want to spam in.

Example: `channelIds: ['123456789']`

### spam
Enable the spam feature?

Example: `spam: true`

### sabotage
Enable the sabotage feature?

Example: `sabotage: false`

### minWait and maxWait
Enter a minimum and a maximum amount of time (in milliseconds) to wait before responding to `Trick'cord Treat#1944`.

Example: `minWait: 500` `maxWait: 500`

### spamInterval
How often (in milliseconds) should the bot send a message when spam is enabled?

Example: `spamInterval: 30000`
