require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Usaid-Khan",
  "id": 165344421,
  "node_id": "U_kgDOCdr0pQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/165344421?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Usaid-Khan",
  "html_url": "https://github.com/Usaid-Khan",
  "followers_url": "https://api.github.com/users/Usaid-Khan/followers",
  "following_url": "https://api.github.com/users/Usaid-Khan/following{/other_user}",
  "gists_url": "https://api.github.com/users/Usaid-Khan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Usaid-Khan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Usaid-Khan/subscriptions",
  "organizations_url": "https://api.github.com/users/Usaid-Khan/orgs",
  "repos_url": "https://api.github.com/users/Usaid-Khan/repos",
  "events_url": "https://api.github.com/users/Usaid-Khan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Usaid-Khan/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-03-29T01:07:51Z",
  "updated_at": "2025-05-13T11:41:39Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
