import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [userPosts, setUserPosts] = useState([]);

  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");

//   useEffect(() => {
//     // Fetch users from JSONPlaceholder
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         setUsers(response.data);
//         setSelectedUser(response.data[0]?.id); // Set the first user as default
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  useEffect(() => {
    // setLoading(true);
    axios
      .get(`http://89.38.135.41:7654/api/users/vendors/${vendorId}`, config)
      .then((response) => {
        // console.log(response?.data.data);
        setUsers(response.data.data);
        console.log(response.data.data);
        setSelectedUser(response.data.data.itemCategories[0].categoryId)
        console.log(response.data.data.itemCategories[0].categoryId)
        // setLoading(false); 
      });
  }, []);

//   useEffect(() => {
//     // Fetch posts for the selected user
//     if (selectedUser) {
//       axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`)
//         .then(response => {
//           setUserPosts(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching posts:', error);
//         });
//     }
//   }, [selectedUser]);

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div>
        
      {/* <div className="carousel-buttons">
        {users.map(user => (
          <button
            key={user.id}
            className={selectedUser === user.id ? 'active' : ''}
            onClick={() => handleUserClick(user.id)}
          >
            {user.name}
          </button>
        ))}
      </div> */}
      <div className="carousel-buttons">
        {users?.itemCategories?.map(m => {
            return(
                <>
                <div>
                <button key={m.categoryId} onClick={() => setSelectedUser(m.categoryId)}>{m.categoryName}</button>
                </div>
        </>
            )
        })}
                <div className="carousel-items">
                    {users?.itemCategories?.map((m, i) => (
                        <>
                        {m.itemMenus.map((post, index) => {
                            return(
                                <div className="carousel">
                                    <img src={post.imageUrl} alt="" />
                                </div>
                                )
                            })}
                        </>
                    ))}
                    {/* {m.itemMenus?.map(post => (
                    <div key={post?.catergoryId} className="carousel-item">
                        <img style={{width: '50px'}} src={post?.imageUrl} alt="" />
                       
                    </div>
                    ))} */}
                </div>
      </div>
    </div>
  );
};

export default Carousel;
