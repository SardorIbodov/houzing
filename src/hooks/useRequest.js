// import { useEffect } from "react";

// const { REACT_APP_BASE_URL } = process.env;

// export const useRequest = () => {
//   useEffect(() => {
//     const request = async ({
//       url,
//       method = "GET",
//       body,
//       token,
//       headers = {},
//       me,
//     }) => {
//       if (method === "POST") headers["Content-Type"] = "application/json";
//       if (token) headers.Authorization = `Bearer ${token}`;
//       const options = {
//         method,
//         headers,
//         body: JSON.stringify(body),
//       };
//       try {
//         let res = await fetch(
//           me
//             ? "http://localhost:8081/api/public/auth/login"
//             : `${REACT_APP_BASE_URL}${url}`,
//           options
//         );
//         res = await res.json();
//         return res;
//       } catch (err) {
//         return err.message || "Something went wrong";
//       }
//     };
//     return request;
//   }, []);
// };

// export default useRequest;
