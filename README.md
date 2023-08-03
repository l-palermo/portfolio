## Software Design Choices

### Correct Semantic and HTML Structure

Regardless of how your page looks, the HTML needs to follow specific criteria to provide a pleasant experience to end users, especially those with accessibility needs. CSS is a great tool to style elements and achieve the desired design while keeping the HTML structured proper.

TBR
I have made sure links habe a proper label for screen reader, avoiding to wrap all the ext in a alink which makes the conent being confusing. labels should be short and easy to understand, a link should have a short and clear label not the whole conent of a article for example

### REM Units over Pixels

I'm a strong advocate for accessibility and responsive design. Using REM units instead of pixels is beneficial for all users, as it allows those who need to increase the browser font size to do so without affecting the layout and design negatively.


### BEM
TBR
Using BEM convention for CSS class names is the best way to make sense of a long CSS staructure and helps reasoning abour the inheritance between parent and children and their responsabilities.

I need to choose a unified approach choosing to use Grid or Flexbox.