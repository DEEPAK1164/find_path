useEffect is a function to cal this function we have to pass another 
function inside it called as callback function this will not be called
immediately but it well get called whenever useEffect need to be called
react will make sure it gets called at specific time which we are going to know 
what is that time.
after every render it will callback function so we don't want to
after every render so to avoid it pass dependency
array array along with it. 
let i only want to call 
useEffect when my searchText changes
this means my useEffect is dependent on searchText
if it is not dependent on anything it will only get called once
but question is that it will get called before render or after render??
ans is useEffect will, get called just after initial render see below example


useEffect(function(){
console.log("useEffect");
});
console.log("render");
if we dont pass any dependency array useEffect
will get called after every render 

useEffect(function(){
 console.log("useEffect");
 },[]);
console.log("render");

useEffect(function(){
console.log("call this when dependency is changed if not dependent dont call");
},[]);


useEffect(function(){
 console.log("call this when dependency searchText is changed ");
 },[searchText]);


useEffect(function(){
console.log("call this when dependency restaurant is changed");
},[restaurants]);

//...................................................//
React docs says that never create a component inside the component

Note:-Never ever write useState inside if else forloop coz it leadsto inconsistencies
never use useState outside functional component

we can create many nos of useEffect insidea component whnever i needed

//use formik to build forms in React
<!-- https://reactrouter.com/en/main/routers/create-browser-router -->

