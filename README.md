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
