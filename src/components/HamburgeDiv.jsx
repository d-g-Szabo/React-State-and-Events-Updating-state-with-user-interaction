// import useState from React by destructuring
import { useState } from "react";

export default function HamburgerDiv(props) {
  // declare a global variable using useState()
  // useState has three elements: the state variable, the function to update the state variable mutation function or state function, and the initial state value
  // in this case votes is the state variable, setVotes is the mutation function, and 0 is the initial state value
  const [votes, setVotes] = useState(0);
  //vanilla js
  // let votes = 0;
  // function setVotes(value) {
  //   votes = value;
  // }
  // setVotes(0);

  // never change the state variable directly, always use the mutation function

  // Write a function to handle the click event
  function handleClick() {
    setVotes(votes + 1);
    console.log(votes);
  }
  return (
    <>
      <div className="hamburger-div">
        <h2>{props.name}</h2>
        <img src={props.src} />
        <p>{props.description}</p>
        {/* Add the handleClick function to onClick event */}
        <button onClick={handleClick}>Click to vote!</button>
        <p>Votes: {votes}</p>
      </div>
    </>
  );
}

// export default function HamburgerDiv(props) {
//   return (
//     <>
//       <div className="hamburger-div">
//         <h2>{props.name}</h2>
//         <img src={props.src} />
//         <p>{props.description}</p>
//         <button
//           onClick={() => {
//             console.log("Button clicked");
//           }}
//         >
//           Read More
//         </button>
//       </div>
//     </>
//   );
// }
