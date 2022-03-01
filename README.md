# Learn Adonis Api

This repository was created to study about the restful api created with AdonisJS.

The goal is create an api that made authentication with `Name` and `Email` to be consumed by thirdy-applications. The authentication should return an API Token unique.

## Routes

<table>
  <tr>
    <th>METHOD</th>
    <th>Endpoint</th>
    <th>Header</th>
    <th>Body</th>
    <th>Response</th>
  </tr>
  <!-- Register App -->
  <tr>
    <td>POST</td>
    <td>/register</td>
    <td>null</td>
    <td>{ name: string, email: string }</td>
    <td>{ app: { id: number, name: string, email: string }, token: string }</td>
  </tr>
  <!-- Generate Token -->
  <tr>
    <td>POST</td>
    <td>/generate-token</td>
    <td>null</td>
    <td>{ email: string }</td>
    <td>{ token: string }</td>
  </tr>
  <!-- Revoke Token -->
  <tr>
    <td>DELETE</td>
    <td>/revoke-token</td>
    <td>{ Authorization: Bearer `token` }</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <!-- Generate People -->
  <tr>
    <td>POST</td>
    <td>/generate-people</td>
    <td>{ Authorization: Bearer `token` }</td>
    <td>null</td>
    <td>{ name: string, username: string, email: string, phone: string, image: string, address: { street: string, state: string, country: string } }</td>
  </tr>
</table>

## Using locally

1. Firstly, clone the repository to your computer<br/>
`git clone https://github.com/mariosantosdev/learn-adonis-api.git`

2. Open the folder of project<br/>
`cd learn-adonis-api`

3. Install all dependencies<br/>
```bash
  # Remember use node version v14
  npm install
  
  # or yarn install
```

4. Change the filename `.env.example` to `.env`

5. Setup the SQLite database executing <br/>
`node ace migration:run`

6. Run the application with `npm run dev`
