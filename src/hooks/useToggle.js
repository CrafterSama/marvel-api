import { useState, useCallback } from 'react';

export const useToggle = (initial) => {
  const [open, setOpen] = useState(initial);

  // eslint-disable-next-line
  return [open, useCallback(() => setOpen((status) => !status))];
};
