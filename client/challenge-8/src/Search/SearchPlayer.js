import React, {Component} from 'react';

class SearchPlayer extends Component {
    render() {
        return (
            <>
                <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/Form.css" />
                <script src="/bootstrap/js/bootstrap.js"></script>
                <div class="form-box container-fluid col-md-6">
                    <form method='POST' action='/search'>
                        <h1>Search Player</h1>
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" />
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="col-md-6">
                            <label for="experience" class="form-label">Experience</label>
                            <input type="number" class="form-control" id="experience" />
                        </div>
                        <div class="col-md-6">
                            <label for="lvl" class="form-label">Level</label>
                            <input type="number" class="form-control" id="lvl" />
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SearchPlayer;