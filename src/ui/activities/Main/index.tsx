import { ActivityComponentType } from '@stackflow/react'
import Header from '@ui/components/Header/Header'
import { Box } from '@mui/material'
import { AppScreen } from '@stackflow/plugin-basic-ui'

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <Header />
      <Box>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem unde
        maiores officiis quas totam sit recusandae reprehenderit asperiores
        accusantium! Esse, dicta sapiente veritatis et id laborum vel cumque
        illum veniam?
      </Box>
    </AppScreen>
  )
}

export default MainActivity
