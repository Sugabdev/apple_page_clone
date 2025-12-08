export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop and Learn */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mac
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AirPods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TV & Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AirTag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Apple Wallet */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Apple Wallet</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Cash
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Manage Your Apple Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Store Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  iCloud.com
                </a>
              </li>
            </ul>
          </div>

          {/* Entertainment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entertainment</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple One
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple TV+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Arcade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Fitness+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple News+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apple Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              More ways to shop: Find an Apple Store or other retailer near you.
              Or call 1-800-MY-APPLE (1-800-692-7753).
            </p>
            <p className="text-sm text-gray-400">United States</p>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-sm text-gray-400 text-center">
              Copyright © 2025 Apple Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sales and Refunds
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Legal
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
