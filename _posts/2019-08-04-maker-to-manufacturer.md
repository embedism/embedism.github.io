---
layout: post
title:  "Maker to Manufacturer"
date:   2019-08-04 13:45:28 +0100
categories: blog
excerpt_separator: <!--more-->
summary: Early design decisions your future self will thank you for
---
Early design decisions your future self will thank you for
<!--more-->

You’ve nailed your killer idea and sketched out a rough hardware architecture. Now you are preparing to embark on your prototyping journey. Phrases like “cost of change” and “engineering change request” are not in your mind – this is the era of thought experiments and blue-sky thinking.

Fretting over all the potential things that could go wrong with your product’s manufacture at this early stage is a waste of energy. But don’t make your future life hard – follow these tips and you’ll be thanking yourself in ten month’s time.

## Hardware
> Who will you turn to when you have questions?  

### Choose well-supported core components

Your product will have a core component, typically an MCU. Ensure that it is from a manufacturer who has a good support network in place. If there are no developer forums, FAEs, or responsive support staff, who will you turn to when you have questions? For example, Nordic has a great forum that both staff and the public regularly post in. ST and Atmel (owned by Microchip) have thriving maker communities with self-taught experts willing to help you out.

### Carefully select your connectors

> Don’t waste your board real estate with large, cumbersome connectors.

We are all very familiar with the 0.1” header, it is on development boards from almost every manufacturer. But think back to the last time you saw one on a finished product’s PCB… never, right? These headers are great when you are prototyping but can cause issues during manufacture. For example, populating header pins to program your firmware adds BOM cost for a single-use component. What about the space required? Many products leave only the bare minimum of space for a PCB, don’t waste your board real estate with large, cumbersome connectors.

Alternatives that are great for production might not be so good during prototyping. You can put pads on your PCB that make contact with pogo pins, but now you have to design the jig that holds the pogo pins. How do you ensure that the pins can’t be connected the wrong way around, what about alignment?

Thankfully, somebody has already solved this problem! Tag-Connect is a system of cables that connect to a zero-cost configuration of pads on your PCB. There are a variety of footprints available, some are better for prototyping and permanent connections. Others are great for in-factory provisioning and temporary connections.

## Firmware

### Consider it as early as possible

Firmware breathes life into otherwise lifeless products. Consider your firmware as early on as possible. Who will be writing it? What hardware documentation will they need? How is it programmed?

If the hardware designer won’t be writing the firmware for the product then make sure to keep detailed notes on design decisions. Examples of great things to record are:
- why certain components were chosen (and what features you want to make use of),
- how the hardware engineer envisions the program flow during operation,
- how the hardware is programmed,
- pin assertions that need to be made (and when) to make subsystems work.
- 
Ensure that your hardware engineer and firmware engineer work together, especially in the early stages of design.

## Don’t be afraid to refactor

Your firmware will often end up cluttered and containing a lot of unnecessary code. This is a natural thing that happens during product development as workarounds and hacks get implemented. It isn’t good to have these left over in your production firmware.
> You should ensure your code will be easy to pick back up in the future.

There are a lot of software development guides online that you can refer to when refactoring so you should go and look at those. However, you should ensure your code will be easy to pick back up in the future and that it is clean and well structured.

## Think about provisioning

Your product might need provisioning in the factory. It is worth considering how this is done early on during firmware development. Ensure that any in-factory test firmware isn’t an afterthought and consider how your programming jigs will be run.

Look at tools like Balena for managing large fleets of jigs remotely. Thoroughly test your provisioning process with non-technical staff to ensure it is robust and simple.

A simple thing that can cause real headaches is giving hardware unique IDs. A short, human friendly, UID can be derived from MCUs that have built in UIDs. In the case that there is no unique identifier on the MCU you can either add a small EEPROM with a UID or program it in factory. If you are programming UIDs in factory then you must take measures to prevent reuse.

## Paperwork and Admin

Nobody relishes doing paperwork and admin tasks so here are two easy tips to follow.

### Labelling and naming

Label or name all your documents in a sensible way! Get a naming convention sorted early in your project to avoid future confusion and file-hunting. Schematics are especially important, when under review ensure that sub systems are labelled and pages are named.

### Licensing

Before you build your entire codebase around a library that you found on GitHub at 3am, check the license! Not all code that you find online can be legally used in commercial products, some might demand a copy of the license to be shipped with the product. Don’t get caught out by this, the consequences could be dire.

## Top-Level Design

### Time vs. money

Time to market and aggressive unit cost often come at the expense of one another. For example, using a BLE module in your design will save you time but the unit cost will be higher as a result. Finding cheap replacement components for your high-cost parts will take days or even weeks.

Decide what is more important: low unit cost or short time to market. Reducing time to market for your “version one” product will be beneficial in a lot of ways. “Version two” is where you can focus on reducing the BOM cost. Further to this, getting to market fast will help product validation too – it’s better to fail fast and fail cheap if you need to go back to the drawing board.

### Certification

> Lean on your vendors for support.

The minefield that is certification can be intimidating first time around. And second time….. And third time. But consider certification early and you will make the process much less painful.

Lean on your vendors for support. Some manufacturers will help you to tune your RF circuits, others will have FAEs who can guide you through things.

One common request from UK certification houses is that your product can be put into its various “modes”. Make this easy for yourself. Implementing this with a CLI that you can send simple commands to can allow for automation of many tests. Automation will make your testing much faster so you won’t be sitting outside an RF chamber after midnight!

## Ethics

### Software

This post isn’t about the cost of software or the ethics of using pirated programs, but it is worth a brief mention. Don’t use pirated software for commercial gain, you can get into seriously hot water by doing this. Use free alternatives or ask for extended trials if software is out of budget for you.

A good habit to develop is exporting to neutral formats like PDF schematics and Gerber/ODB data. This means that if you lose access to your software or need to access files on the go, you can do so with free software that most people have.

### Security

Data privacy is a hot-topic at the moment. Make sure that your product isn’t talked about on the next episode of Smashing Security or Hackable for its glaring flaws.

If you need hardware security then design it in early on, adding key components just before manufacture can be very tricky.

## Testing

## Test in the real world

Working on your bench does not mean it will work in the wild. Get someone non-technical to test your prototype and see how they behave – both user and electronics!

> Working on your bench does not mean it will work in the wild.

Testing your product with real people is also great for validation so start doing this as early as possible!

### Test with production hardware

Often when you go to manufacture you will use a different supplier. Test the boards from your new supplier to the same level as rigour as before, make sure that nothing has changed. Pay special attention to tall components and components with large pads as these may have unwanted collisions with your mechanical housing.

---

Some lessons need to be learnt the hard way but others can be easily passed along.
Hopefully these tips will set you off in the right direction for your new project but the best takeaway is this: think carefully about how your engineering choices now will impact your project in the future. Strike a balance between not limiting your future options and having unnecessary features.
