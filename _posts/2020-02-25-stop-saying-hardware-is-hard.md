---
layout: post
title:  "Stop Saying “Hardware is Hard”"
date:   2020-02-25 13:45:28 +0100
categories: blog
summary: The outdated adage destroying innovation.
---
“Hardware is hard”. Anyone who has worked in electronic product development has heard this phrase — often hundreds of times. It is repeated to management to absolve blame for delays, used as a mantra in times of low productivity and morale, and worst of all — it is spoken to new entrants into the industry as a “warning”.

This article will briefly examine the reasons why this phrase is damaging and then provide some useful steps to follow to ensure you don’t fall into the “hardware is hard” trap.

---

Everything is hard. Getting out of bed on a cold winter morning is hard. Poaching an egg perfectly every time is hard. Getting humans onto the Moon is hard. That doesn’t mean they aren’t worthwhile pursuits.

Outside of the world of electronics, when a challenge is “hard” it is seen as something to overcome, a mere obstacle in the way of progression. But when it comes to electronics the challenge is *hard*. Not just “hard”, but *hard*.

Engineers working in the hardware space will often try to dissuade incumbent engineers from following this line of work — “go into software”, they say, “the money is better and the work is easier”, they’ll tell you. But is this true? Is this useful advice? I think not.

Imagine if the same attitude was taken with farmers, doctors, and game developers. We would have nothing to eat, be sick constantly and have nothing to distract us from these problems!

> Everything is hard. Getting out of bed on a cold winter morning is hard.

Maybe I have got it all wrong and these engineers don’t truly believe hardware is hard. Perhaps electronic engineers say this to put themselves on a pedestal? If we can create the illusion that getting good results is unobtainable by others then we can keep ourselves in work for longer. Supply and demand is a wonderful thing when you’re in demand.

> We should be encouraging new talent into the industry at all levels.

But what should we do instead? We should be encouraging new talent into the industry at all levels. Different wording can make a vastly different impression on a young engineer. Try “hardware is a real challenge!” with a tone of excitement as opposed to a glum “hardware is hard” next time you are talking to a prospective young engineer. Most engineers I have met are fantastic at explaining difficult concepts to people, brilliant at highlighting inaccuracies without belittling someone, and patient and diligent when it comes to problem solving — but we are none of these things when it comes to promoting our industry.

We all know that engineering is a beautiful discipline but one that can appear intimidating to prospective engineers or non-technical teammates. It is our responsibility to make engineering appear less intimidating.

---

How can we make hardware projects less daunting to non-engineers? It’s all about the approach you take towards your project from the begining.

> Working, useful prototypes are the primary measure of progress.

Having the right approach when it comes to hardware design is essential for startups. At Embedism we provide “useful output at every stage”, but what does this really mean? In brief, it is how we structure our projects to ensure that as little work as possible is wasted, and that our clients get something useful (and cool) in their hands as soon as possible.

We arrived at our style of working through distilling and interpreting the Agile Manifesto. In particular: working, useful prototypes are the primary measure of progress; simplicity and choosing a low-resistance development path is essential; and all of this is achieved through technical excellence and good design.

In practical terms this means our projects tend to follow an order similar to this:
1. Use off-the-shelf (OTS) development and breakout boards to create a proof of concept (POC). This usually looks like a rat’s nest of jumper wires joining together various dev boards.
1. Develop driver and application firmware for the POC hardware. Here we will make use of open-source libraries and drivers as starting points for developing our own.
1. Create custom hardware based around the OTS boards. This could be a custom “shield” or “hat”, or perhaps a fully custom dev board. These boards are covered in test points, connectors for connecting up new peripherals, and tend to be pretty huge!
1. Refine and repeat. Now we fix bugs in both hardware and firmware, improve the design, and shrink the size of the board. All of this is done as many times as needed depending on the desired outcome of the project.

It can be very tempting to skip out some of the steps above, especially step 3. Step 3 is often seen as an unnecessary expense as often the designs for dev boards are easily available so it’s simple to jump straight to a “final” design. *Don’t do it!* Yes, the PCB might function, and yes, it might look more impressive to potential investors, but consider the cost (financial, time, and mental) of having to change it in the future. For example, changing a sensor from an I2C variant to a SPI variant can go from: *adding a couple of traces on a 2-layer, sensor-only “shield” to: pull out new traces from different pins on the MCU and route these over the entire board*. And let’s be honest, the routing around the MCU is probably already extremely crowded.

Following these steps won’t make developing hardware *easy* but it will certainly prevent it from being so hard that you want to give up.

If you are finding that your hardware isn’t playing ball then get help! Before seeking help from consultants (and that includes us at Embedism), try asking one of the many online communities for assistance. If your question will reveal your intellectual property then come up with a similar example that doesn’t. Ask on [electronics.stackexchange.com](https://electronics.stackexchange.com/), [/r/AskElectronics](http://www.reddit.com/r/AskElectronics/), or the [EEVblog Forum](https://www.eevblog.com/forum/), all excellent places to get advice.