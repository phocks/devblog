+++
title = "Dark web for dummies"
date = 2023-11-23
draft = false

[taxonomies]
tags = ["Dark Web", "Tor", "Privacy", "Security", "Instructions"]
+++

Get a censor-proof completely anonymous web service on the dark web in 15 minutes or your money back!

Your very own `.onion` address.

Why would you want this? Well, the [New York Times has one](https://open.nytimes.com/https-open-nytimes-com-the-new-york-times-as-a-tor-onion-service-e0d0b67b7482), (good for getting around that pesky NYTimes paywall). Also handy if you want to publish information that is vulnerable to censorship.

What you need:

1. An Internet connection.
2. [A Linux server](https://ubuntu.com/download/server).
3. [The Tor browser](https://www.torproject.org/download/) (for testing).

What to do:

1. Follow the instructions at Tor Project: [Set up your Onion service](https://community.torproject.org/onion-services/setup/).
2. OK that's pretty much it. Keep the server running and your `.onion` service will be routed through the Tor network.

Basically it's:

```bash
# In Ubuntu Server as root

apt install tor
apt install nginx # Web server
vim /etc/tor/torrc # Uncomment HiddenServiceDir and HiddenServicePort
systemctl restart tor
cat /var/lib/tor/hidden_service/hostname # Your .onion address

# Visit your .onion address in the Tor browser
```

*And one more thing...*

You can brute-force a vanity Onion address using [mkp224o](https://github.com/cathugger/mkp224o).
