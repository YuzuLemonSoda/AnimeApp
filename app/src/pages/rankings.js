import React, { useState, useEffect } from "react";
//import {X_RapidAPI_Key, X_RapidAPI_Host} from '../api_keys.js';
//import {
//  MDBCard,
//  MDBCardTitle,
//  MDBCardText,
//  MDBCardBody,
//  MDBCardImage,
//  MDBRow,
//  MDBCol
//} from 'mdb-react-ui-kit';

import './rankings.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

const Rankings = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

//      useEffect(() => {
//        ...
//      }, []);

    useEffect(() => {
        fetch(url)
          .then((response) => {
            if (response.ok) return response.json();
            throw new Error('something went wrong while requesting posts');
          })
          .then((posts) => setPosts(posts))
          .catch((error) => setError(error.message));
      }, []);

      if (error) return <h1>{error}</h1>;

      return <div></div>;

    function Post(props) {
    const { id, title, body } = props.data;
    return (
      <div className="post">
        <small>{id}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
    }

//    function AnimeCards() {
//          return (
//            <MDBCard style={{ maxWidth: '540px' }}>
//              <MDBRow className='g-0'>
//                <MDBCol md='4'>
//                  <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
//                </MDBCol>
//                <MDBCol md='8'>
//                  <MDBCardBody>
//                    <MDBCardTitle>Card title</MDBCardTitle>
//                    <MDBCardText>
//                      This is a wider card with supporting text below as a natural lead-in to additional content. This
//                      content is a little bit longer.
//                    </MDBCardText>
//                    <MDBCardText>
//                      <small className='text-muted'>Last updated 3 mins ago</small>
//                    </MDBCardText>
//                  </MDBCardBody>
//                </MDBCol>
//              </MDBRow>
//            </MDBCard>
//          );
//    }

    function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
      const [pages] = useState(Math.round(data.length / dataLimit));
      const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);

      function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }

      function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
      }

      function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
     }

      const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
        };

      const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        };

      return (
        <div>
            <h1>{title}</h1>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
              {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
              ))}
            </div>

            {/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time
            */}
            <div className="pagination">
              {/* previous button */}
              <button
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
              >
                prev
              </button>

              {/* show page numbers */}
              {getPaginationGroup().map((item, index) => (
                <button
                  key={index}
                  onClick={changePage}
                  className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                  <span>{item}</span>
                </button>
              ))}

              {/* next button */}
              <button
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
              >
                next
              </button>
            </div>
        </div>
      );
    }

    return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
    );

}
export default Rankings;