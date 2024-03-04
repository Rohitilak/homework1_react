

const h1 = React.createElement("h1", {style : {fontWeight: "545"}}, "Topics covered");

const p1 = React.createElement("p", {}, "The following is a list of all the topics we cover in the MDN learning area.")


const link1 = React.createElement("a", {href :"#"}, "Getting started with the web");

const p2 = React.createElement("p", {style : {marginLeft : "20px"}}, "Provides a practical introduction to web development for complete beginners.");

const div1 = React.createElement('div', {}, [link1,p2])

const link2 = React.createElement("a", {href :"#"}, "HTML - Structuring the web");

const p3 = React.createElement("p", {style : {marginLeft : "20px"}}, "HTML is the language that we use to structure the different parts of our content and define what their meaning  or purpose is. this topic teaches HTML in detail.");

const div2 = React.createElement("div", {}, [link2, p3]);

const link3 = React.createElement("a", {href :"#"}, "CSS - Styling the web");

const p4 = React.createElement("p", {style : {marginLeft : "20px"}}, "CSS is the language that we use to control our web contents style and layout, us well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

const div3 = React.createElement("div", {}, [link3, p4]);



const mainDiv = React.createElement("div", { id : "main", style : {maxWidth: "45vw", height: "60vh", display : "flex", alignItem : "center", flexDirection : "column"  , justifyContent : "center", border: "2px solid black" , padding: "20px"}},  h1, p1, div1,div2, div3);






const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  React.createElement("div", {}, mainDiv)
);