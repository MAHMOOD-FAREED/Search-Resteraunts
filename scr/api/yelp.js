import axios from "axios";
// export default axios.create({
//     baseURL : 'https://dummyjson.com',
//      headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJodXN0byIsImVtYWlsIjoic2hpbmVAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNjk0NzY4OTU3fQ.8QNpZ9v6h9W3D9Z7Q1W5Z7Q1W5Z7Q1W5Z7Q1W5Z7Q1W5'
//      }
// });
export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
     headers: {
    Authorization: 'Bearer KYa0WJPuoVaE1XNx5pClnHPalw7NPWWgClaUkWG6_2r5nj5CK2bvEeSLlUteebd_ODDrFnqhppSGx0ZUICWEEa663gqcPY7p_KX3evAq0r7BVnlm7r9vHqbhZoKKZ3Yx'
     }
});


