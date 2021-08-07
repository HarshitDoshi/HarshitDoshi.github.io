import { Link } from "react-router-dom";

interface TextLogoProps {
  logoTitle: string;
}

const TextLogo = (props: TextLogoProps) => {
  const { logoTitle } = props;
  return (
    <div className="flex flex-row justify-center items-center text-center">
      <Link to="/" className="flex flex-row justify-center title-font font-black text-lg lg:text-xl font-mono items-center text-material-grey-9 dark:text-material-grey-0 p-1 lg:p-2 border-2 border-material-grey-1 dark:border-material-grey-8 rounded-md shadow">
        {logoTitle}
      </Link>
    </div>
  )
}

export default TextLogo
