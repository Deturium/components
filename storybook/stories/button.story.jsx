import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes';

import { Button } from '@myc/components'

storiesOf('Button', module)

.add('with text', withNotes("A simple Button")(
    () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    )
  ))

  .add('with some emoji', withNotes("A emoji Button")(
    () => (
      <Button onClick={action('another clicked')}>
        <span>😀 😎 👍 💯</span>
      </Button>
    )
  ))
