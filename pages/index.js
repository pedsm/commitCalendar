import { Component } from 'react'

export default class Home extends Component {
  static getInitialProps() {
    return {
      githubHandle: "pedsm",
      gitlabHandle: "pedsm",
    }
  }

  render() {
    const { githubHandle, gitlabHandle } = this.props

    return (
      <div className="container">
        <h1 className="has-text-centered is-size-1">Hello !</h1>
        <form action="">
          <div className="columns has-text-centered">
            <div className="column">
              <p>GitHub</p>
              <input className="input is-small" type="text" placeholder="Text input" />
            </div>
            <div className="column">
              <p>GitLab</p>
              <input className="input is-small" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
              <input type="submit" className="button is-link" />
            </div>
          </div>
        </form>
        <div className="columns has-text-centered">
          <div className="columns has-text-centered">
            <h2>Merging commit histories of {githubHandle} and {gitlabHandle}</h2>
          </div>
        </div>
      </div>
    )
  }
}