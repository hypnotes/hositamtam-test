import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { Stack } from '@config/stackflow'
import { MobileLayout } from '@ui/components/containers/MobileLayout'
import SnackbarTheme from '@ui/SnackbarTheme'
import { themeCreator } from '@ui/theme/base'
import { Check, Error, Info, Warning } from '@mui/icons-material'
import { ThemeProvider } from '@mui/material'
import '@stackflow/plugin-basic-ui/index.css'

function App() {
  const theme = themeCreator('HositamtamTheme')

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={new QueryClient()}>
          <SnackbarProvider
            iconVariant={{
              success: <Check color="success" />,
              error: <Error color="error" />,
              warning: <Warning color="warning" />,
              info: <Info color="info" />
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            Components={{
              success: SnackbarTheme,
              error: SnackbarTheme,
              warning: SnackbarTheme,
              info: SnackbarTheme
            }}
          >
            <MobileLayout>
              <Stack />
            </MobileLayout>
          </SnackbarProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
