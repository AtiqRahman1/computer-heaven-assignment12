import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='justify-items-center'>
            <div className="card text-center w-full bg-neutral text-primary-content">
                <div className="card-body ">
                    <h2 className="text-3xl">My Name: Atiqur Rahman</h2>
                    <p>Email: atiq94.ar@gmail.com</p>
                    <p>Educational background: I have completed my bechelor degree in Law from Uttara University</p>
                    <p>List of Skills: HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACTJS, NODEJS </p>
                </div>
            </div>

            <div>
                <h2 className='text-3xl'>My 3 live website link</h2>
                <p>project-1: (https://unique-career-coach-assignment10.netlify.app/)</p>
                <p>project-2: (https://laptop-world-assignment9.netlify.app/)</p>
                <p>project-3: (https://awesome-electronics-assignment11.netlify.app/)</p>
            </div>
        </div>
    );
};

export default MyPortfolio;