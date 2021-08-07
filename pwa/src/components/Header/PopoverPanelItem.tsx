import { IconType } from "react-icons";

type PopoverPanelItemProps = {
  popoverPanelItem: { name: string, href: string, icon: IconType, description: string };
}

const PopoverPanelItem = (props: PopoverPanelItemProps) => {
  const { popoverPanelItem } = props;
  return (
    <a
      key={popoverPanelItem.name}
      href={popoverPanelItem.href}
      className="flex items-center p-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
        <popoverPanelItem.icon aria-hidden="true" className="h-6 w-6 mx-1 text-material-grey-8" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">
          {popoverPanelItem.name}
        </p>
        <p className="text-sm text-gray-500">
          {popoverPanelItem.description}
        </p>
      </div>
    </a>
  )
}

export default PopoverPanelItem;
