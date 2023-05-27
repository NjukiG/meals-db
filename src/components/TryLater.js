import React from "react";
// import RecipeCard from "./RecipeCard";

function TryLater({ recipes }) {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>My recipes to try later.</h2>

      {/* <div className="container row">
        {recipes.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} />;
        })}
      </div> */}
    </div>
  );
}

export default TryLater;



// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [memberId, setMemberId] = useState('');
//   const [verificationResult, setVerificationResult] = useState(null);
//   const [error, setError] = useState('');

//   const handleMemberIdChange = (event) => {
//     setMemberId(event.target.value);
//   };

//   const handleVerifyMember = async () => {
//     try {
//       const response = await axios.post('http://healthcloud-api.com/verify', {
//         memberId: memberId,
//       });

//       setVerificationResult(response.data);
//       setError('');
//     } catch (error) {
//       setError('An error occurred while verifying the member.');
//       setVerificationResult(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Member Verification</h1>
//       <label htmlFor="memberId">Member ID:</label>
//       <input
//         type="text"
//         id="memberId"
//         value={memberId}
//         onChange={handleMemberIdChange}
//       />
//       <button onClick={handleVerifyMember}>Verify</button>

//       {error && <p>{error}</p>}
//       {verificationResult && (
//         <div>
//           <h2>Verification Result</h2>
//           <p>Member ID: {verificationResult.memberId}</p>
//           <p>Name: {verificationResult.name}</p>
//           <p>Eligibility: {verificationResult.eligibility}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

