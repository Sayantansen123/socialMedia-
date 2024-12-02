import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={401} postImg="/post1.png" postTitle="lets talk about something"/>
      <UserPost likes={12020} replies={4021} postImg="/post2.png" postTitle="lets talk about something nice"/>
      <UserPost likes={12002} replies={4021} postImg="/post3.png" postTitle="lets talk about something hih"/>
    </>
  )
}

export default UserPage
