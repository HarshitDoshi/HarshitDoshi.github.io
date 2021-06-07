import { Link } from "react-router-dom";

interface TextLogoProps {
  logoTitle: string;
}

const TextLogo = (props: TextLogoProps) => {
  const { logoTitle } = props;
  return (
    <div className="flex flex-row justify-center items-center text-center">
      <Link to="/" className="flex flex-row justify-center title-font font-black text-xl font-mono items-center text-gray-900 dark:text-gray-50 p-2 border-2 border-gray-100 dark:border-gray-800 rounded-md shadow">
        {logoTitle}
      </Link>
    </div>
  )
}

export default TextLogo
