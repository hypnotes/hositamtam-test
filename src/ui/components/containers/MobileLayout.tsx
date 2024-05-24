import { Box, styled } from '@mui/material'

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <MobileContainer>{children}</MobileContainer>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5'
})

const MobileContainer = styled(Box)({
  width: 390,
  position: 'relative',
  maxHeight: 1200,
  height: '100vh',
  overflow: 'hidden'
})
