---
layout: post
title:  "Life Beyond Arduino"
date:   2020-09-04 13:45:28 +0100
categories: blog
excerpt_separator: <!--more-->
summary: As the first port of call for most prototypes, what can we do to move beyond Arduino and do we even need to?
---
As the first port of call for most prototypes, what can we do to move beyond Arduino and do we even need to?
<!--more-->

The first thing many of us turn to when we have a new project idea is the Arduino ecosystem, and rightly so. Arduino has a plethora of MCU options, shields to expand your project, and libraries for every conceivable purpose. Its open-source core has fostered a vibrant community of helpful, curious, and creative people who will go above and beyond to help you out. What else could be better for spinning up a prototype in the shortest time possible?

Businesses like Adafruit are expanding the possibilities of what we can achieve using Arduino. By preserving the open-source roots they have increased choice for makers.

Beyond the Atmel 8-bit MCUs offered since 2005, now Wi-Fi, LoRa and 32-bit MCUs are firmly into the hands of makers.

Arduino recently launched Arduino Create. This online editing and compilation platform, like ARM’s Mbed, lowers the barrier to entry further. Now people using shared computers, like school students, have a place to store and work on their code.

Electronics is now with the masses and the offering keeps getting better. So why would you ever want to move on from Arduino?

---

Before we move on let’s clarify some terminology so that we’re all on the same page:

- Arduino: the physical Arduino (or Arduino-esque) product. In other words, the bit that you buy and then build your system around.
- Arduino IDE: the software that you download onto your computer to create Sketches and compile your code.
- Arduino Compatible: Hardware that works with the Arduino IDE.
- Development Board (or Dev Board): products that you build your system around but are not part of the standard Arduino offering.
- Shields: the things that you plug into your Arduino by their matching header pins. They allow you to expand your system with different I/O options, transducers, drivers, screens, you name it!

*Before we get started, if you came here wanting to find out which Arduino will be best for your project, you won’t find the answers here. Take a look at [Picking The Right Arduino](https://blog.hackster.io/picking-the-right-arduino-341a0a9550c7) from Hackster.io instead.*

---

## Motivations to Move Beyond Arduino

What motivations might you have to move beyond Arduino? This section takes a look at some of the reasons in more detail.

### More Professional Prototypes

You’ve got a prototype and you think your idea is marketable. Now you want to let some of your friends try out your product, or put it in front of investors . But your box of jumper wires, shields and Arduino Mega is hardly going to inspire confidence, is it?

> The true value of a product is not measured by the components that make it up, but by the benefits and joy that it brings into the user’s life.

Firstly: never feel ashamed of your tangle of wires and don’t shy away from getting feedback on your first proof-of-concept. It can be a great confidence boost to have your idea validated, especially when it doesn’t meet any aesthetic requirements.

If the feedback isn’t so positive (we’ve all been there) then it might be best to refine your idea. Nailing down your idea before spending too much time and money will avoid you getting trapped by bad decisions further down the line. Using off-the-shelf hardware is a valid way to build prototypes. After all, the true value of a product is not measured by the components that make it up, but rather by the benefits and joy that it brings into the user’s life.

“Prototypes” that make it out in to the wild now are often very well refined. So remember that people may not feel comfortable parting with their money and testing your product if it is not in a familiar format.

### Robustness

> “Oh, that was working when I left the house…”

Moving your prototype around has inherent risks. The temporary connections made to pin headers and breadboards are exactly that, temporary. Transporting prototypes like this leads to frantic repairs and debugging at your destination. Don’t do this under pressure in front of potential investors. Embarrassment and damage to your pitch won’t help your confidence or investment opportunity.

### Taking Control of Your Hardware

Using dev boards forces you to conform to someone else’s implementation of an MCU. Pins may have extra hardware connected, preventing you utilising their different functions. Sometimes dev boards only come with a subset of the MCU options in a device family. What if you need a variant with a different operating frequency or extra IO? These design constraints can restrict your product’s functionality.

Being proud of your design is also important. Holding a product in your hand that you designed from the ground up is one of the most gratifying feelings. Of course, that product should be well-considered and useful so don’t rush to build custom hardware!

### Space Constraints

Squeezing a dev board and the rest of your wiring into a small box can be difficult. There’s little point gunning for miniaturisation on the first prototype but if your new wearable covers a tabletop you might need to reconsider your architecture.

We’ve all been surprised at just how much of a beating an Arduino can take, but all of the hardware to make it robust in unpredictable situations can add unnecessary bulk.

Do you need that serial-to-USB converter? Or can you hook up a C232HM cable and talk directly to the MCU? By removing components that don’t add to your system you can reduce the size of your prototype.

---

### Solutions

So how do you make your tangle of wires more professional and robust? Let’s treat the options as a sliding scale from what you have now — a tangle of wires hanging off an Arduino, all the way up to a custom DFM-ready PCB. There will be a point somewhere on this scale that satisfies both your time and budget.

Moving along this scale also represents you “formalising” your design more and more. As you move toward a PCB you have to be less fluid about your design as changes become time-consuming and costly.

#### Tidying up

An important step to help you understand and formalise your design is to have a proper tidy up. Start by making a note of all your connections (a schematic might be useful but using a tool like Fritzing would also be good at this stage). Then work out what groups of wires (harnesses) can be bunched together and get to work with cable ties to tidy up the rats’ nest!

You could go a step further and put your prototype in a suitable container, drilling holes for any IO that’s needed. This has the added benefit of making your prototype more portable and robust too.

#### Stripboard and Shields

Shields are extensively used in most prototypes so why not make a custom one for your product? Prototyping stripboard can be modified to fit Arduino headers. Or, budget permitting, PCBs are available that fit directly on to the Arduino with tracks that allow you to make your own connections.

At this point a schematic will be useful so convert your diagrams from the first stage using a tool like EAGLE. Once you’ve done that you can work out the best places to put your components on to your custom shield or even have an attempt at designing a shield PCB!

#### Custom Hardware Development

Arduino is an open-source platform so you can use their designs as a base for your own (be sure to check the license terms). Start off by grabbing the EAGLE CAD files for the Arduino board you have based your design around. Then build it up from there, modifying, adding, and removing connections as you see fit.

You can still use the Arduino IDE to program your custom boards so long as you have the correct connections. Make sure you have a suitable programming tool (like an Atmel ICE or AVR Dragon). That means that you might not even have to rewrite any code, making the transition even easier.

There are a plethora of articles online about how to best design PCBs. From hand assembly to automated, good design practises for PCBs, and tips for getting things right first time. Do your research and you’ll have custom PCBs in your hands in no time!

## Moving On Altogether

There are lots of maker-friendly options outside of the Arduino ecosystem. Arm’s Mbed is a real contender as it has an online compiler and boards from a wide range of manufacturers including ST and Nordic. Solutions from these manufacturers will allow you to get high performance out of tiny ICs along with adding built-in bluetooth and cryptographic functions.