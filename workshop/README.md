# Image processing

## Background

When dealing with an image, it is very common to need to change its colours. Perhaps to make it grayscale, or to remove all red colouring - think Instagram filters!

To work with the colors in an image, it is common to represent the pixels in an array, with each block of four entries in the array representing the red, green, blue and alpha values of its colour (RGBA).

For example, if the picture had only 2 pixels, the array might be like this:
```js
const img = [0.4, 0.8, 0.7, 0.25, 0.2, 0.9, 0.14, 0.5]
```
This means the first pixel's RGBA is `(0.4, 0.8, 0.7, 0.25)` and the second pixel's RGBA is `(0.2, 0.9, 0.14, 0.5)`.

If we wanted to make a new image where all the red colouring has been removed, we would end up with
```js
const imgNoRed = [0, 0.8, 0.7, 0.25, 0, 0.9, 0.14, 0.5]
```
(Notice that the red part of each pixel is now 0.)

In this workshop you will be working with arrays like these to create different visual effects. Once you're done, we can have a go at doing this for real with the HTML canvas.

## Warm up

This file contains a few exercises which will help you get the skills you need. It's a good idea to complete it before attempting the challenge.

## Challenge

You will be asked to write a few functions which process an image array to achieve certain effects.
