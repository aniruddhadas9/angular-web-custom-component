# angular-web-custom-component
Experimenting all possibility of angular new custom web components which can be run in any environment. It can also be injected and run as simple tags as html tags in any web page by simply adding small javascript file and the tag.

I want to deep dive into the this as I am doing some experiment on custom element in angular. I am trying to design/architect a project where every team will develop there components and inject to a page which can be capable of handling all language component like angular, react, vue, ect. it will help

##### simple exampe of custom element

You can try below code in any browser to see how custom elements are capable even in todays browser without any framework or library.

```javascript

// create your custom element by extending the HTMLElement and add it as a custom element in the browser
class HelloWorld extends HTMLElement{};
customElements.define('hello-world', HelloWorld);

// create that element in the document DOM
var node = document.createElement("hello-world");

// now pick any container or DOM element and append new created cusotm element into it.
var cc = document.getElementById('logo-icon-container');
cc.appendChild(node);
```

Great! we started our first web custom component and and run in browser without any framework.

##### Little havy element in the DOM

We have added just an element to the dom, now let add more attribute and callback events to the element and see how it behaves in browser.

```javascript
// create your custom element by extending the HTMLElement and add it as a custom element in the browser
class HelloWorld extends HTMLElement{
    static observedAttribute = ['name'];
    attributeChangedCallback(key, oldValue, newvalue){}
    connectedCallback(){}
    disconnetedCallback(){}
    set name(value) {}
    get name(){}
    onClick() {
        this.dispatchEvent( new CustomEvent('nameCahnged', {name: 'aniruddh'}));
    }
};
customElements.define('hello-world', HelloWorld);

// create that element in the document DOM
var node = document.createElement("hello-world");

// now pick any container or DOM element and append new created cusotm element into it.
var cc = document.getElementById('logo-icon-container');
cc.appendChild(node);
```
 more can be get https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 
##### How angular 6 is simplifying it and communicate with external element.



##### nice talk
This is a very great talk on custom component in angular 6 above and communicating with external world.

https://www.youtube.com/watch?v=Z1gLFPLVJjY

