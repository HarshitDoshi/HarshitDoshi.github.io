import { useState, Fragment } from 'react';
import { VscMenu, VscChevronDown, VscChevronUp, VscArchive } from "react-icons/vsc"
import SearchBar from './SearchBar';
import TextLogo from './TextLogo';
import { Avatar } from "../Image/Avatar";
import { Popover, Transition } from '@headlessui/react';
import PopoverPanelItem from "./PopoverPanelItem";

type HeaderProps = {
  drawerState: boolean;
  drawerController: Function;
}

const Header = (props: HeaderProps) => {
  const { drawerState, drawerController } = props;
  const [searchBarState, setSearchBarState] = useState(false);

  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
      icon: VscArchive,
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: VscArchive,
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: VscArchive,
    },
  ]

  return (
    <header className={`w-full fixed top-0 z-50 text-material-grey-9 dark:text-material-grey-5 body-font shadow-lg dark:shadow-lg border-b-2 border-material-grey-1 dark:border-material-grey-5 bg-material-grey-0 dark:bg-material-grey-9`}>
      <div className="flex my-2 flex-row md:flex-row items-center align-middle md:items-center justify-between">
        <div className="flex flex-row justify-center items-center">
          <button onClick={() => { drawerController(!drawerState) }} aria-label="Side Navigation Panel" className="lg:mx-2 text-4xl flex flex-row justify-center items-center text-gray-900 dark:text-gray-50 py-2 px-2 lg:px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-material-grey-0 focus-visible:ring-opacity-75">
            <div className="flex flex-row justify-center items-center align-middle">
              <VscMenu className="h-6 w-6 mx-2" />
            </div>
          </button>
          <div className="lg:flex flex-col justify-center items-center align-middle hidden">
            <TextLogo logoTitle="Harshit Doshi" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center align-middle lg:hidden">
          <TextLogo logoTitle="Harshit Doshi" />
        </div>
        <div className="flex flex-row justify-center items-center align-middle">
          <div className="mx-2 hidden lg:flex flex-col justify-center items-center align-middle">
            <SearchBar searchBarState={searchBarState} searchBarStateController={setSearchBarState} searchAction={() => { console.log("Search Action Executed...") }} searchPlaceHolder="Search..." />
          </div>
          <div className="flex flex-row justify-center items-center align-middle lg:mr-2">
            <Popover className="relative flex justify-center items-center">
              {
                ({ open }) => (
                  <>
                    <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-material-grey-0 px-2 lg:px-4 inline-flex justify-center items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-material-grey-0 focus-visible:ring-opacity-75`}>
                      <div className="h-10 w-10 lg:h-12 lg:w-12 lg:mx-2">
                        <Avatar />
                      </div>
                      {open
                        ? <VscChevronUp className="h-6 w-6 mx-1" />
                        : <VscChevronDown className="h-6 w-6 mx-1" />
                      }
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-full lg:w-screen max-w-lg lg:max-w-md px-0 transform lg:-translate-x-2/3 sm:-translate-x-2/3 md:-translate-x-1/2 sm:left-0 lg:left-1/2 top-12">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative flex flex-col justify-center align-middle bg-material-grey-1 p-4">
                            {solutions.map((solution) => (
                              <PopoverPanelItem popoverPanelItem={solution} />
                            ))}
                          </div>
                          <div className="p-4 bg-gray-50">
                            <a
                              href="##"
                              className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  Documentation
                                </span>
                              </span>
                              <span className="block text-sm text-gray-500">
                                Start integrating products and tools
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )
              }
            </Popover>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;