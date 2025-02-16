// import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import { favBooks } from "./FavBooks";
// import { BookList } from "./BookList";


// export default function App () {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// };


// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };


// export default function App () {
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// };


// import { Alert } from "./Alert";

// export default function App () {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };

// import { Alert } from "./Alert";

// export default function App () {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// import { Alert } from "./Alert";


// export default function App () {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

import { HiUser } from "react-icons/hi";

export default function UserMenu({ name }) {
  return (
    <div>
      <p><HiUser className="my-icon" color="red" size="24" /> {name}</p>
    </div>
  );
};