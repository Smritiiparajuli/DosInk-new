import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/button';
import { Sun, Moon } from 'lucide-react';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="cursor-pointer" variant={'outline'}>
      {theme === 'light' ? <Sun size={10} /> : <Moon size={10} />}
    </Button>
  );
};
