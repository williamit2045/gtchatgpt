const fs = require("fs")
let data;
try {
    const path = "./views/test.ejs"
    if (fs.existsSync(path) && fs.readFileSync(path).length > 50) {
        data = fs.readFileSync(path)
    } else {
        data = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            body {
                background-color: #383838;
                color: #e0e0e0;
        
            }
        
            .testDiv {
                border: 1px solid #e0e0e0;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                margin: 10px;
                height: min-content;
                width: min-content;
            }
        
            form {
                border: 1px solid #e0e0e0;
                display: flex;
                flex-direction: column;
                width: min-content;
                margin: 10px;
            }
        
            main {
                display: flex;
                width: auto;
                flex-wrap: wrap;
        
            }
        </style>
        
        <body>
        
            <h1>TEST PAGE</h1>
        
            <main>
        
                <div class="testDiv" id="registerDiv">
                    <label>Register</label>
                    <form>
                        <input type="text" placeholder="email" name="email" id="register_email">
                        <input type="username" placeholder="username" name="username" id="register_username">
                        <input type="password" placeholder="password" name="password" id="register_password">
                        <button onclick="registerUser()">Submit</button>
                    </form>
                </div>
        
                <div class="testDiv" id="loginDiv">
                    <label>Login</label>
                    <form>
                        <input type="username" placeholder="username" name="username" id="login_username">
                        <input type="password" placeholder="password" name="password" id="login_password">
                        <button onclick="login()">Submit</button>
                    </form>
                </div>
        
                <div class="testDiv" id="createCohortDiv">
                    <label>Create Cohort</label>
                    <form>
                        <input type="cohort" placeholder="cohort" name="cohort" id="cohortName">
                        <button onclick="createCohort()">Submit</button>
                    </form>
        
                </div>
        
                <div class="testDiv" id="getUsersDiv">
                    <label>Get Users</label>
                    <form>
                        <button onclick="getUsers()">Submit</button>
                    </form>
        
                </div>
        
                <div class="testDiv" id="getCohortsDiv">
                    <label>Get Cohorts</label>
                    <form>
                        <button onclick="getCohorts()">Submit</button>
                    </form>
        
                </div>
        
                <div class="testDiv" id="sortCohorts">
                    <label>Sort</label>
                    <select name="" id="sortDropdown">
                        <option value="1">Popularity Asc</option>
                        <option value="2">Popularity Desc</option>
                        <option value="3">Most Shared Cohorts</option>
                        <option value="4">Least Shared Cohorts</option>
                        <option value="5"></option>
                        <option value="6"></option>
        
                    </select>
        
                </div>
        
                <div class="testDiv" id="sortCohorts">
                    <label>Check Session Data</label>
                    <button onclick="checkSessionData()">Submit</button>
        
                </div>
        
                <div class="testDiv" id="destroySessions">
        
                    <label>Destroy Session</label>
                    
                    <button onclick="destroySessions()">Submit</button>
        
                </div>
        
        
            </main>
        
            <%- include("./partials/footer.ejs") %>`
    }

    fs.writeFileSync("./views/test.ejs", data)

} catch (error) {
    console.log(error)
}