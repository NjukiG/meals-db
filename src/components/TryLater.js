import React from "react";
// import RecipeCard from "./RecipeCard";

function TryLater({ recipes }) {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>What is Lorem Ipsum?</h2>
      <h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h4>
      <br />
      <h2>Where does it come from?</h2>
      <h4>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </h4>

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
