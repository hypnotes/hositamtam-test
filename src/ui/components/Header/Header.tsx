import PurpleLogo from '@assets/logo.png'
import { useFlow } from '@config/stackflow'
import { SpaceBetweenView } from '@ui/components/containers/Containers'
import { FavoriteBorderOutlined, PersonOutline } from '@mui/icons-material'
import { Box } from '@mui/material'

const Header = () => {
  const { push } = useFlow()

  const handleClickFavorite = () => {
    push('NotificationActivity', {})
  }

  const handleClickProfile = () => {
    push('ProfileActivity', {})
  }

  return (
    <SpaceBetweenView sx={{ p: 2 }}>
      <img src={PurpleLogo} alt="logo" />
      <Box>
        <FavoriteBorderOutlined
          fontSize="large"
          color="secondary"
          onClick={handleClickFavorite}
        />
        <PersonOutline
          fontSize="large"
          color="secondary"
          onClick={handleClickProfile}
        />
      </Box>
    </SpaceBetweenView>
  )
}

export default Header
