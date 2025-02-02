// By this we can create the element or html tag.
// The object is the place where you give attributes to the tags.
const parent = React.createElement("div", {id: "upperDiv"}, [React.createElement("h1", {id: "heading"}, "Welcome to React World"), React.createElement("h1", {id: "heading"}, "Welcome to React World")])
// const heading = React.createElement("h1", {id: "heading"}, "Welcome to React World")
// How we have to put this h1 tag inside the div tag that we have created in the body whose id is "root".
// by below code we can put our h1 element that we have created in React into DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// these are the React element and at the end of the day they are converted to html
// ReactElement(Object) => HTML(Browser Understands)

// JSX exist
