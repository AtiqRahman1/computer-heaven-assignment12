import React from 'react';

const Blogs = () => {
    return (
        <div className='px-20'>
            <h2 className='text-xl'>1. Question: How will you improve the performance of a React Application?</h2>
            <p>Answer: React users some techniques to minimize the number of costly DOM operations required to update the UI. There are some ways we can speed up the react application. If you faced performance problem in react apps, you should test with the minified production build. Use React.fragments without adding an extra node. Try to avoid using index as a key, because sometime it shows incorrect data. Use Redux to avoid re-render, which can be used for building memorize selectors. </p>

            <h2 className='text-xl'>2. Question: What are the different ways to manage a state in a React application?</h2>
            <p>Answer: There are main four types of state to manage React application, Local state, Global state, Server state and URL state. Local state is the easiest sort of state where useState is the first tool to manage the React components. Context API is the part of Global state which is the way to avoid problems like props drilling. To manage server state we can use React Query library that can get and change data from API. URL state is quite easy to manage React app. We can use React router for pathname, location and we can use useParams hook if we need route parameters. </p>

            <h2 className='text-xl'>3. Question: How does prototypical inheritance work?</h2>
            <p>Answer: The prototypical inheritance is an object that can point to other object and inherit all its properties. When we read a property from object but it is missing that time JavaScript automatically find it from prototype, that is called prototypical inheritance. Array object inherit from Array.prototype, Date object inherit from Date.prototype and player object inherit from player.prototype. To allow multiple instance of an object to share common properties is the main purpose.</p>

            <h2 className='text-xl'>4. Question: Why you do not set the state directly in React. </h2>
            <p>Answer: We should not set the state directly because of some reasons. After calling the setState() if we set it directly, it may replace the update we made. When we set the state directly, it does not change the state immediately. It creates pending state and after calling this method it will return the present value. If we set the state directly, we will lose control over all components.</p>

            <h2 className='text-xl'>5. Question: What is a unit test? Why should write unit tests?</h2>
            <p>Unit test is a software testing method. It is individual unit of source code that sets of one or more program modules with control data, usage procedures and operating procedures are tested whether they are fit for use.
                <br />
                Unit testing confirm that all code ensures quality before deployed. It ensures reliable engineering environment where quality is best. Unit test saves time and money, and helps us write better code.
            </p>
        </div>
    );
};

export default Blogs;