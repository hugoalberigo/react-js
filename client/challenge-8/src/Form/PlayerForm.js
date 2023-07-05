import React from 'react';

export default function PlayerForm(props) {
    const {type} = props;
    let {method, action, title} = ""
    let data = {}

    if (type === "create") {
        method = "POST"
        action = "/register-player"
        data = {
            username: "",
            email: "",
            password: "",
            experience: "",
            lvl: ""
        }
        title = "Create new player"
    } else if (type === "edit") {
        method = "PUT"
        action = "/update-player"
        data = {
            username: "dummy",
            email: "dummy@mail.com",
            password: "12345",
            experience: "100",
            lvl: "5"
        }
        title = "Edit data player"
    }

    return (
        <>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/Form.css" />
        <script src="/bootstrap/js/bootstrap.js"></script>
        <div class="form-box container-fluid col-md-6">
            <form method={method} action={action}>
                <h1>{title}</h1>
                <div class="col-md-6">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value={data.username} />
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value={data.email}/>
                </div>
                <div class="col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" value={data.password}/>
                </div>
                <div class="col-md-6">
                    <label for="experience" class="form-label">Experience</label>
                    <input type="number" class="form-control" id="experience" value={data.experience}/>
                </div>
                <div class="col-md-6">
                    <label for="lvl" class="form-label">Level</label>
                    <input type="number" class="form-control" id="lvl" value={data.lvl}/>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}