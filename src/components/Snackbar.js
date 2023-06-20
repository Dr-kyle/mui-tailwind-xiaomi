"use client"
import { SnackbarProvider, enqueueSnackbar, closeSnackbar  } from 'notistack'

const closeButton = (id) => {
  return (
    <button onClick={() => closeSnackbar(id)}>
      Dismiss
    </button>
  )
}

export {
SnackbarProvider,
enqueueSnackbar,
closeSnackbar,
closeButton
}