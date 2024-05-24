import { ActivityComponentType } from '@stackflow/react'
import { Box } from '@mui/material'
import { AppScreen } from '@stackflow/plugin-basic-ui'

const ProfileActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'PROFILE ' }}>
      <div>Profile Activity</div>
      <Box>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem unde
        maiores officiis quas totam sit recusandae reprehenderit asperiores
        accusantium! Esse, dicta sapiente veritatis et id laborum vel cumque
        illum veniam?
      </Box>
    </AppScreen>
  )
}

export default ProfileActivity
