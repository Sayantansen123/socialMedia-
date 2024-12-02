import { Avatar, Divider, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Action from './Action'

const Comment = ({userAvatar,createdAt,comment,username,likes}) => {
    const [liked,setLiked] = useState(false)
  return (
    <>
    <Flex gap={4} py={2} my={2} w={"full"} >
        <Avatar mt={1} src={userAvatar} size={"sm"}/>
        <Flex gap={1} w={"full"} flexDirection={"column"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{username}</Text>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"sm"} color={"gray.light"} >{createdAt}</Text>
                    <BsThreeDots/>
                </Flex>
            </Flex>
          <Text>{comment}</Text>
          <Action liked={liked} setLiked={setLiked}/>
          <Text fontSize={"sm"} color={"gray.light"}>
            {likes} likes
          </Text>
        </Flex>

    </Flex>

    <Divider my={4}/>
    </>
  )
}

export default Comment