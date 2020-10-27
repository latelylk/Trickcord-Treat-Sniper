<h1 align="center">🎃 Trickcord-Treat-Sniper V3 🎃</h1>
<h3 align="center">In the spirit of Halloween, here's something to make you a monster.</h3>

<h3 align="center">A discord selfbot that automatically responds to Trick'cord Treat#1944</h3>

<p align="center">
  <img src="https://miro.medium.com/max/700/1*znYs3T_o7yLyBwY4rPHSvQ.png" alt="Trick'cord Treat Bot"/>
</p>

<h5 align="center">⭐ If you like the project, don't forget to leave a star! ⭐</h5>

## Getting started:

1. Clone this repository
2. Edit the config file (options explained in [#options](#options))
3. On first install, run `npm install`
4. Run `node HalloweenSniper.js`

## Features:

### Claim Delay

Controlled by `minWait` and `maxWait` in config.yaml. The bot will delay for a random amount of time between `minWait` and `maxWait` before claiming the point.

### Sabotage

When enabled, the selfbot will respond to the `Trick'cord Treat#1944` bot with the wrong phrase, causing it to leave and award no points to anyone.

### Spam

When enabled, the selfbot will send a message every {$spamInterval} seconds. Doing this can lead to the `Trick'cord Treat#1944` bot showing up more often.

## Options:

### token

⚠️ **Keep this a secret!** ⚠️

Input your user token. Need help getting your token? [Check the wiki!](https://github.com/latelylk/Trickcord-Treat-Sniper/wiki/Getting-Your-Discord-Token)

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

### toSpam

Specify what messages to send when the spam feature is enabled

Example: `toSpam: ['Hello there', 'Happy Halloween!', 'Trick or Treat!']`

### deleteSpam

Auto-delete spammed messages as soon as they are sent?

Example: `deleteSpam: true`

### sabotage

Enable the sabotage feature?

Example: `sabotage: false`

### minWait and maxWait

Enter a minimum and a maximum amount of time (in milliseconds) to wait before responding to `Trick'cord Treat#1944`.

Example: `minClaimDelay: 500` `maxClaimDelay: 1000`

### minSpamDelay and maxSpamDelay

Enter a minimum and a maximum amount of time (in milliseconds) for the bot to wait between messages when spam is enabled?

Example: `minSpamDelay: 25000` `maxSpamDelay: 35000`

### slowmode

Option for competing in channels with slowmode enabled. If you're trying to bot in a server with slowmode, enable this. See issue #11 for the limitations of this option.

Example: `slowmode: true`

### slowmodeTime

For use with `slowmode`. Enter the time (in ms) of the channel's slowmode timer.

Example: `slowmodeTime: 605000`

## Disclaimer

userbots/selfbots are against the TOS so anyone that uses this could get their account banned. - #13
