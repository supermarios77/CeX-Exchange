import { MountainIcon } from "@/config/icons"
import Link from "next/link"

export default function Component() {
  return (
    <section className="bg-gray-100 dark:bg-card py-12 md:py-16 lg:py-20 border-y-2">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4">
            <Link className="flex items-center gap-2" href="#">
              <MountainIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">CeX Exchange</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Experience the future of finance with our cutting-edge cryptocurrency exchange.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <h4 className="text-gray-900 dark:text-gray-50 font-semibold text-sm">About</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-gray-900 dark:text-gray-50 font-semibold text-sm">Products</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <h4 className="text-gray-900 dark:text-gray-50 font-semibold text-sm">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                    href="#"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20 border-t border-gray-200 dark:border-gray-700 pt-6 md:pt-8 lg:pt-10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2024 CeX Exchange. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}