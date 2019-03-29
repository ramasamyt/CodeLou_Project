import React from 'react';
import Review from './Review';

const ReviewList = ({products}) => {
 
    // create a component below for one product  

    return (
        <div>
            {
                // enter letter i, for all products in the list, instead of specific number 
                products.map((user) => {
                    return (
                        <Review 
                            key={user.id} 
                            incomingdata={user} 
                        />
                    );
                })
            }
        </div>
    );
}
export default ReviewList;