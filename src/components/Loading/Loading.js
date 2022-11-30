import React from 'react'
import { Container, Loader, Title} from './LoadingStyles'

const Loading = () => {
  return (
      <Container>
        <Title>Uploading... </Title>
        <Loader />
      </Container>

  )
}

export default Loading