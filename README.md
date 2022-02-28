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
</table>
