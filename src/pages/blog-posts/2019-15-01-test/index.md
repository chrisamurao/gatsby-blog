---
path: '/blog/test'
date: '1547596499022'
published: true
tags: ['Design', 'JavaScript', 'UX/UI', Security]
title: 'Blog Post'
---

<br/><br/>

## Welcome

This is a test.

<br/>

### Design thoughts

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

- Testing a test,

</div>

<div style="display: grid; grid-template-columns: 1fr 1fr;">
</div>

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

- Test.

</div>

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

</div>

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

</div>

<img style="width: 20%; display: inline-block;" src="/img/blog-posts/2018-18-12-designing-steel-explorer/original-distribution-chart.png" alt="original-distribution-chart" title="original-distribution-chart">
<img style="width: 74%; display: inline-block; float: right;" src="/img/blog-posts/2018-18-12-designing-steel-explorer/flipped-distribution-chart.png" alt="flipped-distribution-chart" title="flipped-distribution-chart">

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

- Less is more. Remove elements, labels, legends, titles, etc. you don't need or can be easily inferred by the user. On personal computers, you can leverage the hover animation to expose additional information. My original designs had a dedicated chart showing the beam profile [left figure, bottom left chart], but I soon realized that the beam profile was only relevant when a single beam was selected. The beam profile was de-prioritized as a dedicated chart but appears on hover [right figure].

<div style="display: grid; grid-template-columns: 45% 50%; grid-gap: 30px;">
<img src="/img/blog-posts/2018-18-12-designing-steel-explorer/isolated-beam-profile.png" alt="isolated-beam-profile" title="isolated-beam-profile">
<img src="/img/blog-posts/2018-18-12-designing-steel-explorer/joined-beam-profile.png" alt="joined-beam-profile" title="joined-beam-profile">
</div>

- When spatially comparing elements, overlaying them on top of one another helps point out small changes. I used this technique to point out differences in beam dimensions when scrubbing through the chart.

</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 30px;">
<img src="/img/blog-posts/2018-18-12-designing-steel-explorer/large-beam-profile.png" alt="large-beam-profile" title="large-beam-profile">
<img src="/img/blog-posts/2018-18-12-designing-steel-explorer/small-beam-profile.png" alt="small-beam-profile" title="small-beam-profile">
</div>

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

- Early in development, be deliberate about supporting mobile. Not every tool needs to support a mobile device and the Steel Explorer is one of them. That being said, the Steel Explorer is embarrassing on mobile. It's so bad I added a banner on mobile devices.

</div>

<img style="width: 320px;" src="/img/blog-posts/2018-18-12-designing-steel-explorer/mobile-banner.png" alt="mobile-banner" title="mobile-banner">

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

<br/>

</div>

### Engineering thoughts

<div style="padding-left: calc(1.45rem / 2 + 1.0875rem);">

</div>
