import React from 'react';


class ReloadPage extends React.Component {

    static handleList() {
        fetch('http://localhost:8080/users/').then(result => result.json()).then(data => console.log(data)).catch(err => console.log(err));
        setTimeout(function () {
            window.location.reload()
        }, 500);
    };
}

export default ReloadPage;