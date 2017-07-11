export const HIDE_FLASH = 'HIDE_FLASH';
export const SHOW_FLASH = 'SHOW_FLASH';

export const hideFlash = () => (
  {
    type: HIDE_FLASH
  }
)

export const showFlash = (message, status) => (
  {
    type: SHOW_FLASH,
    message,
    status
  }
)
