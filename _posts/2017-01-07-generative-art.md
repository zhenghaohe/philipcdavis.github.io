---
layout: post
title:  "Creating Generative Art with D3"
date:   2017-01-24
header-img-full: https://learningd3.com/blog/assets/img/posts/generative-art/heart.gif
---

<div class="post-description">Originally posted on <a href="https://learningd3.com/blog">Learning D3</a></div>

I recently took a trip to the SFMoma where I came across the work of Sol LeWitt. One of the interesting things about Sol's work was that he created the rules of his art pieces, but they were executable by anyone. I wanted to see if anyone had recreated Sol's pieces using D3.js. When I did a quick search I found that [Chuck Grimmet](https://twitter.com/cagrimmett) had made some pieces which was really inspiring.

  <blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Nice d3js rendition of Sol LeWitt&#39;s Wall Drawing 86 by <a href="https://twitter.com/cagrimmett">@cagrimmett</a> - <a href="https://t.co/BaU46OxZmc">https://t.co/BaU46OxZmc</a> <a href="https://t.co/WOQZ2M0iOA">pic.twitter.com/WOQZ2M0iOA</a></p>&mdash; Philip Davis (@philipcdavis) <a href="https://twitter.com/philipcdavis/status/789256091968245760">October 21, 2016</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


It got me interested in the idea of generative art.
Generative art is not about communicating information.
It's about making visuals with instructions.

## Recreating an art piece, in code.
<img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/heart-original.jpg" alt="Photo of Heart" />

I created this heart using Illustrator around 8 years ago. I wanted to see how difficult it would be to create something similar using D3.js. I was looking for a technique that allowed me to create this effect using any SVG path.

First, I created a grid of SVG circles and colored them using a scale from color brewer.
<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">I love how easy it is to generate pretty things with <a href="https://twitter.com/hashtag/d3js?src=hash">#d3js</a>. <a href="https://t.co/m40mQJHRK6">pic.twitter.com/m40mQJHRK6</a></p>&mdash; Philip Davis (@philipcdavis) <a href="https://twitter.com/philipcdavis/status/816507173396041728">January 4, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Next, I imported a SVG path and tried to detect whether the center of a circle was inside the path. I found lots of ways to do this with polygons, but I wasn't able to find a solution for SVG paths. Thankfully, I found a canvas method called isPointInPath that allowed me to do what I wanted.

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">❤️ Getting closer. Canvas has a handy method for detecting if a point is inside a path. Couldn&#39;t find for SVG: <a href="https://t.co/ckggydyFC6">https://t.co/ckggydyFC6</a><a href="https://twitter.com/hashtag/d3js?src=hash">#d3js</a> <a href="https://t.co/GpBtuDXPcE">pic.twitter.com/GpBtuDXPcE</a></p>&mdash; Philip Davis (@philipcdavis) <a href="https://twitter.com/philipcdavis/status/816845636012081152">January 5, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">❤️ Next Step is to get this Mitchell&#39;s best candidate example to fill in an arbitrary path. <a href="https://t.co/cksIDOrpnk">https://t.co/cksIDOrpnk</a> <a href="https://twitter.com/hashtag/d3js?src=hash">#d3js</a> <a href="https://t.co/kjC5aqf3VL">pic.twitter.com/kjC5aqf3VL</a></p>&mdash; Philip Davis (@philipcdavis) <a href="https://twitter.com/philipcdavis/status/817048601545146368">January 5, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This effect was really great on its own. But it's not what I wanted for this piece. I didn't want an even grid of circles. I wanted it to look like a human placed the circles.

I came across [Mike Bostock's](https://twitter.com/mbostock) example of [Mitchell's best candidate](https://bl.ocks.org/mbostock/d7bf3bd67d00ed79695b) in his article on [visualizing algorithms](https://bost.ocks.org/mike/algorithms/) and realized it would be the perfect fit for the task. This algorithm takes a number of random coordinates, and then chooses the best candidate based on whatever point is farthest from all the others.

Using this algorithm, and help from one of Mike's [examples](https://bl.ocks.org/mbostock/6224050) I was able to get my final result.

<img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/heart.gif" alt="Photo of Heart" />

I'm happy with it, but there are two problems I would love to have solved.

The first being the ability to detect whether or not a point is inside a path using SVG. Canvas is fine, but there are certain things I'd like to do with animations that are harder using canvas.

The second thing would be the ability to prevent circles from escaping the bounds of the path. Right now, i'm only checking the center of the circle to make sure it stays within the path. There's probably a way to detect that the area of the circle hasn't escaped the path but I haven't found it yet.

## Explorations
One of the side benefits of working on generative art in D3.js is that you discover new portions of the API. Below i've collected some of the things i've made this month.



<p class="post-img-description">
  <img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/ring-of-bars.gif" alt="ring-of-bars" />
  Example of Custom Arc Tweening.   
  <a href="http://bl.ocks.org/philipcdavis/dafa2489338f593c526a8f9978f0dee1">Live</a>
</p>

<p class="post-img-description">
  <img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/circle-tunnel.gif" alt="transitions example" />
  Example of Using D3.js transitions.
  <a href="http://bl.ocks.org/philipcdavis/b5224a272556fcb2d0c776b7a247ede4">Live</a>
</p>

<p class="post-img-description">
  <img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/static.gif" alt="generating static example" />
  Generating Static
</p>

<p class="post-img-description">
  <img class="fit" src="https://learningd3.com/blog/assets/img/posts/generative-art/moire.jpg" alt="Working with radial lines" />
  Working with Radial Lines.
  <a href="http://bl.ocks.org/philipcdavis/2b626bdef4133921615a5e4fbb921e70">Live</a>
</p>

If you're interested in learning D3.js, check out my full [course](https://learningd3.com). It's a concise and comprehensive guide to the D3.js library. I'd also love to [hear from you](https://twitter.com/philipcdavis) if you have feedback or resources to share.
