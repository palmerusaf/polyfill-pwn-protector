# Polyfill Pwn Protector

![Logo](./128.png)

## About

On Jun 25, 2024 a popular JavaScript library called Polyfill was subject to a supply chain attack. 100K sites are currently affected by this hijacked script. This Chrome extension protects the user from infected sites.

## How it works

First it blocks all traffic from polyfill.io. Then it updates the CDN script tag from polyfill.io to cdnjs.cloudflare.com/polyfill
This prevents execution of malicious code while maintaining compatibility. If you already have an ad blocker you probably don't need this Chrome extension.

## References

- https://blog.cloudflare.com/automatically-replacing-polyfill-io-links-with-cloudflares-mirror-for-a-safer-internet
- https://dev.to/snyk/polyfill-supply-chain-attack-embeds-malware-in-javascript-cdn-assets-55d6
