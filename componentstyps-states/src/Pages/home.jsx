import React from 'react';

function Home(props) {
    let tech = "ReactJs";
    let date = Date();
    return (
        <div>
            {tech}
            <br/>
            {date}
        </div>
    );
}

export default Home;