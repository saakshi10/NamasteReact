Topics: <br />
1. JSX
2. React.createElement vs JSX
3. Benefits of JSX
4. Behind the Scenes of JSX
5. Babel & parcel role in JSX
6. Components
    a) Functional Components
        - Composing Components
    b) Class Based Components

<br /><br />

Theory Assignment: <br />
1. What is JSx?<br />
It is an extension of javascript that allows us to write html like syntax in our javascript code. This code is transpiled by bable and converted into React.createElement Which is further converted into DOM 
<br />

2. Super powers of JSX? <br />
i. allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.<br/>
ii. Code Maintainability <br/>
iii. Code Readability
<br/>

3. Role of `type` attribute in script tag? what options can we use there? <br />
Ans: The HTML <script> type Attribute is used to specify the MIME type of script and identify the content of the Tag. Attribute is not set (default), an empty string, or a JavaScript MIME type (module or importmap)
<br />

4. {titleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?<br />
titleComponent ~ is a React Element
<TitleComponent/> and <TitleComponent></TitleComponent> ~ both are React component. First one is used when no the componenent doesn't have any children.
<br />

5. Diffing Algorithm<br />
https://reactjs.org/docs/reconciliation.html

<br /> <br />

Coding Assignment: <br />
Assignment1 <br />
    ● Create a nested header element using React.createElement(h1, h2, h3 inside a div with class "title") <br />
    ● Create the same element using JSX <br />
    ● Create a functional component of the same with JSX? <br />
    ● Pass attributes into the tag in JSX <br />
    ● Composition of component(Add a component inside another) <br />
    ● {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX ?<br />

Assignment2 <br />
    ● Create a header component from scratch using functional component with JSX <br />
    ● Add a logo in the left <br />
    ● Add a search bar in the middle <br />
    ● Add a user icon on the right <br />
    ● Add css to look it nice <br />

<br /><br />

References:
1. Babel: https://babeljs.io/ <br />
2. Attribute Type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type <br />
3. JS Module: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules <br />
4. Babel Playground: https://babeljs.io/repl# <br />
5. React without JSX: https://reactjs.org/docs/react-without-jsx.html <br />