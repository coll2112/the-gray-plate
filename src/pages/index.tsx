import React from 'react'
import Hero from 'components/Hero'
import Card from 'components/Card'

export default function Home() {
  const cardArr = [0, 1, 2].map((i) => (
    <Card
      key={i}
      img="https://raw.githubusercontent.com/coll2112/personal_project/master/landing.png"
      text="Insert some text about project here..."
      title="Project 1"
    />
  ))
  return (
    <div>
      <Hero
        btnText="View My Projects"
        href="/about"
        subtitle="Welcome to my portfolio site, built from Next.js and Typescript. Click the button below to checkout some of my projects."
        title="Front end web developer"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '60px',
          marginBottom: '60px'
        }}
      >
        {cardArr}
      </div>
    </div>
  )
}
