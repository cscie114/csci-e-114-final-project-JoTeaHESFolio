// src/pages/signup.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/signup.module.css"

const SignupPage = () => (
  <Layout>
    <Seo title="Sign Up" />
    <div className={styles.container}>
      <h1>Sign Up to Participate</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScJvUZjfWlqGEU3HynIAnHt-KUvQMrWwpkn07CtomKlkHkCaw/viewform?embedded=true"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Sign-Up Form"
        className={styles.iframe}
      >
        Loading…
      </iframe>
    </div>
  </Layout>
)

export default SignupPage
