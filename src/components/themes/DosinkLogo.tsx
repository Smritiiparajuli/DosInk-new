import { useTheme } from "../../context/ThemeContext";

export const DosinkLogo = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <div className="m-auto">
      <img
        src={
          theme === "dark"
            ? "/images/dosink-logo-light.png"
            : "/images/dosink-logo-dark.png"
        }
        alt={theme === "dark" ? "Dosink logo light" : "Dosink logo dark"}
        className={`object-cover ${className}`}
      />
    </div>
  );
};
