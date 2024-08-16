import { Disclosure, DisclosureButton, DisclosurePanel, /*Menu, MenuButton, MenuItem, MenuItems*/ } from '@headlessui/react'
import { Bars3Icon, /* BellIcon,*/ XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Ana Sayfa', href: '/main', current: false },
  { name: 'RunUp Spor', href: '/sport', current: false },
  { name: 'RunUp Kafe', href: '/cafe', current: false },
  { name: 'Supplement', href: '/supplement', current: false },
  { name: 'Antrenörler', href: '/trainers', current: false },
  { name: 'İletişim', href: '/contact', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const navigate = useNavigate();
  const handleClick = ()  => {
    navigate('/main');
  };

  return (
    <Disclosure as="nav" className=" bg-sage  fixed top-0 left-0 w-full shadow-lg z-50" >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-[40]">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-timberwolf hover:bg-hunter-green hover:text-timberwolf focus:outline-none focus:ring-2 focus:ring-inset focus:ring-timberwolf">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <img 
                onClick={handleClick}
                alt="Your Company"
                src="http://www.runupsports.com/assets/img/logo/logo.svg"
                className="h-10 w-auto hover:cursor-pointer"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-timberwolf' : 'text-timberwolf hover:bg-gray-700 hover:text-timberwolf',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-timberwolf' : 'text-timberwolf hover:bg-gray-700 hover:text-timberwolf',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
