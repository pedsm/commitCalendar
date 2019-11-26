const axios = require('axios')
const query = `
query {
	user(login:"pedsm") {
    name
		contributionsCollection(
      from:	"2019-10-09T00:00:00Z"
      to: "2020-10-09T00:00:00Z"
    ) {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            weekday
          }
        }
      }
    }

  }
}`

const { GITHUB_API_TOKEN } = process.env
const API_URL = "https://api.github.com/graphql"

async function fetchCalendar(username) { 
  try {
    const res = await axios({
      url: API_URL,
      method: 'POST',
      data: { query },
      headers: {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`
      }
    })
    return res.data
  } catch(e){
    console.error(e)
    throw e
  }
}

module.exports = {
  fetchCalendar
}