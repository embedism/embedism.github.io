---
layout: post
title:  "BeagleBone vs. Raspberry Pi: which is the best prototyping platform for your product?"
date:   2019-11-15 13:45:28 +0100
categories: blog
summary: Which platform should you choose to develop your idea?
---
You’ve hit on an idea that’s going to be a winner, done some research online, and decided to build some hardware to showcase it. Sometimes you need a bit more power than an Arduino, say if you want to run a containerised application with Balena, or output HD video. If an Arduino or MCU just won’t cut it — you need a single board computer. The two clear choices in this category are the Raspberry Pi and BeagleBone. With a lot of similarities and nuanced differences, choosing between these two options can be a difficult decision.

This article will help you navigate the capabilities and differing advantages of the BeagleBone and Raspberry Pi when considering mass manufacture in the future.

The topics covered will be:
- Suitability for your application
- Timing and development cycles
- How easy it is to integrate the platforms with your product
- Open-source design and single-source supply

---

## Suitability

> “I just assumed I needed an OS”

The BeagleBone Black and Raspberry Pi 4 are different beasts. The first thing you should do when choosing a platform is to determine which product is best suited.

For example, when working on video intensive projects the Raspberry Pi 4 is a clear choice. Need to integrate with various peripherals? Then the BeagleBone Black is the one for you.

Seek out the wealth of online articles that comparatively discuss the technical features of these two devices to determine what’s best for you.

### Do you need all that power?

Depending on your application you may be able to use a lower powered device. If you are not sure if you need an OS you probably don’t!

Work out the core features of your product and determine if they could be run on a powerful MCU. If you can base your product around an MCU you will simplify your development and sourcing, reduce your BOM cost, and save yourself a lot of hassle.

### Timing

> If not now, when?

Choosing what platform to base your project around is often a decision based upon what parts you have on your workbench or stashed in a drawer. This is not a bad approach, especially when you are building a proof-of-concept or testing out a new idea. But what happens after you have garnered support for your idea and want to start your first proper development cycle? It is tempting to use the platform that you based your POC around, but you should pause and consider what your hardware really needs to do.

Figuring out hardware requirements early will save on software effort later, but consider if this works with your development cycles. If fast iteration in the development stage will allow you to raise funds and give you time to reconsider your hardware later then you should do this. If your product is only feasible when developed on the appropriate hardware, you should aim to integrate this as early as possible.

## Integrability

This section will cover how the BeagleBone or Raspberry Pi might integrate into your product.

There are commercial products available with both the Raspberry Pi and BeagleBone inside them. I’ve seen cinema ice-cream dispensers boot up with the Raspberry Pi logo, and the Revolv smart home hub was based around the AM335 and other BeagleBone Black components.

These different levels of integration have pros and cons:

For example, only a very limited run of the cinema ice-cream machines is needed due to the limited number of cinemas. The manufacturer’s core business is building ice-cream dispensers, not building electronics. So, it makes perfect sense for them to use an off the shelf touch screen and a Raspberry Pi for their “smart” ice-cream machine. This avoids them hiring somebody capable of laying out a complex PCB like that required for a Linux SBC. They also have plenty of space inside their enclosure and a software update would be as simple as a technician changing the SD card in the device — no extra training required and no extra cost.

If Revolv tried to squeeze a whole BeagleBone Black into their smart home hub it would have been a very bulky and expensive device. When building a new type of product it makes sense to hire specialist engineers and create custom hardware so that the end result is as finessed as it can be. As will be discussed below in Form Factor Freedom, if you need more flexibility in the industrial design of your product you’ll have to layout your own PCB to ensure it fits within the casing.

### Open Source

An open source design means you can modify, improve, and reproduce the design as much as you like. But remember to always check the license conditions!

The Raspberry Pi is partially open source whereas the BeagleBone line of products is completely open source. You can grab the schematics for the Pi online but you won’t find the layout or be able to buy the core component — the Broadcom processor! Searching online for the BCM2711 won’t give you many results. To get your hands on it you’ll have to convince Broadcom that your product will be selling in vast quantities and agree some other business terms with them.

Conversely, the BeagleBone Black design files are all available on Upverter for you to fork. (That means you technically don’t even need any paid-for design tools to modify the files!) So you can download the data and import them into your preferred ECAD tool.

The BeagleBone Wiki contains all the design information and software images that you need to completely recreate the SBC. This makes it easy to modify the design for your specific application and to change the layout design to fit into your casing.

However, the Raspberry Pi Foundation has a secret weapon…

### Pi Compute

The Compute Module is a stripped down version of the Raspberry Pi with a form factor similar to that of a RAM stick. The idea is that you can build a custom PCB with a connector for the Compute Module. This allows you to utilise the design of the Raspberry Pi in your own hardware solution. You don’t need to worry about the complex layout requirements of the processor, RAM, and other supporting peripherals — these are all handled for you on the Compute Module.

To get you up and running, the Compute Module is supplied with an open source breakout board that you can use as a starting point for your custom hardware. It is also guaranteed to be in production until January 2026 — this is a bit longer than the standard Raspberry Pis get.

### Element 14 Pi Customisation

Farnell Element 14 offer a Raspberry Pi customisation service. The website is quite outdated so it is not clear if this is still a service that they offer, but it could prove useful if your product only some basic extra features.

### Form Factor Freedom

The look and feel of your product is key to its identity. Trends are moving towards smaller and lighter devices resulting in restricted board space. Creative and considered board layout is essential to minimise board footprint whilst not causing any circuit issues. The BeagleBone Black ought to be a clear winner when it comes to form factor freedom but the Pi Compute Module is very small!

Take a look at the table below to see a comparison of board sizes. Note that there is no “Compute Module” version of the BeagleBone Black so the measurements for the “BeagleBone Black Core” are estimates of the board size without connectors.

## Single-Source Supply

The phrase “single-source supply” often strikes fear into the heart of supply chain manager. What happens if the supplier has no stock? How long are the lead times? What if the supplier goes out of business? Mitigating the risks of single-source supply can be tackled by both engineers and supply chain people.

### Manufacturers and Distributors

Imagine that the BeagleBoard.org and Raspberry Pi Foundations go out of business and you are using one of their devices in your product. Both the Pi and BeagleBone can be purchased from many sources. These distributors may hold stock for some time and you will be able to buy it until they run out… But what happens afterwards?

Manufacturers may spot a lucrative opportunity in producing these two devices, so they prepare their etching tanks and SMD lines for a wave of orders. However, there will only be orders for the BeagleBone family of devices as no designs are available for the Pi and you can’t buy the processor! This means that you are unlikely to get your hands on a Raspberry Pi ever again. Scarcity also means high prices and waning communities — removing two great selling points for the Pi.

Consider what will happen when the model of device you are using goes EOL or the manufacturer goes bust. How will you mitigate these risks during your design phase? The BeagleBone family of products reduces your exposure to the risks of single source supply, but does this fit with your development cycles?

## Summary

Both the Raspberry Pi and BeagleBone Black have their merits, and both are fantastic development platforms. Whilst you are in the development stages of your project you could use either one — but remember to switch to the most appropriate platform at the right time.

For totally integrated, space constrained products that will be manufactured in the 1000s, the BeagleBone is a clear winner as you can seamlessly integrate its open source design with the rest of your electronic and mechanical hardware.

When manufacturing one-offs, bespoke items, video intensive applications, or products in the low 100s, you might consider the Raspberry Pi for its better community, stellar GPU performance and general ease of use.