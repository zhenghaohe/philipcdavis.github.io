---
layout: post
title:  "The Making Of Wagon Pool"
header-img: "making-wagonpool.jpg"
date:   2014-08-25
---

I made my first app this past year. It's a [simple carpooling calculator](http://www.wagonpool.com/) built to help you figure out how much each person owes. 
While it's still fresh in my mind I wanted to document the process I took in building it.
This post may be helpful for you if you want to teach yourself how to make mobile applications.

If you don't know me, I'm a designer and front end developer.
I designed and built Wagon Pool from scratch without any previous Objective C, Xcode, or Object Oriented Programming experience.

###My Goals
My hope for this project was that I would be able to ship something I was proud of.
I wanted the app to be easy to use, focused, better than alternative options.

I also wanted to have a good understanding of what it takes to build an iOS application.
I needed to learn Object Oriented Programming and learn mobile development on its own terms.

###Getting Started:
I found a 99 cent notebook to help organize my thoughts. In it, I sketched, illustrated, and diagrammed my way through the entire process.
This allowed my to free up mental space and visualize what was going on in my head.

![Notebook]({{site.baseurl}}/assets/dist/posts/wagon-notepad.jpg "Notebook")

###Design
I wanted this app to look nice and to make calculating how much each person owed quick and easy.
I spent a lot of time thinking about how I wanted the users to input information.
I mocked up 8 different ways the interface could work. This forced me to look at the interface long enough to understand the pros and cons of various approaches.
![Mockups]({{site.baseurl}}/assets/dist/posts/wagon-mockups.jpg "Mockups")
I used the last option as a starting point because I liked how it allowed the used to get fast estimates without having to type or switch pages.

I made something simple for the icon which I was planning on using.
My friend challenged me to push myself and make something memorable.
I sketched out lots of ideas some of which looked great at 512x512, but poor on the actual device.
After much tweaking I came up with something I think worked well.

![Icon]({{site.baseurl}}/assets/dist/posts/wagon-icon.jpg "Icon")

###Development
Coding Wagon Pool was one of the hardest and greatest things I have done.
So many hours went into such a small app.

I started getting comfortable with Xcode by creating outlets, simple methods, and using the interface builder.
Building a working version didn't take long but there was a lot wrong. Everything was inside my view controller.
I had read that you shouldn't cram everything inside there, but I didn't know where else to put it.
There was also a lot of duplicate code that I didn't know what to do with.

I decided to go through the [Stanford course](https://itunes.apple.com/us/course/developing-ios-7-apps-for/id733644550) on iTunes University.
The lectures were great, but I didn't get much out of them because they assumed fundamental OOP understanding.
Seven lectures in, I decided I needed something else.

I read Matt Neuburg's [iOS fundamentals](http://www.amazon.com/iOS-Programming-Fundamentals-Objective-C-Basics/dp/1491945575/ref=sr_1_2?ie=UTF8&qid=1409103316&sr=8-2) front to back, and took lots of notes.
This was my best investment of time during the whole project.
I especially enjoyed the first 5 chapters where he covered the fundamentals of Object Oriented Programming.
At the same time, I was implementing a lot of the things I was learning.
Coding every morning and evening.

Even after I finished the book, there was still a lot of time put into the app.
For better or worse, I let myself go down rabbit holes to better understand MVC patterns, auto layout, delegation, and animation.

###Ship it
About 3 months in I signed up for the developer program. I wanted to spend time debugging, learning about memory management, and getting feedback.
When it came to getting feedback I got a lot of opinions. It was important for me to understand the problems underneath suggestions.
The biggest problem was that users didn't have enough control over their input. I decided to create a modal window that gave users the ability enter in specific values outside the range.
This set me back a few weeks, but i'm glad I decided to address it in the v1.0 release.

<img class="small" src="{{site.baseurl}}/assets/dist/posts/wagon-glyphs.jpg">

After going through the process of uploading it to the app store, it spent a week waiting for review and was accepted the first try!
It's a small app, but it's something I am very proud of.
Check it out on the [app store](https://itunes.apple.com/us/app/wagon-pool-simple-carpooling/id846135212?mt=8) and let me know what you think!

![Screenshots]({{site.baseurl}}/assets/dist/posts/wagon-screenshots.jpg "Screenshots")




<p class="legal">Apple, the Apple logo, iPhone, and iPod touch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.</p>


