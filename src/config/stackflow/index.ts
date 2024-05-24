import { stackflow } from '@stackflow/react'
import MainActivity from '@ui/activities/Main'
import NotificationActivity from '@ui/activities/Notification'
import ProfileActivity from '@ui/activities/Profile'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino'
    }),
    historySyncPlugin({
      routes: {
        /** 페이지 */
        MainActivity: '/',
        NotificationActivity: '/notification',
        ProfileActivity: '/profile'
        /** Auth 관련 페이지 */

        /** 모달 */

        /** 바텀시트 */
      },
      fallbackActivity: () => 'MainActivity'
    })
  ],

  activities: {
    /** 페이지들 */
    MainActivity,
    NotificationActivity,
    ProfileActivity
  },
  initialActivity: () => 'MainActivity'
})
